<template>
  <div class="sub-router">
    <a class="mint-cell">
      <div class="mint-cell-left"></div>
      <div class="mint-cell-wrapper">
        <div class="mint-cell-title"> <span class="mint-cell-text">选择类型</span> </div>
        <label class="mint-radiolist-label"><span class="mint-radio">
              <input v-model="type" type="radio" checked class="mint-radio-input" value="0" name="income"> 
              <span class="mint-radio-core"></span></span>
              <span class="mint-radio-label">支出</span>
            </label>
        <label class="mint-radiolist-label"><span class="mint-radio">
              <input v-model="type" type="radio" class="mint-radio-input" value="1" name="income"> 
              <span class="mint-radio-core"></span></span>
              <span class="mint-radio-label">收入</span>
            </label>
      </div>
      <div class="mint-cell-right"></div>
    </a>
    <mt-datetime-picker ref="picker" type="date" v-model="date" @confirm="handleChange">
    </mt-datetime-picker>
    <a class="mint-cell" @click="openPicker">
      <div class="mint-cell-left"></div>
      <div class="mint-cell-wrapper">
        <div class="mint-cell-title"> <span class="mint-cell-text">日期</span> </div>
        <div class="mint-cell-value" style="align-items: center;">
          {{date2}}<span class="tip">(点击修改)</span>
        </div>
      </div>
      <div class="mint-cell-right"></div>
    </a>
    <mt-field v-model="amount" label="金额" placeholder="请输入金额" type="number"></mt-field>
    <mt-field v-model="remark" label="备注" placeholder="请输入备注" type="url"></mt-field>
    <p class="submit">
      <mt-button @click="submit" type="primary">增加</mt-button>
    </p>
  </div>
</template>

<script>
  import filter from '@/utils/filters'
  import {
    Toast
  } from 'mint-ui'
  import {
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        type: '0',
        amount: '',
        remark: '',
        date: new Date(),
        date2: filter.dateFormat(new Date())
      }
    },
    watch: {
      date(value) {
        this.date2 = filter.dateFormat(value);
      }
    },
    created() {
      this.UPDATE_TITLE('新增记录')
    },
    mounted() {
  
    },
    computed: {
      ...mapActions([
        'POST'
      ])
    },
    methods: {
      ...mapMutations([
        'UPDATE_TITLE',
        // 新增记录
        'HASNEW'
      ]),
      openPicker(picker) {
        this.$refs['picker'].open();
      },
      handleChange(value) {
        const date = filter.dateFormat(value);
        this.date = date;
      },
      submit() {
        const url = '/finace/add';
        const data = {
          type: this.type,
          amount: this.amount,
          remark: this.remark,
          date: this.date2
        };
        this.$store.dispatch('POST', {
          url,
          data
        }).then((res) => {
          Toast('新增记录成功');
          this.HASNEW(true);
        }).catch((e) => {
          Toast('新增记录失败');
        })
      }
    }
  
  }
</script>



<style lang="scss" scoped>
  .submit {
    display: flex;
    margin-top: 40px;
    justify-content: center;
    button {
      width: 90%;
    }
  }
  
  .mint-cell-title {
    width: 105px;
    flex: none;
  }
  
  .tip {
    position: relative;
    font-size: 12px;
    margin-left: 10px;
  }
  
  .mint-radiolist-label {
    padding: 0;
    margin-right: 12px;
  }
  
  .mint-radio-label {
    margin: 0;
  }
  
  .mint-radio-core {
    border-radius: 30%;
  }
</style>

