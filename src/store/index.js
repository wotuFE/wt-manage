/**
 * 初始化vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import login from './modules/login'
Vue.use(Vuex)

const state = {
  title: '沃土前端社区',
  // isLogin: false,
  // userInfo: null,
  rightObj: {
    // 右上角的文字
    text: '',
    // 右上角的图标
    icon: 'more',
  },
  isNew: true,
  isSelected: '2',
  currentPage: 'contact'
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    login
  }
})
