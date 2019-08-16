<template>
  <div id="goodslist">
    <header class="jsx-2301728127 fl-row-center PageTop">
      <span class="jsx-2301728127 PageBackWrap" @click="goTo()">
        <i class="jsx-2301728127 iconfont icon-btn_backx"></i>
      </span>
      <h2 class="jsx-2301728127 fl-row-center">商品列表</h2>
    </header>

    <!-- 商品导航 -->
    <ul class="jsx-2809586689 fl-row-justy shop_top">
      <li v-for="(item,index) in goods" :key="index" @click="addActive(item.name)">
        <a data-id="bannerAnchor" v-text="item.name" :class="{active:active==item.name}"></a>
      </li>
    </ul>

    <!-- 列表 -->
    <ul class="fl-row-justy shangpin_list" style="overflow: auto;">
      <li class="goodsItem">
        <div>
          <div class="imgWrap" style="text-align: center;">
            <img
              src="http://images.vsigo.cn/products/contacts/210-210/20183111625315779.jpg"
              style="width: 100%;"
            />
          </div>
          <div class="goodsTitle">卫康亮明年抛隐形眼镜1片装</div>
          <div class="contentWrap">
            <span class="price">
              <i class="priceBrand">￥</i>
              <i class="priceInt">38</i>
            </span>
            <i class="priceDel">￥70</i>
            <i class="disCountIcon">7.8折</i>
          </div>
          <div class="iconWrap">
            <i class="tips">买赠</i>
          </div>
        </div>
      </li>
      <li class="goodsItem">
        <div>
          <div class="imgWrap" style="text-align: center;">
            <img
              src="http://images.vsigo.cn/products/contacts/210-210/20183111625315779.jpg"
              style="width: 100%;"
            />
          </div>
          <div class="goodsTitle">卫康亮明年抛隐形眼镜1片装</div>
          <div class="contentWrap">
            <span class="price">
              <i class="priceBrand">￥</i>
              <i class="priceInt">38</i>
            </span>
            <i class="priceDel">￥70</i>
            <i class="disCountIcon">7.8折</i>
          </div>
          <div class="iconWrap">
            <i class="tips">买赠</i>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import "../assets/css/style.css";
export default {
  data() {
    return {
      active: "",
      goods: [
        { name: "综合" },
        { name: "价格" },
        { name: "销量" },
        { name: "筛选" }
      ],
      goodsList: []
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
    }
  },
  // 请求
  async created() {
    //   获取列表页数据
    // let goodsList = await this.$axios(
    //   // "https://www.easy-mock.com/mock/5d4561c18aa85155233ce3cc/shouye"
    // "http://localhost:3000/goodslist"
    // );
    // console.log(goodsList);
  }
};
</script>
<style scoped>
#goodslist {
  background-color: #fff;
}
h2 {
  color: #172b4d;
}
.PageTop {
  position: relative;
  padding: 5px 0 5px 0;
}
.PageBackWrap {
  position: absolute;
  top: 5px;
  left: 20px;
}
.shop_top li {
  text-align: center;
  width: 25%;
}
.jsx-2809586689 a {
  font-size: 1rem;
  height: 100%;
  display: block;
  box-sizing: border-box;
  padding: 5px 0px;
}
.active {
  color: rgb(252, 59, 114);
  border-bottom: 1px solid rgb(252, 59, 114);
}
.shangpin_list {
  background-color: #f4f6fd;
}
.shangpin_list li {
  flex: 0 0 40%;
  background: #fff;
  border-radius: 10px 10px;
  margin: 10px 10px;
  padding: 10px 8px;
}
</style>


