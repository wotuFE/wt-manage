<template>
    <div>
        <h2>活动标题</h2>
        <div class="content">
            <div class="pad-0-10">
                <p>活动主题:分享会</p>
                <p>活动发起人:老胡</p>
                <p>分享人:陈x</p>
                <p>时间:2017-05-15</p>
                <p>地点:很多人咖啡厅</p>
                <p>参与人列表:gaoyu,yueyun,aa,bb,cc(共5人)</p>
                <p>活动内容:</p>
                <p style="width:100%">
                    <textarea readonly></textarea>
                </p>
            </div>
        </div>
        <div class="bottom">
            <div class="buttonList">
                <mt-button size="small" type="primary">参加活动</mt-button>
                <mt-button size="small" type="danger">请假</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'recentActivity'
    }
</script>
<style scope>
    h2 {
        width: 100vw;
        text-align:  center;
        font-size: 24px;
        line-height: 36px;
        border-bottom: 1px dotted #979797;
        margin-bottom: 0.5rem;
    }
    .content {
        margin-bottom: 1rem;
        border-bottom: 1px dotted #979797;
    }
    .pad-0-10 {
        margin: 0 10px;
    }
    .pad-0-10 p {
        line-height: 20px;
        padding: 5px 0;
    }
    .buttonList {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0 6rem;
    }
    .bottom {
        width: 100vw;
        position: fixed;
        bottom: 75px;
    }
    button {
        width: 80px;
    }
    textarea {
        border:1px solid #979797;
        resize: none;
        width: 100%;
        padding: 0;
        height: 10rem;
    }
</style>