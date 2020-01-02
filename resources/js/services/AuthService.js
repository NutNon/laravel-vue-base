import axios from "axios"
import store from "../stores"
import { domain } from "../utils/Constants.util"

const http = new axios.create({
  baseURL: domain
})

const httpMethod = {
  get(url, options = {}) {
    const token = store.state.Auth.userData.token
    if (!token) {
      return Promise.reject("No access token.")
    }

    return http
      .get(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.data);
  },
  post(url, data = null, options = {}) {
    const token = store.state.Auth.userData.token
    if (!token) {
      return Promise.reject("No access token.")
    }

    return http
      .post(url, data, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.data);
  },
  put(url, data = null, options = {}) {
    const token = store.state.Auth.userData.token
    if (!token) {
      return Promise.reject("No access token.")
    }

    return http
      .put(url, data, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.data);
  },
  delete(url, options = {}) {
    const token = store.state.Auth.userData.token
    if (!token) {
      return Promise.reject("No access token.")
    }

    return http
      .delete(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.data)
  }
}

export default httpMethod
