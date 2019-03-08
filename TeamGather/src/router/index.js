import Vue from 'vue'
import Router from 'vue-router'
import Junshi from '../views/JunShi.vue'
import YuLe from "../views/YuLe.vue"
import TiYu from "../views/TiYu.vue"
import shouye from '@/components/shouye/shouye'
import Womanpage from '@/views/woman'
import Login from '@/views/loginAndregister'
import Buypage from '@/views/buypage'
import Personpage from '@/views/personpage'
import Newsabout from "@/views/newsabout"
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
    },
    {
  	path:"/junshi",
			name:"Junshi",
			component:Junshi
		},
		{
			path:"/yule",
			name:"YuLe",
			component:YuLe
		},
		{
			path:"/tiyu",
			name:"TiYu",
			component:TiYu
		},
		{
			path:"/newsabout",
			name:"Newsabout",
			component:Newsabout
		}
  ]
})
