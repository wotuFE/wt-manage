<template>
  <div id="app">
    <AppHead></AppHead>
    <router-view></router-view>
    <AppFoot></AppFoot>
  </div>
</template>

<script>
  import AppHead from './components/AppHead'
  import AppFoot from './components/AppFoot'
  
  export default {
    name: 'app',
    components: {
      AppHead,
      AppFoot
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
