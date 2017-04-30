<style scoped>
.activity {
  overflow: auto;
  height: 100%;
  display: flex;
}

</style>

<template>
  <div class="activity">
      <router-view></router-view>
  </div>
</template>

<script>
import BeforeActivitiesList from './beforeActivitiesList'
import RecentActivity from './recentActivity'
export default {
    mounted() {
        if (this.$store.state.isNew) {
            this.$router.push('/activity/recentActivity');
        } else {
            this.$router.push('/activity/beforeActivitiesList');
        }
    },
    data() {
        return {

        }
    },
    components: {
        BeforeActivitiesList,
        RecentActivity
    }
}
</script>
