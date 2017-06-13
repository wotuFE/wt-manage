/**
 * 异步操作
 */
/* eslint-disable */
import Axios from 'axios'
const qs = require('qs') // 引入node的qs模块
const envBaseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:7777' : 'http://www.yinjianquan.cn:7777'

Axios.defaults.transformRequest = [(data) => qs.stringify(data)]
Axios.defaults.baseURL = envBaseUrl

export default {
  /**
   * 例： 封装POST请求 (ps: 也可以写到utils里，随意)
   * @param {url, data} param1 ajax-data
   */
  'POST'({ state, commit, dispatch }, { url, data }) {
    // url = baseUrl + url
    url[0] === '/' ? '' : url = '/' + url
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
