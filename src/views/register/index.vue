<template>
  <div class="register">
    <mt-field label="手机号码" placeholder="请输入手机号码"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
    <mt-field label="确认密码" placeholder="请再次输入密码" type="password"></mt-field>
    <p class="tip">错误提示信息</p>
    <div class="submit">
      <mt-button type="primary">立即注册</mt-button>
    </div>
    <div class="to-login">
      <span class="">已有账号?</span>
       <router-link to="/login"><span class="t">立即登录</span></router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import './index.scss'
</style>

<script>
  import {
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
  
      }
    },
    created() {
      this.UPDATE_TITLE('注册账号');
    },
    computed() {
  
    },
    methods: {
      ...mapMutations([
        'UPDATE_TITLE'
      ])
    }
  }
</script>
