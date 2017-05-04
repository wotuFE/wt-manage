<style scoped>
.activity {
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
}

</style>

<template>
  <div class="activity">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  mounted () {
    if (this.$store.state.isNew) {
      this.$router.push({name: 'recentActivity'})
      this.UPDATE_TITLE('近期活动')
    } else {
      this.$router.push({name: 'beforeActivitiesList'})
      this.UPDATE_TITLE('往期活动列表')
    }
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations([
      'UPDATE_TITLE'
    ])
  },
  computed: {
    name () {
      return this.$route.name
    }
  },
  watch: {
    name (val) {
      if (this.$store.state.isNew) {
        this.$router.push({name: 'recentActivity'})
      } else {
        this.$router.push({name: 'beforeActivitiesList'})
      }
    }
  }
}
</script>
