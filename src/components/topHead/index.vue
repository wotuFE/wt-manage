<template>
    <div>
      <mt-header :title="title">
        <router-link to="/" slot="left">
          <mt-button icon="back">back</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header2',
  computed: mapGetters([
    'title'
  ])
}
</script>
