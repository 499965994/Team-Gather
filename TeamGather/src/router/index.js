import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shouye from '@/components/shouye/shouye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: shouye
    }
  ]
})
