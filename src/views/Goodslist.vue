<template>
  <div id="goodslist">
    <header class="jsx-2301728127 fl-row-center PageTop">
      <i class="jsx-2301728127 iconfont icon-btn_backx" @click="goTo()"></i>
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
      <li class="goodsItem" v-for="item in goodsList" :key="item.id" @click="toxiangqing(item.id)">
        <div>
          <div class="imgWrap" style="text-align: center;">
            <img :src="item.image" style="width: 100%;" />
          </div>
          <div class="goodsTitle" v-text="item.itemname"></div>
          <div class="contentWrap">
            <span class="price">
              <i class="priceBrand">￥</i>
              <i class="priceInt" v-text="item.price"></i>
            </span>
            <i class="priceDel" v-text="'￥'+item.sigoprice"></i>
            <i class="disCountIcon" v-text="item.dazhe+'折'"></i>
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
export default {
  data() {
    return {
      active: "综合",
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
    },
    // 跳转到详情页，并传递唯一商品id
    toxiangqing(id) {
      this.$router.push({ name: "xiangqingye", params: { id } });
    }
  },
  // 请求
  async created() {
    //   获取列表页数据
    let goodsList = await this.$axios("http://localhost:3000/goodslist");
    // console.log(goodsList.data[0].goodslist);
    this.goodsList = goodsList.data[0].goodslist; //列表数据
  }
};
</script>

<style scoped>
#goodslist {
  background-color: #fff;
}
#goodslist .PageTop h2 {
  color: #172b4d;
  font-size: 0.45rem;
}
.PageTop {
  position: relative;
  padding: 10px 0 5px 0;
}
header i {
  height: 0.5rem;
  width: 0.5rem;
  position: absolute;
  top: 0.3rem;
  left: 0.5rem;
}
.shop_top li {
  text-align: center;
  width: 25%;
}
.jsx-2809586689 a {
  font-size: 0.4rem;
  height: 100%;
  display: block;
  box-sizing: border-box;
  padding: 10px 0px;
}
.active {
  color: rgb(252, 59, 114);
  border-bottom: 1px solid rgb(252, 59, 114);
}
.shangpin_list {
  background-color: #f4f6fd;
}
.shangpin_list li {
  flex: 0 0 42%;
  background: #fff;
  border-radius: 10px 10px;
  margin: 5px 5px;
  padding: 10px 8px;
}
.goodsTitle,
.contentWrap {
  color: #172b4d;
  font-size: 0.3rem;
}
.price {
  color: #ff516c;
}
.priceDel {
  color: #a5adba;
  text-decoration: line-through;
  margin-left: 8px;
}
.contentWrap {
  position: relative;
}
.disCountIcon {
  background: rgba(254, 209, 123, 1);
  border-radius: 6px 0px 0px 6px;
  color: #fff;
  font-size: 0.24rem;
  padding: 0 4px;
  position: absolute;
  right: -0.24rem;
  top: 0;
}
.iconWrap .tips {
  padding: 2px 6px;
  font-size: 10px;
  color: #fff;
  background: #6eb2fb;
  border-radius: 3px;
  margin-right: 8px;
  display: inline-block;
}
</style>


