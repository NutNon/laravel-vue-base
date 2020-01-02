import axios from "axios";
import Service from "../AuthService";

import { domain } from "../../utils/Constants.util"

const Auth = {
  login(username, password) {
    const url = `${domain}/login`
    const data = {
      username,
      password
    }
    return axios.post(url, data)
      .then(res => res.data)
  },
  getUserData () {
    return Service.get('/details')
  }
}

export default Auth
