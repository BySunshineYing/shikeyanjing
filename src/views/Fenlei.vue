<template>
  <div class="dingdan">
    <!-- 搜索框 -->
    <van-search placeholder="搜索/商品/品牌/类别" v-model="value" />

    <!-- tab标签切换 -->
    <van-tabs v-model="tap" color="#ff0000">
      <van-tab title="隐形眼镜">
        <!-- 切换内容 -->
        <div class="CategoryList">
          <div class="Categoryitem">
            <section class="sec">
              <p>
                <i class="t_red">.</i>热销品牌
              </p>
              <ul class="fl-row-left">
                <li
                  data-selectitem="库博"
                  data-linkurl="http://m.vsigo.cn/CooperVision/"
                  class="item"
                >
                  <a data-linkurl="http://m.vsigo.cn/CooperVision/" data-selectitem="库博">库博</a>
                </li>
                <li
                  data-selectitem="美若康"
                  data-linkurl="https://m.vsigo.cn/Search-%E7%BE%8E%E8%8B%A5%E5%BA%B7-----1.html"
                  class="item"
                >
                  <a
                    data-linkurl="https://m.vsigo.cn/Search-%E7%BE%8E%E8%8B%A5%E5%BA%B7-----1.html"
                    data-selectitem="美若康"
                  >美若康</a>
                </li>
                <li
                  data-selectitem="ilens"
                  data-linkurl="https://m.vsigo.cn/Search-ilens-----1.html"
                  class="item"
                >
                  <a
                    data-linkurl="https://m.vsigo.cn/Search-ilens-----1.html"
                    data-selectitem="ilens"
                  >ilens</a>
                </li>
                <li data-selectitem="博士伦" data-linkurl="http://m.vsigo.cn/boshilun/" class="item">
                  <a data-linkurl="http://m.vsigo.cn/boshilun/" data-selectitem="博士伦">博士伦</a>
                </li>
                <li data-selectitem="强生" data-linkurl="http://m.vsigo.cn/johnson/" class="item">
                  <a data-linkurl="http://m.vsigo.cn/johnson/" data-selectitem="强生">强生</a>
                </li>
                <li data-selectitem="视康" data-linkurl="http://m.vsigo.cn/shikang/" class="item">
                  <a data-linkurl="http://m.vsigo.cn/shikang/" data-selectitem="视康">视康</a>
                </li>
                <li
                  data-selectitem="茵洛"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/clalen.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/yinxingyanjing/clalen.html"
                    data-selectitem="茵洛"
                  >茵洛</a>
                </li>
                <li data-selectitem="实瞳" data-linkurl="http://m.vsigo.cn/seed/" class="item">
                  <a data-linkurl="http://m.vsigo.cn/seed/" data-selectitem="实瞳">实瞳</a>
                </li>
                <li
                  data-selectitem="更多品牌"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/"
                  class="item"
                >
                  <a data-linkurl="http://m.vsigo.cn/yinxingyanjing/" data-selectitem="更多品牌">更多品牌</a>
                </li>
              </ul>
            </section>
            <section class="sec">
              <p>
                <i class="t_red">.</i>人气系列
              </p>
              <ul class="fl-row-left">
                <li
                  data-selectitem="ilens"
                  data-linkurl="https://m.vsigo.cn/Search-ilens-----1.html"
                  class="item"
                >
                  <a
                    data-linkurl="https://m.vsigo.cn/Search-ilens-----1.html"
                    data-selectitem="ilens"
                  >ilens</a>
                </li>
                <li
                  data-selectitem="美若康/沐氧"
                  data-linkurl="https://m.vsigo.cn/Search-%E6%B2%90%E6%B0%A7-----1.html"
                  class="item"
                >
                  <a
                    data-linkurl="https://m.vsigo.cn/Search-%E6%B2%90%E6%B0%A7-----1.html"
                    data-selectitem="美若康/沐氧"
                  >美若康/沐氧</a>
                </li>
                <li
                  data-selectitem="茵洛/Clalen"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/clalen.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/yinxingyanjing/clalen.html"
                    data-selectitem="茵洛/Clalen"
                  >茵洛/Clalen</a>
                </li>
                <li
                  data-selectitem="库博/佰视明"
                  data-linkurl="http://m.vsigo.cn/CooperVision/s_baishiming.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/CooperVision/s_baishiming.html"
                    data-selectitem="库博/佰视明"
                  >库博/佰视明</a>
                </li>
                <li
                  data-selectitem="强生/舒日"
                  data-linkurl="http://m.vsigo.cn/johnson/shuri.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/johnson/shuri.html"
                    data-selectitem="强生/舒日"
                  >强生/舒日</a>
                </li>
                <li
                  data-selectitem="视康/日夜型"
                  data-linkurl="http://m.vsigo.cn/shikang/s_riyexing.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/shikang/s_riyexing.html"
                    data-selectitem="视康/日夜型"
                  >视康/日夜型</a>
                </li>
                <li
                  data-selectitem="库博/宝睛"
                  data-linkurl="http://m.vsigo.cn/CooperVision/s_baoqing.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/CooperVision/s_baoqing.html"
                    data-selectitem="库博/宝睛"
                  >库博/宝睛</a>
                </li>
              </ul>
            </section>
            <section class="sec">
              <p>
                <i class="t_red">.</i>抛弃周期
              </p>
              <ul class="fl-row-left">
                <li
                  data-selectitem="日抛"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/ripao.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/yinxingyanjing/ripao.html"
                    data-selectitem="日抛"
                  >日抛</a>
                </li>
                <li
                  data-selectitem="双周抛"
                  data-linkurl="https://m.vsigo.cn/Search-%E9%9A%90%E5%BD%A2%E7%9C%BC%E9%95%9C%E5%8F%8C%E5%91%A8%E6%8A%9B-----1.html"
                  class="item"
                >
                  <a
                    data-linkurl="https://m.vsigo.cn/Search-%E9%9A%90%E5%BD%A2%E7%9C%BC%E9%95%9C%E5%8F%8C%E5%91%A8%E6%8A%9B-----1.html"
                    data-selectitem="双周抛"
                  >双周抛</a>
                </li>
                <li
                  data-selectitem="月抛"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/yuepao.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/yinxingyanjing/yuepao.html"
                    data-selectitem="月抛"
                  >月抛</a>
                </li>
                <li
                  data-selectitem="半年抛"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/bannianpao.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/yinxingyanjing/bannianpao.html"
                    data-selectitem="半年抛"
                  >半年抛</a>
                </li>
                <li
                  data-selectitem="年抛"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/nianpao.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/yinxingyanjing/nianpao.html"
                    data-selectitem="年抛"
                  >年抛</a>
                </li>
              </ul>
            </section>
            <section class="sec">
              <p>
                <i class="t_red">.</i>佩戴场合
              </p>
              <ul class="fl-row-left">
                <li
                  data-selectitem="外出游玩"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/travel.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/yinxingyanjing/travel.html"
                    data-selectitem="外出游玩"
                  >外出游玩</a>
                </li>
                <li
                  data-selectitem="商务职场"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/office.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/yinxingyanjing/office.html"
                    data-selectitem="商务职场"
                  >商务职场</a>
                </li>
                <li
                  data-selectitem="青春校园"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/love.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/yinxingyanjing/love.html"
                    data-selectitem="青春校园"
                  >青春校园</a>
                </li>
                <li
                  data-selectitem="逛街聚会"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/guishuiningjiao.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/yinxingyanjing/guishuiningjiao.html"
                    data-selectitem="逛街聚会"
                  >逛街聚会</a>
                </li>
              </ul>
            </section>
            <section class="sec">
              <p>
                <i class="t_red">.</i>抛弃周期
              </p>
              <ul class="fl-row-left">
                <li
                  data-selectitem="日抛"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/ripao.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/yinxingyanjing/ripao.html"
                    data-selectitem="日抛"
                  >日抛</a>
                </li>
                <li
                  data-selectitem="双周抛"
                  data-linkurl="https://m.vsigo.cn/Search-%E9%9A%90%E5%BD%A2%E7%9C%BC%E9%95%9C%E5%8F%8C%E5%91%A8%E6%8A%9B-----1.html"
                  class="item"
                >
                  <a
                    data-linkurl="https://m.vsigo.cn/Search-%E9%9A%90%E5%BD%A2%E7%9C%BC%E9%95%9C%E5%8F%8C%E5%91%A8%E6%8A%9B-----1.html"
                    data-selectitem="双周抛"
                  >双周抛</a>
                </li>
                <li
                  data-selectitem="月抛"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/yuepao.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/yinxingyanjing/yuepao.html"
                    data-selectitem="月抛"
                  >月抛</a>
                </li>
                <li
                  data-selectitem="半年抛"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/bannianpao.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/yinxingyanjing/bannianpao.html"
                    data-selectitem="半年抛"
                  >半年抛</a>
                </li>
                <li
                  data-selectitem="年抛"
                  data-linkurl="http://m.vsigo.cn/yinxingyanjing/nianpao.html"
                  class="item"
                >
                  <a
                    data-linkurl="http://m.vsigo.cn/yinxingyanjing/nianpao.html"
                    data-selectitem="年抛"
                  >年抛</a>
                </li>
              </ul>
            </section>
          </div>
          <div class="bottomWrap fl-row-center">
            <span class="bottomTxt">更多隐形眼镜</span>
          </div>
        </div>
      </van-tab>

      <van-tab title="彩色隐形眼镜">彩色隐形眼镜</van-tab>
      <van-tab title="护理用品">护理用品</van-tab>
    </van-tabs>

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
// 引入图片，但要在data里定义并使用才有效
// import bell from "../assets/imgs/bellIocn.png";
import "../assets/css/CategoryList.css"; //分类页样式

export default {
  data() {
    return {
      // bell,
      value: "",
      active: 1,
      tap: 0
    };
  }
};
</script>
<style scoped>
.van-search__content {
  border: 1px solid #a5adba;
  background-color: transparent;
}
html {
  font-size: 50px;
}
.CategoryList .sec .fl-row-left {
  background-color: #fff;
}
</style>
<style>
#app .dingdan .van-tab--active {
  color: #fc3b72;
}
</style>


