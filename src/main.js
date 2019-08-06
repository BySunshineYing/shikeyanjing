import Vue from 'vue'
import App from './App.vue'
import router from './routers/router.js'
import store from './store.js'

// 引入样式
// import "./assets/css/CategoryList.css";//分类页样式

// 引入vant的组件
import Vant from './vants/vant.js'
Vant()


// 全局引入
import axios from 'axios'
// Vue继承axios
Vue.prototype.$axios = axios

import 'weui' //引入weui

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
