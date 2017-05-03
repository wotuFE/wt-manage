<template>
    <div>
      <mt-header :title="title">
        <router-link to="" slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </router-link>
        <mt-button @click="save" :icon="rightObj.icon" slot="right">{{rightObj.text}}</mt-button>
      </mt-header>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: mapGetters([
    'title',
    'rightObj'
  ]),
  methods: {
    save() {
      alert('save');
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
