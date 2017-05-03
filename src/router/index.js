import Vue from 'vue'
import Router from 'vue-router'

// 代码分块语法 (路由懒加载 -- 访问到该页面才会加载相应代码)
const index = resolve => require(['../views/index'], resolve)
const login = resolve => require(['../views/login'], resolve)

const contactBook = resolve => require(['../views/contactBook'], resolve)
const activity = resolve => require(['../views/activity'], resolve)
const me = resolve => require(['../views/me'], resolve)
const beforeActivitiesList = resolve => require(['../views/activity/children/beforeActivitiesList'], resolve)
const recentActivity = resolve => require(['../views/activity/children/recentActivity'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
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
        name: 'me',
        path: '/me',
        component: me
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
