<template>
  <div class="bg-w">
    <mt-field label="标题" placeholder="请填写标题" v-model="title"></mt-field>
    <mt-field label="活动主题" placeholder="请填写活动主题" v-model="activityTheme"></mt-field>
    <mt-field label="分享人" placeholder="请填写分享人名称" v-model="sharePeople"></mt-field>
    <mt-field label="分享时间" placeholder="请填写分享时间" v-model="shareTime" @click.native="openPicker" readonly></mt-field>
    <mt-field label="分享地点" placeholder="请填写分享地点" v-model="activityLocation"></mt-field>
    <mt-field label="活动内容" placeholder="请填写活动内容" type="textarea" rows="4" v-model="activityContent"></mt-field>
    <mt-button size="large" type="primary" @click="create">发起活动</mt-button>
    <mt-datetime-picker
      ref="picker"
      type="datetime"
      v-model="time"
      @confirm="handleConfirm"
      @cancel="cancel">
    </mt-datetime-picker>
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
      shareTime: '',
      activityLocation: '',
      activityContent: ''
    }
  },
  mounted () {
    console.log(this.time)
    this.UPDATE_TITLE('发起新活动')
    this.time = new Date()
  },
  methods: {
    ...mapMutations([
      'UPDATE_TITLE'
    ]),
    openPicker () {
      this.$refs.picker.$el.style.display = 'block'
    },
    handleConfirm () {
      this.shareTime = this.dateFormat(this.time)
      debugger
      this.cancel()
    },
    cancel () {
      this.$refs.picker.$el.style.display = 'none'
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
    },
    dateFormat (time) {
      let year = time.getFullYear()
      let month = time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1
      let day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
      let hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
      let minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes
    }
  }
}
</script>
<style scoped>
</style>
