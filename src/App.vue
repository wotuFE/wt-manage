<template>
  <div id="app">
    <top-head></top-head>
    <router-view></router-view>
  </div>
</template>

<script>
import topHead from './components/topHead'

export default {
  name: 'app',
  components: {
    topHead
  },
  data() {
    return {
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
