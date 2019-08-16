<template>
  <div id="xiangqingye">
    <!-- 头部 -->
    <div class="jsx-2809586689 topBar fl-row-center" style="display: flex; opacity: 1;">
      <span class="backWrap">
        <i
          class="jsx-2809586689 iconfont icon-btn_backx"
          style="color: rgb(51, 51, 51);"
          @click="goTo()"
        ></i>
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
    <van-swipe @change="onChange" :autoplay="3000">
      <van-swipe-item v-for="(img,idx) in lunbotu" :key="idx">
        <img v-lazy="img" class="lunboImg" />
      </van-swipe-item>
      <span class="custom-indicator tips" slot="indicator">{{ current + 1 }}/5</span>
    </van-swipe>
    <!-- 商品价格 -->
    <section class="fl-row-left jiage">
      <p class="priceCons">
        <span class="price" v-text="'￥'+shop.price"></span>&nbsp;
        <del>
          <b class="originPrice" v-text="'￥'+shop.sigoprice"></b>
        </del>&nbsp;
        <b class="discount">直降</b>
      </p>
    </section>
    <!-- 商品描述 -->
    <main class="pageContents">
      <div class="pageBar">
        <section class="title" v-text="shop.itemname"></section>
        <section class="subTitle" v-text="shop.miaoshu"></section>
        <section class>
          <a
            href="https://m.vsigo.cn/goldstore/"
            target="_self"
            class="jsx-786558112 subTitle"
            style="color: rgb(97, 135, 239);"
          >4盒减80，仅需59/盒</a>
        </section>
        <section class="fl-row-justy strOther">
          <span data-sort="problem" class="jsx-786558112">
            <i data-sort="problem" class="jsx-786558112 iconfont icon-iocn_sm"></i>常见问题
          </span>
          <span class="jsx-786558112">
            <i class="jsx-786558112 iconfont icon-btn_likex t_red"></i>98%好评
          </span>
        </section>
      </div>
      <div class="pageBar">
        <div data-sort="coupon" class="fl-row-justy">
          <p data-sort="coupon" class>
            <span data-sort="coupon" class="t_gray3">领券</span>
            <span data-sort="coupon" class>
              <span data-sort="coupon" class="couponTag">满288减80</span>
              <span data-sort="coupon" class="couponTag">无敌券</span>
            </span>
          </p>
          <i data-sort="coupon" class="iconfont icon-btn_backx"></i>
        </div>
        <div data-sort="haitao" class="fl-row-justy hide">
          <p data-sort="haitao" class>
            <span data-sort="haitao" class="t_gray3">税费</span>
            <span data-sort="haitao" class="activityWrap">
              <span data-sort="haitao" class="tag">包税</span>
              <span data-sort="haitao" class="title"></span>
            </span>
          </p>
          <i data-sort="haitao" class="iconfont icon-btn_backx"></i>
        </div>
        <div data-sort="shop " class="fl-row-justy cuxiao">
          <p data-sort="shop" class>
            <span data-sort="shop" class="t_gray3">促销</span>
            <span data-sort="shop" class="activityWrap">
              <span data-sort="shop" class="tag">赠</span>
              <span data-sort="shop" class="title">2盒赠送凯达隐形眼镜伴侣盒（限赠1次）</span>
            </span>
          </p>
          <i data-sort="shop" class="jsx-786558112 iconfont icon-btn_backx"></i>
        </div>
        <div data-sort="shopNO" class="jsx-786558112 shopWrap">
          <span data-sort="shopNO" class="jsx-786558112">
            <i data-sort="shopNO" class="jsx-786558112 iconfont icon-iocn_gou1"></i>
            <b data-sort="shopNO" class="jsx-786558112">满60包邮</b>
          </span>
          <span data-sort="shopNO" class="jsx-786558112">
            <i data-sort="shopNO" class="jsx-786558112 iconfont icon-iocn_gou1"></i>
            <b data-sort="shopNO" class="jsx-786558112">正品保证</b>
          </span>
          <span data-sort="shopNO" class="jsx-786558112">
            <i data-sort="shopNO" class="jsx-786558112 iconfont icon-iocn_gou1"></i>
            <b data-sort="shopNO" class="jsx-786558112">官方资质</b>
          </span>
          <span data-sort="shopNO" class="jsx-786558112">
            <i data-sort="shopNO" class="jsx-786558112 iconfont icon-iocn_gou1"></i>
            <b data-sort="shopNO" class="jsx-786558112">极速物流</b>
          </span>
        </div>
      </div>
      <div class="pageBar canshu">
        <div id="pamam" data-sort="param" class="jsx-786558112 fl-row-justy">
          <p data-sort="param" class="jsx-786558112 fl-row-left">
            <span data-sort="param" class="jsx-786558112 t_black">参数</span>
            <span data-sort="param" class="jsx-786558112 t_black_opacity">品牌、材质、含水量等</span>
          </p>
          <i data-sort="param" class="jsx-786558112 iconfont icon-btn_backx"></i>
        </div>
        <div data-sort="nosku" class="jsx-786558112 fl-row-justy hide">
          <p data-sort="nosku" class="jsx-786558112 fl-row-left">
            <span data-sort="nosku" class="jsx-786558112 t_black">选择规格</span>
            <span data-sort="nosku" class="jsx-786558112 t_black"></span>
          </p>
          <i data-sort="nosku" class="jsx-786558112 iconfont icon-btn_backx"></i>
        </div>
        <div data-sort="left" class="jsx-786558112 fl-row-justy">
          <p class="jsx-786558112 fl-row-left">
            <span data-sort="left" class="jsx-786558112 t_black">左眼</span>
            <span data-sort="left" class="jsx-786558112 t_black_opacity">请选择</span>
          </p>
          <i data-sort="left" class="jsx-786558112 iconfont icon-btn_backx"></i>
        </div>
        <div data-sort="right" class="jsx-786558112 fl-row-justy">
          <p data-sort="right" class="jsx-786558112 fl-row-left">
            <span data-sort="right" class="jsx-786558112 t_black">右眼</span>
            <span data-sort="right" class="jsx-786558112 t_black_opacity">请选择</span>
          </p>
          <i data-sort="right" class="jsx-786558112 iconfont icon-btn_backx"></i>
        </div>
        <div class="jsx-786558112 fl-row-justy hide">
          <p class="jsx-786558112 purchaseLimit fl-row-justy">
            <span class="jsx-786558112 fl-row-center iconWrap">
              <i class="jsx-786558112 iconfont icon-icon_sp"></i>
            </span>
            <span class="jsx-786558112">限购：0件/人</span>
          </p>
        </div>
        <div class="jsx-786558112 fl-row-justy strOther">
          <span data-sort="degree" class="jsx-786558112 t_gray3">
            <i data-sort="degree" class="jsx-786558112 iconfont icon-iocn_sm"></i>不知道如何选择度数？
          </span>
          <span data-sort="explain" class="jsx-786558112 t_gray3">
            <i data-sort="explain" class="jsx-786558112 iconfont icon-iocn_sm"></i>计价单位说明
          </span>
        </div>
      </div>
      <div class="pageBar shengxinpei">
        <div class="jsx-786558112 fl-row-justy barTop">
          <p class="jsx-786558112">
            <i class="jsx-786558112 topTips"></i>
            <span class="jsx-786558112 t_black">省心配</span>
          </p>
        </div>
        <section class="jsx-786558112" style="overflow: auto;">
          <ul class="jsx-786558112 fareList" style="width: 10.2rem;">
            <li class="jsx-786558112">
              <a href class="jsx-786558112">
                <img
                  src="https://images.vsigo.cn/Products/eyedrops/210-210/20181110111947540.jpg"
                  class="jsx-786558112"
                />
              </a>
              <div data-index="0" class="jsx-786558112">
                <p data-index="0" class="jsx-786558112 title">安目瞳Lapêche保湿润眼液10ml</p>
                <p data-index="0" class="jsx-786558112">
                  <font data-index="0" class="jsx-786558112 price">￥16</font>&nbsp;
                  <font data-index="0" class="jsx-786558112 originalPrice">￥39</font>
                  <b class="jsx-786558112"></b>
                </p>
              </div>
            </li>
            <li class="jsx-786558112">
              <a href="item10000760.html" class="jsx-786558112">
                <img
                  src="https://images.vsigo.cn/Products/companioncase/210-210/201919155331340.jpg"
                  class="jsx-786558112"
                />
              </a>
              <div data-index="1" class="jsx-786558112">
                <p data-index="1" class="jsx-786558112 title">3N还原仪隐形眼镜除蛋白自动清洗器 四代</p>
                <p data-index="1" class="jsx-786558112">
                  <font data-index="1" class="jsx-786558112 price">￥118</font>&nbsp;
                  <font data-index="1" class="jsx-786558112 originalPrice">￥188</font>
                  <b class="jsx-786558112"></b>
                </p>
              </div>
            </li>
            <li class="jsx-786558112">
              <a href="item10001011.html" class="jsx-786558112">
                <img
                  src="https://images.vsigo.cn/Products/collyrium/210-210/2019311204024836.jpg"
                  class="jsx-786558112"
                />
              </a>
              <div data-index="2" class="jsx-786558112">
                <p data-index="2" class="jsx-786558112 title">依视明维生素B12洗眼液100ml</p>
                <p data-index="2" class="jsx-786558112">
                  <font data-index="2" class="jsx-786558112 price">￥18</font>&nbsp;
                  <font data-index="2" class="jsx-786558112 originalPrice">￥29</font>
                  <b class="jsx-786558112"></b>
                </p>
              </div>
            </li>
            <li class="jsx-786558112">
              <a href="item13003.html" class="jsx-786558112">
                <img
                  src="https://images.vsigo.cn/Products/caresolution/210-210/20186717253758775.png"
                  class="jsx-786558112"
                />
              </a>
              <div data-index="3" class="jsx-786558112">
                <p data-index="3" class="jsx-786558112 title">曼秀雷敦Rohto乐敦清C3多功能隐形眼镜护理液500ml-冰凉型</p>
                <p data-index="3" class="jsx-786558112">
                  <font data-index="3" class="jsx-786558112 price">￥58</font>&nbsp;
                  <font data-index="3" class="jsx-786558112 originalPrice">￥109</font>
                  <b class="jsx-786558112"></b>
                </p>
              </div>
            </li>
            <li class="jsx-786558112">
              <a href="item10001561.html" class="jsx-786558112">
                <img
                  src="https://images.vsigo.cn/Products/companioncase/210-210/2019627142858637.jpg"
                  class="jsx-786558112"
                />
              </a>
              <div data-index="4" class="jsx-786558112">
                <p data-index="4" class="jsx-786558112 title">MODOCH萌哆奇眸论系列隐形眼镜护理盒</p>
                <p data-index="4" class="jsx-786558112">
                  <font data-index="4" class="jsx-786558112 price">￥25</font>&nbsp;
                  <font data-index="4" class="jsx-786558112 originalPrice">￥29</font>
                  <b class="jsx-786558112"></b>
                </p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>

    <!-- 底部购物车 -->
    <van-goods-action>
      <van-goods-action-icon icon="service-o" text="客服" />
      <van-goods-action-icon info="2" icon="star-o" text="收藏" />
      <van-goods-action-icon icon="cart-o" text="购物车" to="/cart" />
      <van-goods-action-button type="warning" text="加入购物车" @click="cartid()" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>
