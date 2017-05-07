/**
 * 详情页
 */

import * as types from '../mutations-type'

const state = {
  manDetail: ''
}

const getters = {
  manDetail: state => state.manDetail
}

const actions = {
  /**
   * 在详情页刷新页面时
   */
  'whenRefreash' ({dispatch, commit}, id) {
    const url = '/contact/getContactList'
    const data = {
      num: 30
    }
    id = Number(id)
    dispatch('_POST', {url, data}).then(
      (res) => {
        for (let i of res.data) {
          if (i.id === id) {
            commit('MAN_DETAIL', i)
            break
          }
        }
        return
      },
      (err) => {
        throw new Error(err)
      }
    )
  }
}

const mutations = {
  [types.MAN_DETAIL] (state, payload) {
    state.manDetail = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
