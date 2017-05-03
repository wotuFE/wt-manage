<template>
  <div class="login">
    <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
    <div class="submit">
      <mt-button type="primary">立即登录</mt-button>
    </div>
    <div class="tip">
     <router-link to="/register"><span class="t">注册账号</span></router-link>
      <span class="t2">|</span>
      <span class="t">忘记密码</span>
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
      this.UPDATE_TITLE('登录');
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
