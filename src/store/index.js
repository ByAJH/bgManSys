import Vue from 'vue'
import Vuex from 'vuex'
import setRouters from './setRouters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMenu: null,
    collapse: false
  },
  mutations: {
    changeCurrentMenu(state, payLoad) {
      state.currentMenu = payLoad
    },
    changeCollapse(state, payLoad) {
      state.collapse = !state.collapse
    }
  },
  actions: {
  },
  modules: {
    setRouters
  }
})
