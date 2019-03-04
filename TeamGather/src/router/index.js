import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/shouye/shouye'
import Womanpage from '@/views/woman'
import Login from '@/views/loginAndregister'
import Buypage from '@/views/buypage'
import Personpage from '@/views/personpage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/woman',
      name: 'woman',
      component: Womanpage
    },
    {
      path: '/login',
      name: 'loginAndregister',
      component: Login
    },
    {
      path: '/buy',
      name: 'buypage',
      component: Buypage
    },
    {
      path: '/person',
      name: 'personpage',
      component: Personpage
    },
    {
      path: '/',
      name: 'shouye',
      component: shouye
    }
  ]
})
