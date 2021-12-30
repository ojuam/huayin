// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'

axios.defaults.baseURL = 'http://101.37.116.37:5000/api'

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)

// const cors = require('koa2-cors');
//  app.use(cors());

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

