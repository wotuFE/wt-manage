<template>
  <div class="register sub-router">
    <mt-field v-model="phone" label="手机号码" placeholder="请输入手机号码"></mt-field>
    <mt-field v-model="password" label="密码" placeholder="请输入密码" type="password"></mt-field>
    <mt-field v-model="confirmPassword" label="确认密码" placeholder="请再次输入密码" type="password"></mt-field>
    <p class="tip">{{this.errorMsg}}</p>
    <div class="submit">
      <mt-button @click="register" type="primary">立即注册</mt-button>
    </div>
    <div class="to-login">
      <span class="">已有账号?</span>
      <router-link to="/account/login"><span class="t">立即登录</span></router-link>
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
  import {
    Toast
  } from 'mint-ui'
  // import { post } from 'client'
  export default {
    data () {
      return {
        phone: '13800000000',
        password: '123456',
        confirmPassword: '123456',
        errorMsg: ''
      }
    },
    created () {
      this.UPDATE_TITLE('注册账号')
    },
    computed () {
  
    },
    methods: {
      ...mapMutations([
        'UPDATE_TITLE'
      ]),
      register () {
        const {
          phone,
          password,
          confirmPassword
        } = this
        if (!phone) {
          this.errorMsg = '请输入手机号码'
          return false
        }
        if (!password) {
          this.errorMsg = '请输入密码'
          return false
        }
        if (!confirmPassword) {
          this.errorMsg = '请再次输入密码'
          return false
        }
        if (password !== confirmPassword) {
          this.errorMsg = '两次输入的密码不一致'
          return false
        }
        const url = 'account/register'
        const data = {
          phone,
          password
        }
        this.$store.dispatch('POST', {
          url,
          data
        }).then((res) => {
          Toast({
            message: '注册成功',
            position: 'top',
            iconClass: 'icon icon-success'
          })
        }).catch(() => {
          console.log('注册失败')
        })
      }
    }
  }
</script>
