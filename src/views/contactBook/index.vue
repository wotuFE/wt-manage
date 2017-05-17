<style lang="scss" scoped>
.contactBook {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 56px;
  .list-div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    & > ul {
      height: 100% !important;
    }
  }
}
.headImg {
  width: 24px;
  height: 24px;
  overflow: hidden;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  img {
    width: 100%;
  }
}
</style>

<template>
  <div class="contactBook">
    <mt-index-list class="list-div" :height="height">
      <mt-index-section v-for="item in list" :key="item.index" :index="item.index">
        <mt-cell v-for="cellItem in item.data" :key="cellItem.id" :title="cellItem.realName" :value="cellItem.phone" @click.native="goToDetail(cellItem)">
          <div class="headImg" slot="icon">
            <img :src="cellItem.headImg">
          </div>
        </mt-cell>
      </mt-index-section>
    </mt-index-list>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      height: 0,
      contactList: [],
      list: [],
      testList: []
    }
  },
  created () {
    this.setHeight()
  },
  mounted () {
    this.$store.commit('UPDATE_TITLE', '通讯录')
    this.$store.commit('UPDATE_RIGHTOBJ', { text: '', icon: '' })
    this.getList(30).then(
      () => {
        this.sortList()
      }
    )
  },
  methods: {
    // 调整list高度
    setHeight () {
      const screenHeight = document.body.clientHeight
      this.height = screenHeight - 40 - 56
    },
    // 获取数据
    getList (num) {
      const url = '/contact/getContactList'
      const data = {
        num: num
      }
      return this.$store.dispatch('POST', {url, data}).then(
        (res) => {
          this.contactList = res.list
          res.list.forEach((i) => {
            this.testList.push(i.realName || i.nickName)
          })
          return Promise.resolve()
        },
        () => {
          throw new Error('err')
        }
      )
    },
    // 排序
    sortList () {
      this.list = this.utils.filters.sortName(this.contactList, 'realName')
    },
    // 跳转到详情页
    goToDetail (item) {
      this.$store.commit('MAN_DETAIL', item)
      this.$router.push({name: 'detail', params: {id: item.id}})
    }
  }
}
</script>
