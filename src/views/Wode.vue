<template>
  <div id="mine">
    <!-- 头部 -->
    <div class="jsx-174791156 head">
      <img :src="sz" class="jsx-174791156 set" />
    </div>
    <div class="jsx-174791156 header">
      <div class="jsx-174791156">
        <div class="jsx-174791156 tou">
          <img :src="ren" class="jsx-174791156 top" />
        </div>
        <!-- 登录前 -->
        <div class="jsx-174791156 nologin" v-show="ok">
          <div class="jsx-174791156 sigo1" @click="loginTo()">&gt;登录账号</div>
        </div>
        <!-- 登陆后 -->
        <div class="jsx-174791156" v-show="!ok">
          <div class="jsx-174791156 sigo" v-text="phoneuser"></div>
          <div class="jsx-174791156 huiyuan fl-row-left">
            <img :src="aixin" class="jsx-174791156 grade" />
            <span class="jsx-174791156 grape">普通会员 (200成长值)</span>
          </div>
          <img :src="qiandao" class="jsx-174791156 signin" />
        </div>
      </div>
      <!-- 登陆后金币 -->
      <div class="jsx-174791156 goldlist" v-show="!ok">
        <a href="https://m.vsigo.cn/goldstore" target="_self" class="jsx-174791156">
          <div class="jsx-174791156 gold_">
            <p class="jsx-174791156" style="color: rgb(255, 162, 0); font-weight: 500;">
              0
              <span class="jsx-174791156" style="font-size: 0.18rem; color: rgb(255, 162, 0);">个</span>
            </p>
            <p class="jsx-174791156 money">金币</p>
          </div>
        </a>
        <div class="jsx-174791156 gold_">
          <p class="jsx-174791156" style="color: rgb(35, 149, 255); font-weight: 500;">
            0
            <span class="jsx-174791156" style="font-size: 0.18rem; color: rgb(35, 149, 255);">张</span>
          </p>
          <p class="jsx-174791156 money">优惠券</p>
        </div>
        <div class="jsx-174791156 gold_">
          <p class="jsx-174791156" style="color: rgb(255, 95, 61); font-weight: 500;">
            0
            <span class="jsx-174791156" style="font-size: 0.18rem; color: rgb(255, 95, 61);">元</span>
          </p>
          <p class="jsx-174791156 money">收益</p>
        </div>
      </div>
    </div>

    <!-- 我的订单 -->
    <div class="jsx-174791156 orderList">
      <div data-link="/orderlist" class="jsx-174791156 order">
        <span data-link="/orderlist" class="jsx-174791156 my">我的订单</span>
        <span data-link="/orderlist" class="jsx-174791156 all">全部订单 &gt;</span>
      </div>
      <!-- 宫格 -->
      <van-grid :column-num="5">
        <van-grid-item
          v-for="(value,index) in dingdan"
          :key="index"
          :icon="value.tubiao"
          :text="value.text"
        />
      </van-grid>
    </div>

    <!-- 我的拼购 -->
    <div style="width:7.02rem;margin:.32rem auto" class="jsx-1613056133 CardBar">
      <section
        data-sort
        style="position:relative;padding:12px"
        class="jsx-174791156 onepx_bottom fl-row-justy"
      >
        <span data-sort data-link="/orderlist" class="jsx-174791156 my">我的拼购</span>
        <span data-sort data-link="/orderlist" class="jsx-174791156 all">全部 &gt;</span>
      </section>
      <!-- 宫格 -->
      <van-grid :column-num="3">
        <van-grid-item
          v-for="(value,index) in pingou"
          :key="index"
          :icon="value.tubiao"
          :text="value.text"
        />
      </van-grid>
    </div>

    <!-- 其他图标 -->
    <div class="jsx-174791156 three">
      <!-- 宫格 -->
      <van-grid :column-num="3">
        <van-grid-item
          v-for="(value,index) in wuliu"
          :key="index"
          :icon="value.tubiao"
          :text="value.text"
        />
      </van-grid>
    </div>

    <!-- 底部标签栏 -->
    <van-tabbar v-model="active" active-color="#FC3B72">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/fenlei">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/dingdan">订单</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/wode">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import sz from "../assets/imgs/btn_SZ.png";
