<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="book in bookList">
          <h3>{{ book.title }}</h3>
          <ul>
            <li v-for="item in book.list">
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.isNew" class="new-tag">NEW</span>
            </li>
          </ul>
          <div v-if="!book.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block last-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newList">
            <a :href="item.url">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides" :inv="invTime"></slide-show>
      <div class="index-board-list">
        <div
          class="index-board-item"
          v-for="(item,index) in newBookList"
          :class="[{'line-last' : index % 2 !==0 }, 'index-board-item'+ index]">
          <div class="index-board-item-inner" >
            <h2>{{ item.name }}</h2>
            <p>{{ item.bookInfo }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{ path: 'books/' + item.id }">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import slideShow from '../components/slideShow'
  export default {
    components: {
      slideShow
    },
    created: function () {
      this.$http.get('api/newList')
        .then((res) => {
          this.newList = res.data
        },(err) => {
          console.log(err)
        })
    },
    data () {
      return {
        invTime: 2000,
        slides: [
          {
            src: require('../assets/slideShow/pic1.jpg'),
            title: '传习录',
            href: 'books/cxl'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            title: '天龙八部',
            href: 'books/tlbb'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            title: '资本论',
            href: 'books/zbl'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            title: '动物庄园',
            href: 'books/dwzy'
          }
        ],
        newBookList: [
          {
            name: '《传习录》',
            bookInfo: '王阳明的心学智慧',
            id: 'cxl'
          },
          {
            name: '《天龙八部》',
            bookInfo: '金庸武侠经典',
            id: 'tlbb'
          },
          {
            name: '《资本论》',
            bookInfo: '马克思主义百科全书',
            id: 'zbl'
          },
          {
            name: '《动物庄园》',
            bookInfo: '反乌托邦幽默故事',
            id: 'dwzy'
          },
        ],
        newList: [],
        bookList: {
          oldBook: {
            title: '古籍',
            list: [
              {
                name: '经',
                url: '#'
              },
              {
                name: '史',
                url: '#',
                isNew: true
              },
              {
                name: '子',
                url: '#'
              },
              {
                name: '集',
                url: '#'
              }
            ]
          },
          newBook: {
            title: '今书',
            last: true,
            list: [
              {
                name: '言情',
                url: '#'
              },
              {
                name: '武侠',
                url: '#'
              },
              {
                name: '科技',
                url: '#'
              },
              {
                name: '搞笑',
                url: '#',
                isNew: true
              }
            ]
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    width: 300px;
  }
  .index-right {
    float: right;
    width: 900px;
  }
  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }
  .index-left-block h2 {
    background: #FF2832;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .new-tag {
    background: red;
    color: #fff;
  }
  .last-news {
    min-height: 520px;
  }
  .index-board-item {
    width: 400px;
    background: #fff;
    float: left;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 1px #ddd;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }
  .index-board-item0 .index-board-item-inner{
    background: url("../assets/images/cxl.jpg") no-repeat;
  }
  .index-board-item1 .index-board-item-inner{
    background: url("../assets/images/tlbb.jpg") no-repeat;
  }
  .index-board-item2 .index-board-item-inner{
    background: url("../assets/images/zbl.jpg") no-repeat;
  }
  .index-board-item3 .index-board-item-inner{
    background: url("../assets/images/dwzy.png") no-repeat;
  }
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .index-board-button {
    margin-top: 20px;
  }
</style>
