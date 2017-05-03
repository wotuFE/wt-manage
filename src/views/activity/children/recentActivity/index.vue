<template>
    <div class="bg-w">
        <h2>{{ activity.title }}</h2>
        <!--<mt-index-list>
            <div><mt-cell :title="'活动主题:' + activity.zhuti"></mt-cell></div>
            <div><mt-cell :title="'活动发起人:' + activity.faqiren"></mt-cell></div>
            <div><mt-cell :title="'分享人:' + activity.fenxiangren"></mt-cell></div>
            <div><mt-cell :title="'时间:' + activity.activityTime"></mt-cell></div>
            <div><mt-cell :title="'地点:' + activity.activityAddress"></mt-cell></div>
            <div><mt-cell :title="'参与人列表:' + activity.participant"></mt-cell></div>
            <mt-cell title="活动内容"></mt-cell>
            <p style="width:90%;margin:0 auto;"> 
                <textarea readonly>{{ activity.content }}</textarea>
            </p>
        </mt-index-list>-->
        <div class="content">
            <div class="pad-0-10">
                <p>活动主题:{{ activity.zhuti }}</p>
                <p>活动发起人:{{ activity.faqiren }}</p>
                <p>分享人:{{ activity.fenxiangren }}</p>
                <p>时间:{{ activity.activityTime }}</p>
                <p>地点:{{ activity.activityAddress }}</p>
                <p>参与人列表:{{ activity.participant }}(共{{ activity.participantTotle }}人)</p>
                <p>活动内容:</p>
                <p style="width:100%">
                    <textarea readonly>{{ activity.content }}</textarea>
                </p>
            </div>
        </div>
        <div class="bottom">
            <div class="buttonList">
                <mt-button class="btn" size="small" type="primary" @click="participateInActivities($event)">参加活动</mt-button>
                <mt-button class="btn" size="small" type="danger" @click="leave($event)">请假</mt-button>
            </div>
        </div>
        <div class="bottom text-center" v-if="false">
            <mt-button class="btn" size="small" type="primary" @click="participateInActivities($event)">结束活动</mt-button>            
        </div>
    </div>
</template>
<script>
    export default {
        name: 'recentActivity',
        data() {
            return {
                activity: {
                    'title': '新活动',
                    'zhuti': 'vuex的使用分享',
                    'faqiren': '老胡',
                    'fenxiangren': '陈萌',
                    'activityTime': '2017-05-14 14:30:00',
                    'activityAddress': '很多人咖啡厅',
                    'participant': 'gaoyu,yueyun,mm,bb,cc,aa',
                    'participantTotle': 6,
                    'content': '在很多人咖啡厅分享vuex的使用方法并做一个小demo'
                }
            }
        },
        methods: {
            participateInActivities(e) {
                console.log(e);
                alert('参加活动');
            },
            leave(e) {
                console.log(e);                
                alert('请假');
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
        padding: 0 5rem;
    }
    .bottom {
        width: 100vw;
        position: fixed;
        bottom: 75px;
    }
    .btn {
        width: 80px;
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