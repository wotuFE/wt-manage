<template>
  <div class="login">
    <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
    <div class="submit">
      <mt-button type="primary" @click="login">立即登录</mt-button>
    </div>
    <div class="tip">
      <router-link to="/register"><span class="t">注册账号</span></router-link>
      <span class="t2">|</span>
      <span class="t">忘记密码{{isLogin}}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import './index.scss'
</style>

<script>
  import {
    mapMutations,
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
  
      }
    },
    created() {
      this.UPDATE_TITLE('登录');
    },
    computed: mapGetters([
      'isLogin'
    ]),
    watch:{
      isLogin(isLogin) {
        if (isLogin) {
          this.$router.push('me');
        }
      }
    },
    methods: {
      ...mapMutations([
        'UPDATE_TITLE'
      ]),
      login() {
        this.$store.dispatch('LOGIN', {
          url: 'account/login',
          data: {
            phone: 13800000000,
            password: 123456
          }
        });
      }
    }
  }
</script>
