<template>
    <div class="edit sub-router">
        <mt-field v-model="editObj.optionValue" native.autofocus="autofocus"></mt-field>
    </div>
</template>

<style lang="scss" scoped>
    .edit {
        padding-top: 10px;
    }
</style>

<script>
    import {
        mapMutations,
        mapGetters
    } from 'vuex'
    
    export default {
        data () {
            return {
    
            }
        },
        created() {
            this.UPDATE_TITLE('更改' + this.editObj.title);
            this.UPDATE_RIGHTOBJ({
                text: '保存',
                icon: ''
            });
        },
        mounted() {
    
        },
        computed: {
            ...mapGetters([
                'editObj'
            ])
        },
        methods: {
            ...mapMutations(['UPDATE_TITLE', 'UPDATE_RIGHTOBJ']),
        }
    }
</script>