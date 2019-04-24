import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home/index.vue'
import nav from '@/components/nav.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/nav',
      name: 'Nav',
      component: nav
    }
  ]
})
