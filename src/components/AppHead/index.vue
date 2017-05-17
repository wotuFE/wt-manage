<template>
  <div>
    <mt-header :title="title">
      <router-link to="" slot="left" v-if="!showLeft">
        <img class="logo" src="../../assets/logo2.png" alt="">
      </router-link>
      <router-link to="" slot="left" v-if="showLeft">
        <mt-button icon="back" @click="back">返回</mt-button>
      </router-link>
      <mt-button @click="save" :icon="rightObj.icon" slot="right">{{rightObj.text}}</mt-button>
    </mt-header>
  </div>
</template>

<style lang="scss" scoped>
  .mint-header {
    position: relative;
  }
  
  .logo {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 25px;
    border-radius: 30%;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
  }
  
  .mint-header {
    font-size: 18px;
  }
</style>

<script>
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  
  export default {
    name: 'Header',
    data() {
      return {
        showLeft: true
      }
    },
    computed: {
      ...mapGetters([
        'title',
        'editObj',
        // 右上角图标对象
        'rightObj'
      ]),
      name() {
        return this.$route.name
      }
    },
    methods: {
      ...mapMutations([
        'POST'
      ]),
      save() {
        const url = '/account/edit';
        const data = {
          ...this.editObj,
          phone: 15013795539
        }
        this.$store.dispatch('POST', {
          url,
          data
        }).then((res) => {
          this.$store.commit('HANDLE_USERINFO', {
            // 转换成userInfo的属性
            [data.option]: data.optionValue
          });
          this.back();
        }).catch((e) => {
          console.log(e);
        })
      },
      back() {
        this.$router.go(-1)
      },
      // 检测当前是否为tab最顶层页面
      checkIsTop() {
        // 不需要后退按钮的路由name
        const topPageName = ['finace', 'contactBook', 'activity', 'account']
        const routerName = this.$route.name
        if (topPageName.indexOf(routerName) >= 0) {
          this.showLeft = false
        } else {
          this.showLeft = true
        }
      }
    },
    mounted() {
      this.checkIsTop()
    },
    watch: {
      name() {
        this.checkIsTop()
      }
    }
  }
</script>

