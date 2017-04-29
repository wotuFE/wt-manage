import Vue from 'vue'
import Router from 'vue-router'

// 代码分块语法 (路由懒加载 -- 访问到该页面才会加载相应代码)
const contactBook = resolve => require(['../views/contactBook'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'contactBook',
      path: '/',
      component: contactBook
    }
  ]
})
