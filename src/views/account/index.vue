<style lang="scss" scoped>
  @import './index.scss'
</style>

<template>
  <div class="me">
    <mt-index-list>
      <div class="portrait">
        <img :src="userInfo.headImg" alt="头像">
        <span @click.native="toUpdate('昵称','nickName')">{{userInfo.nickName || '未设置'}}</span>
         <span :style="{color: userInfo.sex == 1 ? 'rgb(50, 154, 228)' : 'rgb(212, 79, 196)', 
        fontWeight: 'bold', marginLeft: '4px'}" v-text="`${userInfo.sex == 1 ? '♂' : '♀'}`"></span>
      </div>
      <div class="item">
        <mt-cell @click.native="toUpdate('手机号码','phone')" title="手机号码" is-link :value="userInfo.phone"></mt-cell>
        <mt-cell @click.native="toUpdate('真实姓名','realName')" title="真实姓名" is-link :value="userInfo.realName||'未设置'"></mt-cell>
        <mt-cell @click.native="toUpdate('年龄','age')" title="年龄" is-link :value="userInfo.age||'未设置'"></mt-cell>
        <mt-cell @click.native="toUpdate('籍贯','nativePlace')" title="籍贯" is-link :value="userInfo.nativePlace||'未设置'"></mt-cell>
        <mt-cell @click.native="toUpdate('github地址','github')" title="github地址" is-link :value="userInfo.github||'未设置'"></mt-cell>
      </div>
      <div class="item">
        <mt-cell title="常用开发技术"></mt-cell>
        <mt-cell @click.native="toUpdate('常用开发技术','skillTree')" :title="userInfo.skillTree" is-link :value="userInfo.skillTree?'':'未设置'"></mt-cell>
      </div>
      <div class="item">
        <mt-cell @click.native="toUpdate('公司','company')" title="公司" is-link :value="userInfo.company||'未设置'"></mt-cell>
        <mt-cell @click.native="toUpdate('权限','jurisdiction')" title="权限" is-link :value="userInfo.jurisdiction||'未设置'"></mt-cell>
      </div>
    </mt-index-list>
    <router-view></router-view>
  </div>
</template>

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
    computed: mapGetters([
      'userInfo',
      'isLogin'
    ]),
    created() {
      if (!this.isLogin) {
        this.$router.push({
          name: 'login'
        })
      }
    },
    mounted() {
      this.UPDATE_TITLE('个人信息')
    },
    methods: {
      ...mapMutations([
        'UPDATE_TITLE',
        'EDIT_USER'
      ]),
      // 去更新用户信息
      toUpdate(title, option) {
        const optionValue = this.userInfo[option]
        const data = {
          title,
          option,
          optionValue
        }
        // 把改变存到store
        this.EDIT_USER(data)
        this.$router.push({
          name: 'edit',
          params: {}
        })
      },
      logout() {
        this.$router.push({
          name: 'login'
        })
      }
    }
  }
</script>