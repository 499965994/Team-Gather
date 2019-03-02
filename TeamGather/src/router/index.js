import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shouye from '@/components/shouye/shouye'
import Womanpage from '@/components/woman/woman'
import Login from '@/components/login/loginAndregister'
import Buypage from '@/components/buy/buypage'
import Personpage from '@/components/person/personpage'
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
