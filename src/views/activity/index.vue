<template>
  <div class="page-navbar">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">技术干货</mt-tab-item>
      <mt-tab-item id="2">活动列表</mt-tab-item>
    </mt-navbar>
        <mt-search cancel-text="取消" placeholder="搜索">
    </mt-search>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import {
    mapMutations
  } from 'vuex'
  export default {
    name: 'page-navbar',
    data() {
      return {
        selected: '1'
      };
    },
    created() {
      this.UPDATE_TITLE('技术干货');
    },
    methods: {
      ...mapMutations(['UPDATE_TITLE'])
    }
  };
</script>

<style lang="scss" scoped>
  @import './index.scss'
</style>