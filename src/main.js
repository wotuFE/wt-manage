// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './styles/reset.css'
import './styles/public.css'
import './styles/icon/iconfont.css'

Vue.use(Mint)
Vue.config.productionTip = false

/**
 * 在其他组件中可以使用this.utils访问到utils
 */
import utils from './utils'
Vue.prototype.utils = utils

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