<script >
import "../assets/css/style.css";
import "../assets/css/xiangqing.css";

export default {
  data() {
    return {
      active: "商品",
      lunbotu: [
        // "https://images.vsigo.cn/ADVP/640-260/201974103417140.jpg",
        // "https://images.vsigo.cn/ADVP/640-260/2019731234325118.jpg",
        // "https://images.vsigo.cn/ADVP/640-260/201982185523975.jpg",
        // "https://images.vsigo.cn/ADVP/640-260/20198110520323.jpg",
        // "https://images.vsigo.cn/ADVP/640-260/2019731234325118.jpg"
      ],
      current: 0,
      xqtop: [
        { name: "商品" },
        { name: "评价" },
        { name: "详情" },
        { name: "推荐" }
      ],
      shop: [],
      id: ""
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
      this.$router.push("./xiangqingye");
    },
    // 轮播图索引
    onChange(index) {
      this.current = index;
    },
    cartid() {
      this.id = this.$route.params.id; //获取商品id
      console.log(this.id);
      let row = { id: this.id }; //获取手机号
      this.$store.commit("setid", row); //存入store仓库
      // this.$router.push("./cart");
    }
  },
  async created() {
    let id = this.$route.params.id; //获取商品id
    // console.log(id);
    //   获取商品数据
    let shop = await this.$axios("http://localhost:3000/xiangqing/" + id);
    this.lunbotu = shop.data[0].image;
    this.shop = shop.data[0]; //商品数据
    // console.log(num);
    // shop[0].image;
  }
};
</script>

<style scoped>
.lunboImg {
  height: 300px;
}
</style>


<style>
body {
  line-height: normal;
}
.van-swipe {
  position: relative;
  background-color: #fff;
}
.tips {
  font-size: 14px;
  color: #fff;
  padding: 3px 10px;
  border-radius: 14px;
  background: RGBA(69, 69, 69, 0.5);
  position: absolute;
  bottom: 30px;
  left: 10px;
}

.van-goods-action {
  height: 70px;
}
.van-goods-action .van-goods-action-icon {
  font-size: 16px;
}
.van-goods-action .van-goods-action-icon__icon {
  font-size: 25px;
}
</style>

