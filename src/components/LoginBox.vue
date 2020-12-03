<template>
  <!-- 登录 -->

  <div>
    <button id="login">
      {{ isLogin }}
    </button>
    <br /><br />
    <div id="loginForm" v-if="loginFormSeen">
      <input type="text" v-model="username" placeholder="账号" />
      <br />
      <input type="text" v-model="password" placeholder="密码" />
      <br />
      <button id="login" @click="submitLogin">登录</button>
      <p>测试期间直接点登录，不用输密码</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginBox",
  data: function () {
    return {
      loginFormSeen: true,
      isLogin: '未登录',
      username: "",
      password: "",
    };
  },
  methods: {
    checkLogin: function () {
      console.log("检查是否登录");
      /* 
      检查是否登录
      */
      return true;
    },
    submitLogin: function () {
      console.log("登录 " + this.username + " " + this.password);
      /* 
      1. 请求后端接口进行登录信息提交
      */

      if (this.checkLogin()) {
        // 登录成功
        this.loginFormSeen = false;
        this.isLogin = '已登录';
      } else {
        // 登录失败
      }
    },
  },
};
</script>

<style scoped>
</style>