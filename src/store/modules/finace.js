const state = {
  // 是否有新增的记录
  hasNew: false
}

const getters = {
  hasNew: state => state.hasNew
}

const mutations = {
  'HASNEW'(state,payload) {
    state.hasNew = payload;
  }
}
export default {
  state,
  getters,
  mutations
}