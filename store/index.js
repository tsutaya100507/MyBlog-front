import axiosRetry from "axios-retry";

export const state = () => ({
  authUser: null,
})

export const mutations = {
  SET_USER: function (state, data) {
    if (data) {
      state.authUser = data
    } else {
      state.authUser = null
    }
  }
}

export const actions = {
  async login({ commit }, { username, password }) {
    try {
      // todo: サーバーサイドとのつなぎこみ時にコメントを外して使用
      // const res = await axiosRetry.post('api/users/login', { username, password })
      if (username != "admin" || password != "pass") {
        throw new Error("eroor!")
      }
      commit('SET_USER', username)
    } catch (error) {
      throw error
    }
  },
  async logout({ commit }) {
    try {
      commit('SET_USER', null)
    } catch(error) {
      throw error
    }
  }
}