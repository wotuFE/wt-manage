<style scoped>
.activity {
  overflow: auto;
  height: 100%;
}

</style>

<template>
  <div class="activity">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    mounted() {
        if (this.$store.state.isNew) {
            this.$router.push({name: 'recentActivity'});
        } else {
            this.$router.push({name: 'beforeActivitiesList'});
        }
    },
    data() {
      return {
      }
    },
    computed: {
      name () {
        return this.$route.name
      }
    },
    watch: {
      name (val) {
        if (this.$store.state.isNew) {
            this.$router.push({name: 'recentActivity'});
        } else {
            this.$router.push({name: 'beforeActivitiesList'});
        }
      }
    }
}
</script>
