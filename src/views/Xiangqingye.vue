<template>
  <div id="xiangqingye">
    <!-- 头部 -->
    <div class="jsx-2809586689 topBar fl-row-center" style="display: flex; opacity: 1;">
      <span
        class="jsx-2809586689 backWrap"
        style="background-color: rgb(255, 255, 255); top: 8px; transition: all 0.3s ease 0s;"
        @click="goTo()"
      >
        <i class="jsx-2809586689 iconfont icon-btn_backx" style="color: rgb(51, 51, 51);"></i>
      </span>
      <!-- 商品导航 -->
      <ul class="jsx-2809586689 fl-row-justy xq-top">
        <li v-for="(item,index) in xqtop" :key="index" @click="addActive(item.name)">
          <a data-id="bannerAnchor" v-text="item.name" :class="{active:active==item.name}"></a>
        </li>
      </ul>
      <i class="jsx-2809586689 iconfont icon-icon_home" @click="backHome()"></i>
    </div>

    <!-- 轮播图 -->

    <!-- 底部购物车 -->
    <van-goods-action>
      <van-goods-action-icon icon="service-o" text="客服" />
      <van-goods-action-icon info="2" icon="star-o" text="收藏" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>
<script >
import "../assets/css/style.css";
export default {
  data() {
    return {
      active: "",
      xqtop: [
        { name: "商品" },
        { name: "评价" },
        { name: "详情" },
        { name: "推荐" }
      ]
    };
  },
  methods: {
    //   添加点击高亮类名函数
    addActive(name) {
      this.active = name;
    },
    // 编程式导航
    goTo() {
      this.$router.back(1); //后退上一步
    },
    // 返回首页
    backHome() {
      this.$router.push("./");
    }
    // onClickIcon() {
    //   Toast("点击图标");
    // },
    // onClickButton() {
    //   Toast("点击按钮");
    // }
  }
};
</script>

<style scoped>
#xiangqingye {
  background-color: #fff;
}
.topBar {
  position: relative;
}
.xq-top {
  width: 60%;
}
.jsx-2809586689 a {
  font-size: 0.26rem;
  height: 100%;
  display: block;
  box-sizing: border-box;
  padding: 12px 0px;
}
.backWrap {
  position: fixed;
  z-index: 2;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  top: 58px;
  left: 12px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}
.icon-icon_home {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
}
.active {
  color: rgb(252, 59, 114);
  border-bottom: 1px solid rgb(252, 59, 114);
}
.van-button--warning {
  background: linear-gradient(
    90deg,
    rgba(252, 59, 114, 0.78) 0%,
    rgb(252, 59, 114) 100%
  );
}
.van-button--danger {
  background: linear-gradient(
    90deg,
    rgba(252, 59, 114, 0.78) 0%,
    rgb(252, 59, 114) 100%
  );
}
</style>

