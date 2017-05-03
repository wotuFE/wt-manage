/**
 * 状态提交
 */

export default {
  // 更改顶部标题
  'UPDATE_TITLE'(state, payload) {
    state.title = payload
  },
  // 更改又上角内容
  'UPDATE_RIGHTOBJ'(state,payload) {
    state.rightObj = payload;
  },
  'USER_INFO'(state,payload) {
    state.userInfo = payload;
  }
}
