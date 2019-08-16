import Vue from 'vue'
import Vuex from 'vuex'//引入vuex

Vue.use(Vuex)

// 初始化一个仓库
export default new Vuex.Store({
  state: {
    phone: "",//存入手机号
    id: ""
  },
  mutations: {
    setphone(state, row) {
      state.phone = row.phone;
    },
    setid(state, row) {
      state.id = row.id;
    }
  },
  actions: {

  }
})
