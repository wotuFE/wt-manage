<style scoped>
.finace .left{
  line-height: 50px;
  text-align: center;
  float:left;
  width: 50%;
  height: 50px;
  background-color: #ffffff;
  
}
.finace .action{
  border-bottom: 2px solid #26a2ff; 
}
.finace .actionNo{
   background-color: #cccccc;
}

</style>

<template>
  <div class="finace">
    <div style="height: 50px">
<div class="left " :class="isA == '0' ? 'action':'actionNo'" @click="action('0')">
  <router-link :to="{name:'income',params: {type:0}}">
    <div>收入</div>
  </router-link>
</div>
<div class="left " :class="isA == '1' ? 'action':'actionNo'" @click="action('1')">
  <router-link :to="{name:'income',params: {type:1}}">
    <div>支出</div>
  </router-link>
</div>
</div>
<!-- tab-container -->
<router-view ref='chil'></router-view>
</div>
</template>

<script>
  export default {
    mounted () {
      if (this.$store.state.isNew) {
        this.$router.push({ name: 'income' })
      } else {
        this.$router.push({ name: 'expenditure' })
      }
    },
    data () {
      return {
        selected: '1',
        isA: '0'
      }
    },
    computed: {
      name () {
        return this.$route.name
      }
    },
    methods: {
      action (i) {
        this.isA = i
        this.$refs.chil.list()
      }
    }
  }
</script>