import ren from "../assets/imgs/iocn_tx.png";
import qiandao from "../assets/imgs/btn_qd@2x.png";
import aixin from "../assets/imgs/icon_level1.png";

import "../assets/css/mine.css";
// import "../assets/css/mine2.css";
import "../assets/css/style.css";

export default {
  data() {
    return {
      active: 4,
      sz, //图
      ren, //图
      qiandao, //图
      aixin, //图
      dingdan: [
        {
          tubiao: "https://my.m.vsigo.cn/static/images/icon_dfk.png",
          text: "待付款"
        },
        {
          tubiao: "https://my.m.vsigo.cn/static/images/icon_dfh1@2x.png",
          text: "代发货"
        },
        {
          tubiao: "https://my.m.vsigo.cn/static/images/icon_dsh.png",
          text: "待收货"
        },
        {
          tubiao: "https://my.m.vsigo.cn/static/images/icon_dpj.png",
          text: "待评价"
        },
        {
          tubiao: "https://my.m.vsigo.cn/static/images/icon_sh.png",
          text: "售后"
        }
      ],
      pingou: [
        {
          tubiao: "https://my.m.vsigo.cn/static/images/icon_ktz@2x.png",
          text: "开团中"
        },
        {
          tubiao: "https://my.m.vsigo.cn/static/images/icon_ctz@2x.png",
          text: "参团中"
        },
        {
          tubiao: "https://my.m.vsigo.cn/static/images/icon_wcpg@2x.png",
          text: "完成拼购"
        }
      ],
      wuliu: [
        {
          tubiao: "https://my.m.vsigo.cn/static/images/icon_wlxx@2x.png",
          text: "物流信息"
        },
        {
          tubiao: "https://my.m.vsigo.cn/static/images/iocn_shdz@2x.png",
          text: "收货地址"
        },
        {
          tubiao: "https://my.m.vsigo.cn/static/images/icon_yqyj@2x.png",
          text: "邀请有奖"
        },
        {
          tubiao: "https://my.m.vsigo.cn/static/images/iocn_hycz@2x.png",
          text: "会员成长"
        },
        {
          tubiao: "https://my.m.vsigo.cn/static/images/iocn_wdzc@2x.png",
          text: "我的资产"
        },
        {
          tubiao: "https://my.m.vsigo.cn/static/images/iocn_wdsc@2x.png",
          text: "我的收藏"
        },
        {
          tubiao: "https://my.m.vsigo.cn/static/images/iocn_wdsc@2x.png",
          text: "消息盒子"
        },
        {
          tubiao: "https://my.m.vsigo.cn/static/images/icon_DFH@2x.png",
          text: "我的客服"
        },
        {
          tubiao: "https://my.m.vsigo.cn/static/images/iocn_jgbh@2x.png",
          text: "价格保护"
        }
      ],
      phoneuser: "",
      ok: true
    };
  },
  methods: {
    // 编程式导航
    loginTo() {
      this.$router.push("./login");
    }
  },
  created() {
    // 生命周期挂载前拿到仓库用户名的值
    this.phoneuser = this.$store.state.phone; //获取仓库用户名
    // 判断登录
    if (this.phoneuser == "") {
      // console.log(this.phoneuser);
      this.ok = true;
    } else {
      this.ok = false;
    }
  }
};
</script>
<style scoped>
.tou {
  position: relative;
  width: 1.2rem;
  height: 1.2rem;
  box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(255, 255, 255, 1);
  margin-left: 0.38rem;
  border-radius: 50%;
  overflow: hidden;
}
.tou img {
  position: absolute;
  top: 0rem;
  left: 0rem;
}
.sigo {
  font-size: 0.3rem;
  width: 48%;
  position: absolute;
  top: 1.62rem;
  left: 2.1rem;
}
</style>


