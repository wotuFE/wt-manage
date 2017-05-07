<template>
    <div class="bg-w">
        <h2>{{ activity.title }}</h2>
        <div class="content">
            <div class="pad-0-10">
                <p>活动主题:{{ activity.zhuti }}</p>
                <p>活动发起人:{{ activity.faqiren }}</p>
                <p>分享人:{{ activity.fenxiangren }}</p>
                <p>时间:{{ activity.activityTime }}</p>
                <p>地点:{{ activity.activityAddress }}</p>
                <p>参与人:{{ activity.participant }} (共{{ activity.participantTotle }}人)</p>
                <p>活动内容:</p>
                <p style="width:100%">
                    <textarea readonly>{{ activity.content }}</textarea>
                </p>
            </div>
        </div>
        <div class="bottom">
            <div class="buttonList">
                <mt-button class="btn" size="small" type="primary" @click="participateInActivities($event)">{{ isAttend ? 'キャンセル活動' : '参加活動'}}</mt-button>
                <mt-button class="btn" size="small" type="danger" @click="leave($event)">请假</mt-button>
            </div>
        </div>
        <div class="bottom text-center" v-if="false">
            <mt-button class="btn" size="small" type="primary" @click="participateInActivities($event)">结束活动</mt-button>            
        </div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
  name: 'recentActivity',
  data () {
    return {
      activity: {
        'title': '新活動',
        'zhuti': 'vuexの使用分け合う',
        'faqiren': '老胡',
        'fenxiangren': '陈萌',
        'activityTime': '2017-05-14 14:30:00',
        'activityAddress': 'たくさんの人　コーヒー・ショップ',
        'participant': '高于,低于,拉祜,木棉花,引用,要坚强,参加,另外人,技嘉,联合,黄褐斑,以前有,获取,李嘉诚,丼風,黒崎一護',
        'participantTotle': 13,
        'content': '在很多人咖啡厅分享vuex的使用方法并做一个小demo'
      }
    }
  },
  methods: {
    participateInActivities (e) {
      console.log(e)
      this.$store.commit('isAttend', !this.isAttend)
      MessageBox.alert(this.isAttend ? '活動を参加する成功' : 'キャンセル参加活動成功')
      // alert('参加活动')
    },
    leave (e) {
      console.log(e)
      MessageBox.alert(this.isAttend ? '你申请了请假' : '你已经取消了请假的申请')
    }
  },
  computed: {
    isAttend () {
      return this.$store.state.isAttend
    }
  }
}
</script>
<style scoped>
    h2 {
        width: 100vw;
        text-align:  center;
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 0.5rem;
        border-bottom: 1px dotted #979797;
    }
    .content {
        margin-bottom: 1rem;
        border-bottom: 1px dotted #979797;
    }
    .pad-0-10 {
        margin: 0 10px;
    }
    .pad-0-10 p {
        padding: 5px 0;
    }
    .buttonList {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0 2rem;
    }
    .bottom {
        width: 100vw;
        position: fixed;
        bottom: 75px;
    }
    .btn {
        width: 125px;
    }
    textarea {
        border:1px solid #979797;
        resize: none;
        width: 100%;
        padding: 0;
        height: 7rem;
        text-indent: 2em;
    }
    .mint-cell {
        min-height: 35px;
    }
</style>
