import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Ding from '@/components/Ding.vue'

Vue.use(Router)

export default new Router({
  routes: [
 
    {
      path: '/',
      name:'Home',
      component: Home
    },
    {
      path: '/ding',
      name:'Ding',
      component: Ding
    }
  ]
})
