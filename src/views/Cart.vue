<template>
  <div class="cart">
    <i class="iconfont icon-btn_backx" style="color: rgb(51, 51, 51);"></i>
    <!-- tab标签切换 -->
    <van-tabs v-model="active" color="#ff0000">
      <van-tab title="国内购">
        国内购
        <span>(1)</span>
      </van-tab>
      <van-tab title="海淘">海淘</van-tab>
    </van-tabs>

    <!-- 购物底部 -->
    <div class="MyCart">
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
  </div>
</template>
<script>
import del from "../assets/imgs/icon_delete.png";
import "../assets/css/cart.css"; //cart页样式
import "../assets/css/style.css"; //cart页样式

export default {
  data() {
    return {
      del,
      active: 0
    };
  }
};
</script>
<style scoped>
.cart {
  position: relative;
}
.icon-btn_backx {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

