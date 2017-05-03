<template>
    <div>
        hello
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
    
            }
        },
        created() {
            this.UPDATE_TITLE(this.$route.params.id);
        },
        mounted() {
            
        },
        computed() {
    
        },
        methods: {
            ...mapMutations(['UPDATE_TITLE'])
        }
    }
</script>