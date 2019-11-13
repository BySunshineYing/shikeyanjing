<template>
  <div class="cart">
    <!-- tab标签切换 -->
    <van-tabs v-model="active" color="#ff0000">
      <i class="iconfont icon-btn_backx" @click="goTo()"></i>
      <!-- 国内购页面内容 -->
      <van-tab title="国内购">
        <!-- 显示内容 -->
        <!-- 未登录显示部分 -->
        <div class="MyCart">
          <div class="emptyCart" v-show="false">
            <img class="emptyImage" :src="cart" />
            <h1>再次测试</h1>
            <div>购物车还是空的</div>
            <div>去挑些中意的商品吧，亲</div>
            <div class="linkBtn">
              <a class="goIndexBtn" @click="toHome">前往首页</a>
              <a class="goSerchBtn" @click="toFenlei">去搜索</a>
            </div>
            <div class="guessLike">
              <div>
                <div>
                  <img class="leftImage" src="https://cart.m.vsigo.cn/static/images/l-1@2x.png" />您可能会中意
                  <img
                    class="rightImage"
                    src="https://cart.m.vsigo.cn/static/images/l-1@2x.png"
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div class="MyCart">
          <!-- 购物底部 -->
          <div class="footernav fl-row-justy">
            <button class="fl-row-left" type="button">
              <img style="width:16px;margin-right:4px" :src="del" />
              <span class="t_gray1">清空购物车</span>
            </button>
            <span class="trueOrder">
              确认订单&nbsp;
              <span style="font-size:.24rem">￥</span>
              <span>
                <span>35</span>
                <span style="font-size: 0.24rem;"></span>
              </span>
            </span>
          </div>
        </div>
        <span></span>
      </van-tab>

      <!-- 海淘页面内容 -->
      <van-tab title="海淘">海淘</van-tab>
    </van-tabs>

    <div class="MyCart"></div>
  </div>
</template>
<script>
import del from "../assets/imgs/icon_delete.png";
import cart from "../assets/imgs/icon_kgwc@2x.png";
import "../assets/css/cart.css"; //cart页样式
import "../assets/css/style.css"; //cart页样式

export default {
  data() {
    return {
      del,
      cart,
      active: ""
    };
  },
  methods: {
    // 编程式导航
    goTo() {
      this.$router.back(1); //后退上一步
    },
    toHome() {
      this.$router.push("./");
    },
    toFenlei() {
      this.$router.push("./fenlei");
    },
    toLogin() {
      this.$router.push("./login");
    }
  }
};
</script>
<style >
#app .van-tabs--line .van-tabs__wrap {
  height: 60px;
}
#app .van-tab span {
  font-size: 18px;
  padding: 10px 0;
}
.van-tabbar .van-tabbar-item__text {
  font-size: 0.3rem;
}
.van-tabbar-item__icon i {
  font-size: 0.5rem;
}
.van-tabbar--fixed {
  padding: 15px 0;
}
</style>


