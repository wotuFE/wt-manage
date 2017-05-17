<template>
  <div class="login sub-router">
    <mt-field v-model="userInfo.phone" label="用户名" placeholder="请输入用户名"></mt-field>
    <mt-field label="密码" v-model="password" placeholder="请输入密码" type="password"></mt-field>
    <div class="submit">
      <mt-button type="primary" @click="login">立即登录</mt-button>
    </div>
    <div class="tip">
      <router-link to="/account/register"><span class="t">注册账号</span></router-link>
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
    mapMutations,
    mapGetters
  } from 'vuex'
  import {
    Toast,
    Indicator
  } from 'mint-ui'
  import Axios from 'axios'
  export default {
    data () {
      return {
        password: ''
      }
    },
    created () {
      this.UPDATE_TITLE('登录')
    },
    computed: mapGetters([
      'isLogin',
      'userInfo'
    ]),
    watch: {
      isLogin (isLogin) {
        if (isLogin) {
          this.$router.push('/account')
        }
      }
    },
    methods: {
      ...mapMutations([
        'UPDATE_TITLE',
        'HANDLE_LOGIN_STATUS',
        'HANDLE_USERINFO'
      ]),
      login () {
        Indicator.open()
        this.$store.dispatch('POST', {
          url: '/account/login',
          data: {
            phone: this.userInfo.phone,
            password: this.password
          }
        }).then((res) => {
          // 保存用户信息到store
          this.HANDLE_USERINFO(res.info)
           this.UPDATE_TITLE('个人信息')
           // 改变登录状态
           this.HANDLE_LOGIN_STATUS(true)
          setTimeout(() => {
            Indicator.close()
            this.$router.push('/account');
          }, 300)
        }).catch(() => {
          Toast({
            message: '登录失败22222'
          })
          Indicator.close()
        })
      }
    }
  }
</script>
