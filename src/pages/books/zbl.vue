<template>
  <div class="books-detail">
    <div class="books-detail-intro">
      <h2>资本论</h2>
      <p>全世界工人阶级的圣经！</p>
    </div>
    <div class="books-detail-form">
      <div class="books-detail-line">
        <div class="books-detail-line-left">
          购买数量：
        </div>
        <div class="books-detail-line-right">
          <v-counter @on-change="onParamChange('buyNum',$event)"></v-counter>
        </div>
      </div>
      <div class="books-detail-line">
        <div class="books-detail-line-left">
          产品类型：
        </div>
        <div class="books-detail-line-right">
          <v-selection :selections="buyTypes" @on-change="onParamChange('buyType',$event)"></v-selection>
        </div>
      </div>
      <div class="books-detail-line">
        <div class="books-detail-line-left">
          总价：
        </div>
        <div class="books-detail-line-right">
          {{ price }}元
        </div>
      </div>
      <div class="books-detail-line">
        <div class="books-detail-line-left">
        </div>
        <div class="books-detail-line-right">
          <div class="button" @click="showPayDialog">立即购买</div>
        </div>
      </div>
    </div>
    <div class="books-detail-des">
      <h3>内容简介</h3>
      <p>众所周知，《资本论》是马克思倾其毕生心血写成的一部科学著作。它被奉为工人阶级革命的“圣经”，是一部融哲学、政治经济学、科学社会主义为一体，博大精深的马克思主义百科全书，是人类思想史上不配的理论丰碑。它揭示了现代社会的经济运动规律，对于我们认识资本主义经济和研究社会主义经济提供了基本原理。《资本论》这部巨著，一至三卷有190多万字。</p>
      <h3>作者简介</h3>
      <p>马克思，19世纪德国哲学家、社会学家、历史学家、经济学家，全世界无产阶级和劳动人民的伟大导师。 马克思对历史唯物主义和剩余价值学说的两大发现，使得社会主义从空想变成科学。其主要著作有：《黑格尔法哲学批判》、《政治经济学批判》、《德意志意识形态》</p>
    </div>
    <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
      <table class="buy-dialog-table">
        <tr>
          <th>购买数量</th>
          <th>产品类型</th>
          <th>&nbsp;&nbsp;总价&nbsp;&nbsp;</th>
        </tr>
        <tr>
          <td>{{ buyNum }}</td>
          <td>{{ buyType.label }}</td>
          <td>{{ price }}</td>
        </tr>
      </table>
      <h3 class="buy-dialog-title">请选择银行</h3>
      <div class="buy-dialog-btn button" @click="showOKDialog">
        确认购买
      </div>
    </my-dialog>
    <my-dialog :is-show="isShowOKDialog" @on-close="hideOKDialog">支付成功</my-dialog>
  </div>
</template>

<script>
  import VCounter from '../../components/counter.vue'
  import VSelection from '../../components/selection.vue'
  import myDialog from '../../components/myDialog.vue'
  export default {
    components: {
      VCounter,
      VSelection,
      myDialog
    },
    data () {
      return {
        isShowPayDialog: false,
        isShowOKDialog: false,
        buyNum: 1,
        buyType: {},
        price: 0,
        buyTypes: [
          {
            label: '普通版',
            value: 0,
            price: 15
          },
          {
            label: '精装版',
            value: 1,
            price: 25
          },
          {
            label: '典藏版',
            value: 2,
            price: 50
          }
        ]
      }
    },
    methods: {
      onParamChange (attr, val) {
        this[attr] = val
        this.getPrice()
      },
      getPrice () {
        this.price = this.buyNum * this.buyType.price
      },
      showPayDialog () {
        this.isShowPayDialog = true
      },
      hidePayDialog () {
        this.isShowPayDialog = false
      },
      showOKDialog () {
        this.isShowPayDialog = false
        this.isShowOKDialog = true
      },
      hideOKDialog () {
        this.isShowOKDialog = false
        this.$router.push({path: '/bookList'})
      }
    }
  }
</script>

<style scoped>
  .buy-dialog-title {
    font-size: 16px;
    font-weight: bold;
  }
  .buy-dialog-btn {
    margin-top: 20px;
  }
  .buy-dialog-table {
    width: 100%;
    margin-bottom: 20px;
  }
  .buy-dialog-table td,
  .buy-dialog-table th{
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
  }
  .buy-dialog-table th {
    background: #FF2832;
    color: #fff;
    border: 1px solid #FF2832;
  }
</style>
