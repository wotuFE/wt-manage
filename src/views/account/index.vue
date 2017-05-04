<template>
  <router-view>
  </router-view>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    computed: mapGetters([
      'isLogin'
    ]),
    created () {
      if (!this.isLogin) {
        this.$router.push('/login')
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
