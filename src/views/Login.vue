<template>
  <div id="login_bk">
    <div class="Login">
      <div class="logo">
        <img :src="login" />
      </div>
      <p class="title t_gray1">
        免密
        <!-- -->
        登录
      </p>
      <div class="InpBox InputBarWrap" style="margin-bottom:16px">
        <!-- 输入框组件 -->
        <van-cell-group>
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
            :error-message="message"
            @input="regphone"
          />
          <van-field v-model="pwd" label="密码" placeholder="请输入密码" />
        </van-cell-group>
      </div>
      <p class="tiptStr">
        <strong>温馨提示</strong>：未注册视客账号的手机号，登录后将自动完成注册，且代表您已经同意
        <a
          href="https://m.vsigo.cn/h5/LoginProtocol.html"
          class="t_red"
        >《用户服务协议》</a>
      </p>
      <div class="btnWrap">
        <button class="defaultBtn" type="button" @click="zhuce">注册</button>
        <button type="button" data-sort="phone" @click="denglu">登录</button>
      </div>
      <div class="footerWrap" style="display: block;">
        <ul class="fl-row-around">
          <li style="text-align:center">
            <a href="javascript:;" target="_self">
              <img :src="qq" style="width:50px" />
            </a>
          </li>
          <li style="text-align:center">
            <a target="_self">
              <img :src="weibo" style="width:50px" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/login.css";
import login from "../assets/imgs/logoNew.png";
import qq from "../assets/imgs/qqIcon.png";
import weibo from "../assets/imgs/weiboIcon.png";

export default {
  data() {
    return {
      login, //图片
      qq, //图片
      weibo, //图片
      phone: "", //手机输入框
      pwd: "", //密码输入框
      message: "", //错误提示
      phoneok: "" //手机输入框状态
    };
  },
  methods: {
    // 登录请求
    // 如果输入手机号和密码状态都为ok，则发起请求，并清空输入框内容。否则提示错误信息
    async denglu() {
      if (this.phoneok) {
        let res = await this.$axios.post("http://localhost:3000/login/denglu", {
          phone: this.phone,
          pwd: this.pwd
        });
        // console.log(res)
        let row = { phone: this.phone }; //获取手机号
        this.$store.commit("setphone", row); //存入store仓库
        // this.phone = ""; //清空输入框
        // this.pwd = "";
        if (res.data == "登陆成功") {
          this.$router.push("/wode");
        }
      } else {
        this.message = "手机号错误";
        this.phone = "";
        this.pwd = "";
      }
    },
    // 注册请求
    // 如果输入手机号和密码状态都为ok，则发起请求，并清空输入框内容。否则提示错误信息
    async zhuce() {
      await this.$axios.post("http://localhost:3000/login/zhuce", {
        phone: this.phone,
        pwd: this.pwd
      });
    },
    // 手机号正则判断
    regphone() {
      let data = this.phone;
      // console.log(data);
      // 正则判断输入的手机号不正确，输出错误提示
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(data)) {
        this.message = "手机号错误";
        this.phoneok = false;
      } else {
        this.message = "";
        this.phoneok = true;
      }
    }
    // 密码正则判断
  }
};
</script>

<style scoped>
#login_bk {
  background-color: #fff;
}
.InputBarWrap .inputWrap input {
  font-size: 0.3rem;
}
.InputBarWrap .tips {
  width: 0.8rem;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
}
.InputBarWrap .codeBtn,
.Login .btnWrap button {
  font-size: 0.3rem;
}
.Login .tiptStr {
  font-size: 0.27rem;
}
.fl-row-around {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
</style>
<style>
.van-field__label {
  padding-left: 10px;
  width: 60px;
}
.van-cell-group {
  position: relative;
}
.icon-icon_phone {
  position: absolute;
  top: 10px;
  left: 5px;
}
</style>


