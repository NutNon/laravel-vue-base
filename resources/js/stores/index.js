import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './modules/Auth.store';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Auth,
  },
  // strict: debug,
  plugins: [createPersistedState()]
})
