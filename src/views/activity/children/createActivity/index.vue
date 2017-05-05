<template>
  <div class="bg-w">
    <mt-field label="标题" placeholder="请填写标题" v-model="title"></mt-field>
    <mt-field label="活动主题" placeholder="请填写活动主题" v-model="activityTheme"></mt-field>
    <mt-field label="分享人" placeholder="请填写分享人名称" v-model="sharePeople"></mt-field>
    <mt-field label="分享时间" placeholder="请填写分享时间" v-model="time" @click.native="openPicker" readonly>
      <mt-datetime-picker
        ref="picker"
        type="datetime"
        v-model="time">
      </mt-datetime-picker>
    </mt-field>
    <mt-field label="分享地点" placeholder="请填写分享地点" v-model="activityLocation"></mt-field>
    <mt-field label="活动内容" placeholder="请填写活动内容" type="textarea" rows="4" v-model="activityContent"></mt-field>
    <mt-button size="large" type="primary" @click="create">发起活动</mt-button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'createActivity',
  data () {
    return {
      time: '',
      title: '',
      activityTheme: '',
      sharePeople: '',
      activityLocation: '',
      activityContent: ''
    }
  },
  mounted () {
    console.log(this.time)
    this.UPDATE_TITLE('发起新活动')
  },
  methods: {
    ...mapMutations([
      'UPDATE_TITLE'
    ]),
    openPicker () {
      debugger
      this.$refs.picker.open()
    },
    create () {
      const url = ''
      const data = {
        title: this.title,
        activityTheme: this.activityTheme,
        sharePeople: this.sharePeople,
        shareTime: this.shareTime,
        activityLocation: this.activityLocation,
        activityContent: this.activityContent
      }
      console.log(url, data)
      // this.$store.dispatch('_POST', {url, data})
    }
  },
  computed: {
    shareTime () {
      // return this.time.getTime()
    }
  }
}
</script>
<style scoped>
</style>
