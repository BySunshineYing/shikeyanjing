import Vue from 'vue'

import {
    // 搜索
    Search,
    // 轮播图
    Swipe,
    SwipeItem,
    Lazyload,//图片懒加载
    // 宫格
    Grid,
    GridItem,
    Image,
    // 底部标签栏
    Tabbar,
    TabbarItem,
    // tab标签
    Tab, Tabs,
    // 商品卡片
    Card,
    // 倒计时
    CountDown,
    // 加入购物车
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    // 登陆输入框
    Field,
    CellGroup,
    Cell

} from 'vant';

export default () => {
    Vue.use(Search);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Grid).use(GridItem);
    Vue.use(Lazyload);
    Vue.use(Image);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Tab).use(Tabs);
    Vue.use(Card);
    Vue.use(CountDown);
    Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);
    Vue.use(Field);
    Vue.use(Cell).use(CellGroup);
}