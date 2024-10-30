import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    token: null,
  },
  getters: {
   
  },
  mutations: {
    setAuthentication(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
      state.token = payload.token;
    },
  },
  actions: {
    login({ commit }, token) {
      localStorage.setItem('token', token);
      commit('setAuthentication', { isAuthenticated: true, token });
    },
    logout({ commit }) {
      localStorage.removeItem('token');
      commit('setAuthentication', { isAuthenticated: false, token: null });
    },
  },
  modules: {
  }
})
