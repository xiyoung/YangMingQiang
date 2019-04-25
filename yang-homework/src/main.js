import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'

import '@/styles/global.scss'
import '@/icons' // svg-icon

import App from './App'

Vue.config.productionTip = false
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
