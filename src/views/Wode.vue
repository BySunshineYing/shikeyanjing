<template>
  <div class="list">
    <!-- 底部标签栏 -->
    <van-tabbar v-model="active" active-color="#FC3B72">
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/fenlei">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/dingdan">订单</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/wode">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
