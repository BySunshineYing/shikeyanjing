<template>
  <div id="home">
    <div id="toubu">
      <!-- 搜索框 -->
      <van-search placeholder="搜索/商品/品牌/类别" v-model="value" background="#fc3b72" />

      <!-- 轮播图 -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image,index) in lunbotu" :key="index">
          <img v-lazy="image" class="lunboImg" />
        </van-swipe-item>
      </van-swipe>

      <!-- 宫格 -->
      <!-- :border="false"去除顶部默认线条 -->
      <van-grid :border="false">
        <van-grid-item
          v-for="(g,index) in gonggeList"
          :key="index"
          :text="g.title"
          :icon="g.icon"
          @click="goodslistTo(index)"
        ></van-grid-item>
      </van-grid>

      <!--拼购商品表  -->
      <div style="margin:12px 8px;overflow:hidden;height:auto" class="jsx-1613056133 CardBar">
        <div class="jsx-250627499 fl-row-justy tou">
          <p class="jsx-250627499 fl-row-left">
            <i class="jsx-250627499 t_red icon iconfont icon-icon_hotx1"></i>
            <span class="jsx-250627499 title" style="color:#fc3b72">&nbsp;火热拼购</span>
          </p>
          <b class="jsx-250627499 t_red fl-row-justy tipsMore">
            更多
            <i class="jsx-250627499 t_red iconfont icon-btn_backx"></i>
          </b>
        </div>
        <!-- 表list -->
        <div class="pingoulist">
          <van-card
            v-for="(item,index) in pingoulist"
            :key="index"
            :price="item.price"
            :desc="'已拼'+item.itemid+'件'"
            :title="item.itemname"
            :thumb="item.image"
            :origin-price="item.pinbuynum"
          />
        </div>
      </div>

      <!--限时优惠商品表  -->
      <div style="margin:12px 8px;overflow:hidden;height:auto" class="jsx-250627499 CardBar">
        <div class="jsx-250627499 fl-row-justy tou">
          <p class="jsx-250627499 fl-row-left">
            <i class="jsx-250627499 t_red iconfont icon-icon_clock-x"></i>
            <span class="jsx-250627499 title" style="color:#fc3b72">&nbsp;限时优惠</span>
          </p>
          <span>
            <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
          </span>
        </div>
        <!-- 滑动表 -->
        <div class="youhuilist">
          <ul class="youhuiul">
            <li class="youhuili">
              <div>
                <img src="https://images.vsigo.cn/Products/contacts/210-210/201891115233913138.jpg" />
                <p>
                  ￥58元
                  <span>5.4折</span>
                </p>
              </div>
            </li>
            <li class="youhuili">
              <div>
                <img src="https://images.vsigo.cn/Products/contacts/210-210/2018311531438786.jpg" />
                <p>
                  ￥68元
                  <span>4.5折</span>
                </p>
              </div>
            </li>
            <li class="youhuili">
              <div>
                <img src="https://images.vsigo.cn/Products/contacts/210-210/201872616305177954.png" />
                <p>
                  ￥138元
                  <span>5.1折</span>
                </p>
              </div>
            </li>
            <li class="youhuili">
              <div>
                <img src="https://images.vsigo.cn/Products/contacts/210-210/2018752275026126.jpg" />
                <p>
                  ￥29元
                  <span>￥6.5折</span>
                </p>
              </div>
            </li>
            <li class="youhuili">
              <div>
                <img src="https://images.vsigo.cn/Products/contacts/210-210/2019615144128617.jpg" />
                <p>
                  ￥58元
                  <span>5.5折</span>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div class="jsx-250627499 footer fl-row-justy">
          <p class="jsx-250627499">
            <i class="jsx-250627499 t_gray1 iconfont icon-icon_sp"></i>
            <span class="jsx-250627499 t_gray2">
              &nbsp;
              <!-- -->
              10
              <!-- -->
              件商品&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="jsx-250627499 t_gray1">正在抢购</span>
            </span>
          </p>
          <i class="jsx-250627499 iconfont icon-btn_backx"></i>
        </div>
      </div>
    </div>

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

<script>
import "../assets/css/style.css";
export default {
  data() {
    return {
      // 搜索框的值
      value: "",
      // 轮播图片路径数据
      lunbotu: [],
      // 宫格数据
      gonggeList: [],
      active: 0,
      // 拼购数据
      pingoulist: [],
      // 倒计时
      time: 1000 * 60 * 60 * 1000
    };
  },
  methods: {
    // 编程式导航
    goodslistTo(index) {
      if (index == 1) {
        this.$router.push("./goodslist");
      }
    }
  },
  async created() {
    //   获取首页数据
    let shouyeList = await this.$axios(
      //   // "https://www.easy-mock.com/mock/5d4561c18aa85155233ce3cc/shouye"
      "http://localhost:3000/"
    );
    // console.log(shouyeList.data[0].pingoulist);
    this.gonggeList = shouyeList.data[0].gongges; //宫格数据
    this.lunbotu = shouyeList.data[0].lunbotu; //轮播图
    this.pingoulist = shouyeList.data[0].pingoulist; //拼购全数据
    this.pingoulist = this.pingoulist.slice(0, 3); //拼购三条数据
    this.youhuilist = this.pingoulist.slice(3, 5); //优惠5条数据
  },
  computed: {
    // pingoulistComputed() {
    //   // 切割3个拼购数据
    //   return this.pingoulist.slice(0, 3);
    //   console.log(this.pingoulist);
    // }
  }
};
</script>

<style scoped>
.van-count-down {
  color: rgb(252, 59, 114);
}
.tou {
  padding: 8px;
}
.van-card__header,
.pingoulist,
.van-card {
  background-color: #fff;
}
</style>
