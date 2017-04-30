<template>
  <div id="app">
    <top-head></top-head>
    <router-view></router-view>
    <foot :selected="selected"></foot>
  </div>
</template>

<script>
import topHead from './components/topHead'
import foot from './components/footer'
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
  },
}
</script>

<style>
#app {
  height: 100vh;
  overflow: hidden;
}
</style>
