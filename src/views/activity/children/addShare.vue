<template>
  <div class="sub-router">
    <mt-field label="分享主题" placeholder="请输入分享主题"></mt-field>
    <mt-field label="github" placeholder="请输入github地址"></mt-field>
    <mt-field label="分享人" placeholder="请输入分享人姓名"></mt-field>
    <mt-cell title="技能要点:"></mt-cell>
    <mt-field placeholder="请输入技能要点" type="textarea" rows="10"></mt-field>
  </div>
</template>

<script>
  // 新增分享
  import {
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
  
      }
    },
    created() {
      this.UPDATE_TITLE('新增分享');
      this.UPDATE_RIGHTOBJ({
        text: '保存',
        icon: ''
      });
    },
    methods: {
      ...mapMutations([
        'UPDATE_TITLE',
        'UPDATE_RIGHTOBJ'
      ])
    }
  
  }
</script>

<style lang="scss">
  body {
    background-color: #fff;
  }
  .mint-field .mint-cell-title {
    width: 75px;
  }
</style>

<style lang="scss">
  body {
     
  }
</style>