<template>
  <div class="books-detail">
    <div class="books-detail-intro">
      <h2>传习录</h2>
      <p>尘封400余年原貌重现的初始定本！阳明心学正宗读本！</p>
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
      <p>明隆庆六年初刻版《传习录》是后世《传习录》的母本，因未经后人妄改，拥有极高的权威性和珍藏价值，被已故哲学家陈荣捷先生称为“*完备而可靠”的版本，是阳明心学的*读本。
        《传习录》是明代哲学宗师王阳明的论学语录和书信集，集中体现了阳明心学的核心观点，是了解阳明心学*经典的入门必读书。
        ◆心即理：*的行为准则其实就在我们每个人心中，遇到难题时与其劳神费心，不如去倾听内心*原本的声音。
        ◆致良知：每个人都有与生俱来的道德感和判断力，只不过被后天的习气和私欲所蒙蔽了；若能恢复并遵循本然的良知，就不难获得内心的安宁。
        ◆知行合一：人的认知和实践是不可分的，只有做到两者统一，才能避免盲目行事或空谈不实之病，一切困难也会迎刃而解。
        正是因为阳明心学蕴含着“宁静于内，无敌于外”的至上智慧，晚清中兴*名臣曾国藩、终结中国两千年帝制的孙中山、戊戌变法及新文化运动的领袖梁启超、推动日本明治维新的功臣伊藤博文等人，均对《传习录》推崇备至。已故国学大师钱穆更是将该书列为“中国人所人人必读的书”之一。</p>
      <h3>作者简介</h3>
      <p>王阳明（1472—1529），名守仁，字伯安，别号阳明，浙江绍兴府余姚县（今浙江省余姚市）人，明代著名的思想家、文学家、哲学家和军事家，陆王心学之集大成者，官至南京兵部尚书、都察院左都御史，因平定宸濠之乱有功而被封为新建伯，隆庆年间追赠新建侯，谥文成。
        王阳明是中国历史上为数不多的集立德、立功、立言“三不朽”于一身之人，其学术思想更是由中国传至日本、朝鲜半岛以及东南亚，对后世影响巨大。</p>
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
            price: 10
          },
          {
            label: '精装版',
            value: 1,
            price: 20
          },
          {
            label: '典藏版',
            value: 2,
            price: 40
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
