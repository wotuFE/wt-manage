/**
 * 状态提交
 */

import * as types from './mutations-type'

export default {
  // 更改顶部标题
  'UPDATE_TITLE' (state, payload) {
    state.title = payload
  },
  // 更改又上角内容
  'UPDATE_RIGHTOBJ' (state, payload) {
    state.rightObj = payload
  },
  'USER_INFO' (state, payload) {
    state.userInfo = payload
  },
  /**
   * 改变右上角按钮的方法
   * @param {Function} payload 一个方法
   */
  [types.RIGHTBTN_FUNCTION] (state, payload) {
    state.rightBtn = payload
  },
  /**
   * 重置右上角按钮方法
   */
  [types.RESET_RIGHTBTN_FUNCTION] (state) {
    state.rightBtn = () => false
  }
}
