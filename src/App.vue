<template>
  <div id="app">
    <Header2 />
    <router-view></router-view>
  </div>
</template>

<script>
import Header2 from './common/top-head'
export default {
  name: 'app',
  components: {
    Header2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
