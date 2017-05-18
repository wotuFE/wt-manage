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
        <mt-cell value="老胡" isLink label="2017-05-22" v-for="n in 10" :title="'webpack使用技巧 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
    <router-view></router-view>
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
      this.UPDATE_RIGHTOBJ({
        text: '新增',
        icon: ''
      });
    },
    methods: {
      ...mapMutations(
        ['UPDATE_TITLE','UPDATE_RIGHTOBJ']
        )
    }
  };
</script>

<style lang="scss" scoped>
  @import './index.scss'
</style>