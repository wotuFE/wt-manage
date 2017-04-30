import Vue from 'vue'
import Router from 'vue-router'

// 代码分块语法 (路由懒加载 -- 访问到该页面才会加载相应代码)
const contactBook = resolve => require(['../views/contactBook'], resolve)
const activity = resolve => require(['../views/activity'], resolve)
const beforeActivitiesList = resolve => require(['../views/activity/beforeActivitiesList'],resolve)
const recentActivity = resolve => require(['../views/activity/recentActivity'],resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'contactBook',
      path: '/',
      component: contactBook
    },{
      name: 'activity',
      path: '/activity',
      component: activity,
      children: [{
        name: 'recentActivity',
        path: 'recentActivity',
        component: recentActivity
      },{
        name: 'beforeActivitiesList',
        path: 'beforeActivitiesList',
        component: beforeActivitiesList
      }]
    }
  ]
})
