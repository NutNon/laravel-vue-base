<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$item = [
			[
				'name'      => 'foo bar',
				'email'     => 'foo@bar.com',
				'username'  => 'foobar',
				'password'  => bcrypt('123456'),
			]
		];

		$insertBatch = collect($item)->map(function ($item){
			return [
				'name'        => $item['name'],
				'email'       => $item['email'],
				'username'    => $item['username'],
				'password'    => $item['password'],
				'created_at'  => \Carbon\Carbon::now(),
				'updated_at'  => \Carbon\Carbon::now(),
			];
		})->values()->all();

		DB::table('users')->insert($insertBatch);
	}
}
