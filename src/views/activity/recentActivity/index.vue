<template>
    <div>
        <h1>活动标题</h1>
        <div class="pad-0-10">
            <p>活动主题:分享会</p>
            <p>活动内容:vuex的实战</p>
            <p>活动发起人:老胡</p>
            <p>分享人:陈x</p>
            <p>参与人列表:gaoyu,yueyun,aa,bb,cc(共5人)</p>
            <p>时间:2017-05-15</p>
            <p>地点:很多人咖啡厅</p>
        </div>
        <div class="buttonList">
            <mt-button size="small" type="primary">参加活动</mt-button>
            <mt-button size="small" type="danger">请假</mt-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'recentActivity'
    }
</script>
<style scope>
    h1 {
        width: 100vw;
        text-align:  center;
        font-size: 24px;
        line-height: 36px;
        border-bottom: 1px dotted #979797;
        margin-bottom: 0.5rem;
    }
    .pad-0-10 {
        padding: 0 10px;
    }
    .pad-0-10 p {
        line-height: 20px;
    }
    .buttonList {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    button {
        width: 80px;
    }
</style>