/**
 * 异步操作
 */

import { post } from 'client'
export default {
  /**
   * 例： 封装POST请求 (ps: 也可以写到utils里，随意)
   * @param {url, data} param1 ajax-data
   */
  '_POST'({ state, commit, dispatch }, { url, data }) {
    return post(url, data);
  }
}
