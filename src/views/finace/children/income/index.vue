<template>
    <div>
        <div class="balance"><span>余额：</span><span v-text="`${showList.balance}`">2100</span></div>
        <ul>
            <li>
                <span>金额：</span>
                <span v-text="`${showList.amount}`">1000</span>
                <div>
                    <span class="left">用途：</span>
                    <span v-text="`${showList.purpose}`">会费</span>
                </div>
                <div>
                    <span class="left">经手人：</span>
                    <span v-text="`${showList.user}`">XXX</span>
                </div>
                <div>
                    <span class="left">时间：</span>
                    <span v-text="`${showList.time}`">2017-4-27 16:00:00</span>
                </div>
            </li>

        </ul>
    </div>
</template>
<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'income',
  data () {
    return {
      showList: {}
    }
  },
  created () {
    this.list()
  },
  methods: {
    list () {
      if (this.$route.params.type === 0) {
        this.showList = {
          'amount': '2000',
          'purpose': '会费',
          'user': '老胡',
          'balance': '100000',
          'time': '2017-4-27 16:00'
        }
      } else {
        this.showList = {
          'amount': '555',
          'purpose': '吃饭',
          'user': '蒙木华',
          'balance': '9999',
          'time': '2017-4-28 18:00'
        }
      }
    }
  }
}
</script>
<style>
     ul {
        background-color: #ffffff;
        width: 100%;
        overflow: auto;
    }
    li {
        border-top: 1px solid #888888;
        box-shadow: 1px 1px 5px #888888 ;
        padding: 5px;
        margin: 10px auto;
    }
    .balance{
        background-color: #ffffff;
        text-align: center;
        width: 100%;
        height: 30px;
        float: left;
        line-height: 30px;
    }
</style>
