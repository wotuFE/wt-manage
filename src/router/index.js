import Vue from 'vue'
import Router from 'vue-router'

// 代码分块语法 (路由懒加载 -- 访问到该页面才会加载相应代码)
const index = resolve => require(['../views/index'], resolve)
// 通讯录
const contactBook = resolve => require(['../views/contactBook'], resolve)
// 活动
const activity = resolve => require(['../views/activity'], resolve)
const beforeActivitiesList = resolve => require(['../views/activity/children/beforeActivitiesList'], resolve)
const recentActivity = resolve => require(['../views/activity/children/recentActivity'], resolve)
// 账号
const login = resolve => require(['../views/account/children/login'], resolve)
const register = resolve => require(['../views/account/children/register'], resolve)
const account = resolve => require(['../views/account'], resolve)
const edit = resolve => require(['../views/account/children/edit'],resolve)
const meIndex = resolve => require(['../views/account/children/index'],resolve)

Vue.use(Router)

export default new Router({
  routes: [
     {
      name: 'root',
      path: '/',
      redirect: { name: 'contactBook' },
      component: login
    },
    {
      path: '/index',
      component: index,
      children: [{
        name: 'contactBook',
        path: 'contactBook',
        component: contactBook
      },
      {
        name: 'login',
        path: '/login',
        component: login
      },
      {
        name: 'register',
        path: '/account/register',
        component: register
      },
      {
        name: 'account',
        path: '/account',
        component: account,
        redirect: '/account/index',
        children: [
          {
            name: 'edit',
            path:'edit/:id',
            component: edit
          },
          {
            name: 'index',
            path:'index',
            component: meIndex
          }
        ]
      },
      {
        name: 'activity',
        path: '/activity',
        component: activity,
        children: [{
          name: 'recentActivity',
          path: 'recentActivity',
          component: recentActivity
        }, {
          name: 'beforeActivitiesList',
          path: 'beforeActivitiesList',
          component: beforeActivitiesList
        }]
      }]
    }
  ]
})
