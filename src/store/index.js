/**
 * 初始化vuex
 */

import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import contactBook from './modules/contactBook'

Vue.use(Vuex)

const state = {
  title: '沃土前端社区'
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    contactBook
  }
})
