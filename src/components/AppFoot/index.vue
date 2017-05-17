<template>
  <mt-tabbar>
    <mt-tab-item id="tab1" :class="{'is-selected': isSelected === 'contactBook'}" @click.native="router('contactBook')">
      <i class="icon iconfont">&#xe60e;</i> 通讯录
    </mt-tab-item>
    <mt-tab-item id="tab2" :class="{'is-selected': isSelected === 'activity'}" @click.native="router('activity')">
      <i class="icon iconfont avitity">&#xe628;<span class="circle"></span></i> 发现
    </mt-tab-item>
    <mt-tab-item id="tab3" :class="{'is-selected': isSelected === 'finace'}" @click.native="router('finace')">
      <i class="icon iconfont">&#xe608;</i> 财务
    </mt-tab-item>
    <mt-tab-item id="tab4" :class="{'is-selected': isSelected === 'account'}" @click.native="router('account')">
      <i class="icon iconfont">&#xe604;</i> 我
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  export default {
    data() {
      return {
         isSelected: 'contactBook'
      }
    },
    created() {
      this.isSelected = location.hash.replace(/#\/(.*)/,'$1');
    },
    mounted() {
      
    },
    methods: {
      router(name) {
        this.isSelected = name
        if (this.$route.name === name) return
        this.$router.push({name})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .iconfont {
    font-size: 24px !important;
    display: block;
    margin-bottom: 5px;
  }
  .is-selected {
    background-color: #fafafa!important;
    border-top: 1px solid #eaeaea;
  }
  .avitity {
    position: relative;
    .circle {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: red;
      margin-left: -8px;
    }
  }
</style>
