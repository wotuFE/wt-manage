<template>
    <div class="edit">
        <mt-field label="" :placeholder="'请输入'+this.$route.params.id" autofocus="autofocus"></mt-field>
    </div>
</template>

<style lang="scss" scoped>
    .edit {
        padding-top: 10px;
    }
</style>

<script>
    import {
      mapMutations
    } from 'vuex'
    export default {
      data () {
        return {
        }
      },
      created () {
        this.UPDATE_TITLE('更改' + this.$route.params.id)
        this.UPDATE_RIGHTOBJ({text: '保存', icon: ''})
      },
      mounted () {
      },
      computed () {
      },
      methods: {
        ...mapMutations(['UPDATE_TITLE', 'UPDATE_RIGHTOBJ'])
      }
    }
</script>
