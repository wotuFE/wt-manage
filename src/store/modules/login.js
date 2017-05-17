import { post } from '@/utils/client'
// state
const state = {
  userInfo: {
    // id: 7,
    // phone: 15013795539,
    // realName: '胡儒清',
    // nickName: '晴天',
    // age: 0,
    // nativePlace: '广西',
    // skillTree: '',
    // password: '123456',
    // sex: '1',
    // company: '',
    // github: '',
    // jurisdiction: '',
    // headImg: 'http://127.0.0.1:7777/images/portrait.png'
  },
  isLogin: false
}
// getters
const getters = {
  isLogin: state => state.isLogin,
  userInfo: state => state.userInfo
}

// actions
const actions = {
  LOGIN ({ commit, state, dispatch }, { url, data }) {
    post(url, data)
      .then(res => {
        commit('HANDLE_USERINFO', res.data)
        // 改变登录状态
        commit('HANDLE_LOGIN_STATUS', true)
      })
      .catch(() => {
        alert('请求失败')
      })
  }
}

// mutations
const mutations = {
  // 修改userinfo
  HANDLE_USERINFO (state, payload) {
    state.userInfo = {
      ...state.userInfo,
      ...payload
    }
  },
  // 修改userinfo
  HANDLE_LOGIN_STATUS (state, payload) {
    state.isLogin = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
