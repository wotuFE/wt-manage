<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import topHead from './components/topHead'
import foot from './components/footer'

import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    topHead,
    foot
  },
  data() {
    return {
      selected: 'tab1'
    }
  }
}
</script>

<style>
#app {
  height: 100vh;
  overflow: hidden;
}
</style>
