import api from '../actions'
// state
const state = {
    userInfo: null,
    isLogin: false
}
// getters
const getters = {
    isLogin: state => state.isLogin,
    userInfo: state => state.userInfo
}

// actions
const actions = {
    'LOGIN'({commit,state,dispatch},{url,data}) {
       api.post(url,data).then((res)=>{
            commit('LOGIN_SUCCESS',res.data);
       }).catch(()=>{
           alert('请求失败')
       })
    }
}

// mutations
const mutations = {
    'LOGIN_SUCCESS'(state,payload) {
        state.userInfo = payload;
        state.isLogin = true;
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}



