<template>
  <div class="details sub-router">
    <!-- 头像与姓名 -->
    <div class="topInfo">
      <!-- 头像 -->
      <div class="headImg">
        <img :src="manDetail.headImg">
      </div>
      <!-- 姓名 -->
      <div class="name">
        <span v-text="`${manDetail.realName}`"></span>
        <span :style="{color: manDetail.sex == 1 ? 'rgb(50, 154, 228)' : 'rgb(212, 79, 196)', 
        fontWeight: 'bold', marginLeft: '4px'}" v-text="`${manDetail.sex == 1 ? '♂' : '♀'}`"></span>
      </div>
    </div>
    <!-- 主要信息 -->
    <div class="mainInfo">
      <mt-cell title="籍贯">{{ manDetail.nativePlace }}</mt-cell>
      <mt-cell title="年龄">{{ manDetail.age }}</mt-cell>
      <mt-cell title="联系方式" @click.native="call">{{ manDetail.phone }}</mt-cell>
      <mt-cell title="github">{{ manDetail.github }}</mt-cell>
      <mt-cell title="技能树">{{ manDetail.skillTree }}</mt-cell>
    </div>
    <!-- 下方操作表 -->
    <mt-actionsheet :actions="actions" v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    data() {
      return {
        sheetVisible: false,
        actions: []
      }
    },
    computed: {
      ...mapGetters([
        'manDetail'
      ])
    },
    methods: {
      ...mapActions([
        'whenRefreash'
      ]),
      // 拨打电话
      call() {
        const url = `tel:${this.manDetail.phone}`
        window.location.href = url
      }
    },
    created() {
      this.manDetail ?
        '' : this.whenRefreash(this.$route.params.id)
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  $topInfoWidth: 100px;
  $headImg: 80px;
  .details {
    top: 0;
    overflow: hidden;
    .topInfo {
      background: #fff;
      width: 100%;
      text-align: center;
      margin: 0 auto;
      margin-top: 0;
      padding: 20px 0;
      .headImg {
        background: #fff;
        margin: 0 auto;
        width: $headImg;
        height: $headImg;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .name {
        margin-top: 20px;
      }
    }
  }
</style>
