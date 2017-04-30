<template>
    <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1" @click.native="router('contactBook')">
            <i class="icon iconfont">&#xe60e;</i>
            通讯录
        </mt-tab-item>
        <mt-tab-item id="tab2" @click.native="router('activity')">
            <i class="icon iconfont">&#xe628;</i>
            活动
        </mt-tab-item>
        <mt-tab-item id="tab3">
            <i class="icon iconfont">&#xe608;</i>
            财务
        </mt-tab-item>
        <mt-tab-item id="tab4">
            <i class="icon iconfont">&#xe60a;</i>
            我
        </mt-tab-item>
    </mt-tabbar>
</template>
<script>
export default {
  data () {
    return {
        selected: 'tab1'
    }
  },
  methods: {
    router(name) {
      if (this.$route.name === name) return
      this.$router.push({name});
    }
  }  
}
</script>
<style>
    .iconfont {font-size: 24px !important;display: block;margin-bottom: 5px;}
</style>
