<style lang="scss" scoped>
  @import './index.scss';
</style>

<template>
  <div class="me">
    <mt-index-list>
      <div class="portrait">
        <img src="../../../assets/portrait.png" alt="头像">
        <span>老胡</span>
      </div>
      <div class="item">
        <router-link to="edit/手机号码">
          <mt-cell title="手机号码" is-link :value="userInfo.phone"></mt-cell>
        </router-link>
        <router-link to="edit/真实姓名">
          <mt-cell title="真实姓名" is-link :value="userInfo.realName||'未设置'"></mt-cell>
        </router-link>
        <router-link to="edit/年龄">
          <mt-cell title="年龄" is-link :value="userInfo.age||'未设置'"></mt-cell>
        </router-link>
        <router-link to="edit/籍贯">
          <mt-cell title="籍贯" is-link :value="userInfo.nativePlace||'未设置'"></mt-cell>
        </router-link>
        <router-link to="edit/github地址">
          <mt-cell title="github地址" is-link :value="userInfo.github||'未设置'"></mt-cell>
        </router-link>
      </div>
      <div class="item">
        <mt-cell title="开发常用技术"></mt-cell>
        <router-link to="edit/开发常用技术">
          <mt-cell :title="userInfo.github" is-link :value="userInfo.github?'':'未设置'"></mt-cell>
        </router-link>
      </div>
      <div class="item">
        <router-link to="edit/Jurisdiction">
          <mt-cell title="权限" is-link value=""></mt-cell>
        </router-link>
        <mt-cell title="退出"></mt-cell>
      </div>
    </mt-index-list>
  </div>
</template>

<script>
  import {
    mapMutations,
    mapGetters
  } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    computed: mapGetters([
      'userInfo'
    ]),
    created () {
    },
    mounted () {
      this.UPDATE_TITLE('个人信息')
    },
    methods: {
      ...mapMutations([
        'UPDATE_TITLE'
      ]),
      edit () {
        this.$router.push('me/edit')
      }
    }
  }
</script>
