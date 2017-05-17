<style scoped>
  
</style>

<template>
  <div>
    <mt-navbar class="page-part">
      <mt-tab-item value="支出" :class="{'is-selected': selected === 1}" @click.native="changeTap(1)" id="1">支出</mt-tab-item>
      <mt-tab-item value="收入" :class="{'is-selected': selected === 2}" @click.native="changeTap(2)" id="2">收入</mt-tab-item>
      <mt-tab-item value="收入" :class="{'is-selected': selected === 3}" @click.native="changeTap(3)" id="2">查看</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container>
      <mt-tab-container-item id="1" :style="{display: selected===1?'block':'none'}">
        <!-- 支出 -->
        <ul class="list">
          <li v-for="item in payList">
            <div class="content">
              <div class="text1">
                <span>{{item.remark}}</span>
                <span>{{item.date}}</span>
              </div>
              <p class="text2">{{-item.amount}}</p>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" :style="{display: selected===2?'block':'none'}">
      <!-- 收入 -->
        <ul class="list">
           <li v-for="item in incomeList">
            <div class="content">
              <div class="text1">
                <span>{{item.remark}}</span>
                <span>{{item.date}}</span>
              </div>
              <p class="text2">{{item.amount}}</p>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" :style="{display: selected===3?'block':'none'}">
        <mt-cell title="总收入">{{totalIncome}}</mt-cell>
        <mt-cell title="总支出">{{-totalPay}}</mt-cell>
        <mt-cell title="余额">{{totalIncome - totalPay}}</mt-cell>
        <p class="add">
          <mt-button type="primary" @click="add">添加一条记录</mt-button>
        </p>
      </mt-tab-container-item>
    </mt-tab-container>
    <router-view></router-view>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        // 选中了那个tab列表
        selected: 1,
        // 收入列表
        incomeList: [],
        // 支出列表
        payList: [],
        // 总收入
        totalIncome: 0,
        // 总支出
        totalPay: 0
      }
    },
    watch: {
      // 当有新增记录时重新请求数据
      hasNew(value) {
        this.getCostList();
        this.HASNEW(false);
      }
    },
    created() {
      this.UPDATE_TITLE('财务');
      this.getCostList();
    },
    computed: {
      ...mapGetters(['hasNew'])
    },
    methods: {
      ...mapMutations([
        'UPDATE_TITLE',
        'HASNEW'
      ]),
      // 切换
      changeTap(id) {
        this.selected = id;
      },
      // 新增记录
      add() {
        this.$router.push({
          name: 'add'
        });
      },
      // 获取费用列表
      getCostList() {
        const url = '/finace/getCostList';
        const data = {};
        this.$store.dispatch('POST', {
          url,
          data
        }).then((res) => {
          const { incomeList, payList, totalIncome, totalPay} = res.data;
          this.incomeList = incomeList;
          this.payList = payList;
          this.totalIncome = totalIncome;
          this.totalPay = totalPay;
          console.log('length',payList.length);
        }).catch((e) => {
          console.log(e);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './index.scss'
</style>
