import Service from '../../services'

// initial state
const state = {
  userData: {},
  loginForm: {
    username: '',
    password: ''
  }
}

// getters
const getters = {}

// actions
const actions = {
  async login({ state, commit }) {
    const data = await Service.Auth.login(state.loginForm.username, state.loginForm.password)
    commit('setUserData', {
      token: data.result.token
    })
  },
  async populateUserData ({ commit }) {
    const data = Service.Auth.getUserData()
    commit('setUserData', data)
    return data
  },
  async logout ({ commit }) {
    commit('setUserData', {})
  }
}

// mutations
const mutations = {
  setUserData(state, data) {
    state.userData = {
      ...state.userData,
      ...data
    }
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
