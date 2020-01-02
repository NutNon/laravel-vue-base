<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
	/**
	 * login api
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function login()
	{
		if (Auth::attempt(['username' => request('username'), 'password' => request('password')])) {
			$user = Auth::user();
			$success['token'] = $user->createToken('access-token')->accessToken;
			return response()->json(['status' => "success", 'result' => $success], $this->successStatus);
		} else {
			return response()->json(['status' => "error", 'result' => 'Unauthorised'], 401);
		}
	}

	/**
	 * Register api
	 *
	 * @param Request $request
	 * @return \Illuminate\Http\Response
	 */
	public function register(Request $request)
	{
		$validator = Validator::make($request->all(), [
			'name' => 'required',
			'email' => 'required|email|unique:users',
			'username' => 'required|unique:users',
			'password' => 'required',
			'c_password' => 'required|same:password'
		]);
		if ($validator->fails()) {
			return response()->json(['error' => $validator->errors()], 401);
		}

		$input = $request->all();
		$input['password'] = bcrypt($input['password']);
		$input['last_login'] = Carbon::now();
		$user = User::create($input);
		$success['token'] = $user->createToken('access-token')->accessToken;
		$success['user'] = $user;
		return response()->json(['success' => $success], $this->successStatus);
	}

	/**
	 * Get currently logged in user detail.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function details()
	{
		$user = Auth::user();
		return response()->json($user, $this->successStatus);
	}

	/**
	 * Logout currently logged in user.
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function logout()
	{
		$user = Auth::user()->token();
		$user->revoke();
		return response()->json(['message' => 'Logout successful'], $this->successStatus);
	}
}
