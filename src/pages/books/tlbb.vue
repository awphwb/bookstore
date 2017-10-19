<template>
  <div class="books-detail">
    <div class="books-detail-intro">
      <h2>天龙八部</h2>
      <p>生老病死、求不得、爱别离、怨憎会是苦，都道是有情皆孽，无人不冤。公子王孙、豪情侠客、如水佳人，叹一句万般皆是命，半点不由人。</p>
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
      <p>　　《天龙八部》由金庸编著。
        　　《天龙八部》讲述了：　　
        　　北宋年间，外族纷纷觊觎大宋国土，形成汉、胡对立的局面。丐帮帮主乔峰因拒绝副帮主妻康敏之爱遭报复指为契丹人后裔而受尽中原武林人士唾弃。峰为平反遂四出追查身世，期间认识了大理世子段誉及虚竹和尚，并结拜为兄弟。
        峰追寻身世时屡遭奸人所害，含冤莫白，更错杀红颜知已阿朱，后为救朱妹阿紫寻医至大辽，辗转成为大辽国南院大王，但与中原关系则更趋恶劣。
        　　誉为人豁达开朗，对貌若天仙的王语嫣一见倾心，可惜嫣只钟情表哥慕容复，令三人陷入一段纠缠不清的苦恋。
        竹天性纯良，宅心仁厚，深得高人指点，武功高强，后被选为西夏驸马。
        　　誉、峰、竹在汉胡相争的时势下，竟在异域拥有举足轻重的地位，究竟三人会如何了断江湖及感情上的恩恩怨怨呢？</p>
      <h3>作者简介</h3>
      <p>金庸，（1924年2月6日—），香港“大紫荆勋贤”。原名查良镛，江西省婺源县人，出生于浙江海宁，当代著名作家、新闻学家、企业家、社会活动家，《香港基本法》主要起草人之一。金庸是新派武侠小说最杰出的代表作家，被普遍誉为武侠小说作家的“泰山北斗”，更有金迷们尊称其为“金大侠”或“查大侠”。1937年，金庸考入浙江一流的杭州高中，离开家乡海宁。1939年金庸15岁时曾经和同学一起编写了一本指导学生升初中的参考书《给投考初中者》，畅销内地，这是此类书籍在中国第一次出版，也是金庸出版的第一本书。1941年日军攻到浙江，金庸进入联合高中，那时他17岁，临毕业时因为写讽刺黑板报《阿丽丝漫游记》被开除。另一说是写情书.1944年考入重庆国立政治大学外文系，因对国民党职业学生不满投诉被勒令退学，一度进入中央图书馆工作，后转入苏州东吴大学（今苏州大学）学习国际法。抗战胜利后回杭州进《东南日报》做记者，1948年在数千人参加的考试中脱颖而出，进入《大公报》，做编辑和收听英语国际电讯广播当翻译。不久《大公报》香港版复刊，金庸南下到香港。建国不久，金庸为了实现外交家的理想来到北京，但由于种种原因而失望地回到香港，从而开始了武侠小说的创作。</p>
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
