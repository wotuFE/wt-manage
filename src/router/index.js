import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 通讯录
const contactBook = resolve => require(['@/views/contactBook'], resolve)
const detail = resolve =>
  require(['@/views/contactBook/children/detail'], resolve)
// 活动
const activity = resolve => require(['@/views/activity'], resolve)
// 财务
const finace = resolve => require(['@/views/finace'], resolve)
const finace_add = resolve => require(['@/views/finace/children/add'], resolve)
// 账户
const account = resolve => require(['@/views/account'], resolve)
const login = resolve => require(['@/views/account/children/login'], resolve)
const register = resolve => require(['@/views/account/children/register'], resolve)
const edit = resolve => require(['@/views/account/children/edit'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'contactBook'
    },
    {
      path: '/contactBook',
      name: 'contactBook',
      component: contactBook,
      children: [
        {
          name: 'detail',
          path: 'detail',
          component: detail
        }
      ]
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/finace',
      name: 'finace',
      component: finace,
      children: [
        {
          path: 'add',
          name: 'add',
          component: finace_add
        }
      ]
    },
    {
      path: '/account',
      name: 'account',
      component: account,
      children: [
        {
          path: 'login',
          name: 'login',
          component: login
        },
        {
          path: 'register',
          name: 'register',
          component: register
        },
        {
          path: 'edit',
          name: 'edit',
          component: edit
        }
      ]
    }
  ]
})
