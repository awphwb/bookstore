<template>
  <div class="books-detail">
    <div class="books-detail-intro">
      <h2>动物庄园</h2>
      <p>先知、圣徒的传世经典，以敏锐的洞察力记录着我们的时代，致力于维护人类自由和尊严，揭露、鞭笞专制和极权主义。</p>
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
      <p>本书讲述了动物反抗人类的革命及其蜕变：曼娜庄园的动物不堪人类主人的压迫，于是赶走了庄园主，将庄园更名为“动物庄园”，并制定了“七诫”；但不久，动物的领导层内部发生了分裂，两头领头的猪为了权力而互相倾轧，胜利者一方*终成为了独裁者。被控制舆论的动物们稍有不满，便会招致血腥的镇压，“七诫”也随之遭到篡改。*终，庄园再次沦为不平等的专制社会。</p>
      <h3>作者简介</h3>
      <p>乔治·奥威尔 1903—1950
        英国伟大的人道主义作家、新闻记者、社会评论家。他一生颠沛流离，但始终以敏锐的洞察力和犀利的文笔记录着他所生活的时代，致力于维护人类自由和尊严，揭露、鞭笞专制和极权主义，并提出了超越时代的预言，因此他被尊称为“一代人的冷峻良知”。</p>
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
            price: 20
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
