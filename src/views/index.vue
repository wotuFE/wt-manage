<template>
  <div class="mainIndex">
    <top-head></top-head>
      <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import topHead from '@/components/topHead'
import foot from '@/components/footer'

export default {
  components: {
    topHead,
    foot
  },
  mounted () {
  }
}
</script>
