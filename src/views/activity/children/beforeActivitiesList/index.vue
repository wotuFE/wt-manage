<template>
    <ul>
        <li>
            <h3>主题：超级分享会</h3>
            <p>活动内容：22222</p>
            <p class="right">参与人数：20</p>
            <p>活动时间：2017-4-27 16:00:00</p>
        </li>
    </ul>
</template>
<script>
export default {
  name: 'beforeActivitiesList'
}
</script>
<style scope>
    ul {
        overflow: auto;
        padding-bottom: 95px;
        width: 100%;
    }
    ul:first-child li {
        margin-top: 0;
    }
    li {
        border-top: 1px solid #888888;
        box-shadow: 1px 1px 5px #888888 ;
        padding: 5px;
        margin: 10px auto;
        background-color: #FFF;
    }
</style>
