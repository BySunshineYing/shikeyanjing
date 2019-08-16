import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 页面
import Home from '../views/Home.vue'
import Fenlei from '../views/Fenlei.vue'
import Cart from '../views/Cart.vue'
import Dingdan from '../views/Dingdan.vue'
import Wode from '../views/Wode.vue'
import Xiangqingye from '../views/Xiangqingye.vue'
import Goodslist from '../views/Goodslist.vue'
import Login from '../views/Login.vue'
import Setup from '../views/Setup.vue'



// 页面路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: Fenlei,
    }, {
      path: '/cart',
      name: 'cart',
      component: Cart,
    }, {
      path: '/dingdan',
      name: 'dingdan',
      component: Dingdan,
    }, {
      path: '/wode',
      name: 'wode',
      component: Wode,
    }, {
      path: '/xiangqingye/:id',//动态路由
      name: 'xiangqingye',
      component: Xiangqingye,
    }, {
      path: '/goodslist',
      name: 'goodslist',
      component: Goodslist,
    }, {
      path: '/login',
      name: 'login',
      component: Login,
    }, {
      path: '/setup',
      name: 'setup',
      component: Setup,
    }
  ]
})
