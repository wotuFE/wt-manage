/**
 * 异步操作
 */
import Axios from 'axios'
const qs = require('qs') // 引入node的qs模块

Axios.defaults.transformRequest = [(data) => qs.stringify(data)]

export default {
  /**
   * 例： 封装POST请求 (ps: 也可以写到utils里，随意)
   * @param {url, data} param1 ajax-data
   */
  '_POST' ({ state, commit, dispatch }, { url, data }) {
    /* eslint-disable */
    url = baseUrl + url;
    return Axios.post(url, data).then(
      (res) => {
        if (res.data.code === 666) {
          return Promise.resolve(res.data)
        } else {
          return Promise.reject()
        }
      },
      () => {
        return Promise.reject()
      }
    )
  }
}
