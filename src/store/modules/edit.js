import { post } from '@/utils/client'

const state = {
  editObj: {
    title: '',
    option: '',
    optionValue: ''
  }
}

const getters = {
  editObj: state => state.editObj
}

const actions = {
  // 更新用户信息到服务器
  'UPDATE_USER' ({
    commit,
    state,
    dispatch
  }, {
    url,
    data
  }) {
    post(url, data).then((res) => {
      // 修改store的用户信息
      commit('HANDLE_USERINFO', data);
    }).catch(() => {
      alert('更新失败');
    })
  }
};

const mutations = {
  // 修改用户信息(本地修改)
  'EDIT_USER' (state, payload) {
    state.editObj = payload;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}