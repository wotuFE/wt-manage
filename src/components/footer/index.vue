<template>
    <mt-tabbar>
        <mt-tab-item id="tab1" :class="{'is-selected': isSelected === 'contactBook'}" @click.native="router('contactBook')">
            <i class="icon iconfont">&#xe60e;</i>
            通讯录
        </mt-tab-item>
        <mt-tab-item id="tab2" :class="{'is-selected': isSelected === 'activity'}" @click.native="router('activity')">
            <i class="icon iconfont">&#xe628;</i>
            活动
        </mt-tab-item>
        <mt-tab-item id="tab3" :class="{'is-selected': isSelected === '3'}" @click.native="router('income')">
            <i class="icon iconfont">&#xe608;</i>
            财务
        </mt-tab-item>
        <mt-tab-item id="tab4" :class="{'is-selected': isSelected === 'account'}" @click.native="router('account')">
            <i class="icon iconfont">&#xe60a;</i>
            我
        </mt-tab-item>
    </mt-tabbar>
</template>
<script>
export default {
  data () {
    return {
      selected: 'tab1',
      isSelected: 'contactBook'
    }
  },
  computed: {
    routeName () {
      const fullPath = this.$route.fullPath
      const name = fullPath.split('index/')[1].split('/')[0]
      return name
    }
  },
  created () {
  },
  mounted () {
    this.isSelected = this.routeName
  },
  methods: {
    router (name) {
      this.isSelected = name
      if (this.$route.name === name) return
      if (name === 'income') {
        this.$router.push({ name: 'income', params: { type: 0 } })
      } else {
        this.$router.push({ name })
      }
      this.$router.push({name})
    }
  },
  watch: {
    routeName (val) {
      this.isSelected = this.routeName
    }
  }
}
</script>
<style>
    .iconfont {font-size: 24px !important;display: block;margin-bottom: 5px;}
    .is-selected {background-color: #fafafa!important;border-top: 1px solid #eaeaea;}
</style>
