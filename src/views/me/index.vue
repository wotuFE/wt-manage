<style lang="scss" scoped>
  @import './index.scss'
</style>

<template>
  <div class="me">
    <div class="portrait">
      <img src="../../assets/portrait.png" alt="头像">
      <span>老胡</span>
    </div>
    <div class="item">
      <mt-cell title="手机号码" href="/#/me" is-link value="1501501501501"></mt-cell>
      <mt-cell title="真实姓名" href="/#/me" is-link value="胡儒清"></mt-cell>
      <mt-cell title="年龄" href="/#/me" is-link value="20"></mt-cell>
      <mt-cell title="籍贯" href="/#/me" is-link value="广西"></mt-cell>
      <mt-cell title="github" href="/#/me" is-link value="https://github.com/huruqing"></mt-cell>
    </div>
    <div class="item">
      <mt-cell title="开发常用技术"></mt-cell>
      <mt-cell title="vue、react、webpack、node、php、jquery" href="/#/me" is-link value=""></mt-cell>
    </div>
    <div class="item">
     <mt-cell title="权限" href="/#/me" is-link value=""></mt-cell>
       <mt-cell title="退出"></mt-cell>
    </div>
  </div>
</template>

<script>
  export default {
  
  }
</script>