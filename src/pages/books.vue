<template>
  <div class="books-wrap">
    <div class="books-left">
      <div class="books-board">
        <img :src="booksIcon">
        <ul>
          <router-link v-for="item in books" :to="{ path: item.path }" tag="li" active-class="active">
            {{ item.name }}
          </router-link>
        </ul>
      </div>
    </div>
    <div class="books-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        books: [
          {
            name: '传习录',
            path: 'cxl',
            active: false
          },
          {
            name: '天龙八部',
            path: 'tlbb',
            active: false
          },
          {
            name: '资本论',
            path: 'zbl',
            active: false
          },
          {
            name: '动物庄园',
            path: 'dwzy',
            active: false
          }
        ],
        imgMap: {
          '/books/cxl': require('../assets/images/cxl.jpg'),
          '/books/tlbb': require('../assets/images/tlbb.jpg'),
          '/books/zbl': require('../assets/images/zbl.jpg'),
          '/books/dwzy': require('../assets/images/dwzy.png'),
        }
      }
    },
    computed: {
      booksIcon () {
        return this.imgMap[this.$route.path]
      }
    }
  }
</script>

<style>
  .books-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
  }
  .books-left {
    float: left;
    width: 200px;
    text-align: center;
  }
  .books-right {
    float: left;
    width: 980px;
    margin-left: 20px;
  }
  .books-board {
    background: #fff;
    padding: 20px 0;
  }
  .books-board ul {
    margin-top: 20px;
  }
  .books-board li {
    text-align: left;
    padding: 10px 15px;
    cursor: pointer;
  }
  .books-board li.active,
  .books-board li:hover{
    background: #FF2832;
    color: #fff;
  }
  .books-detail {
    background: #fff;
  }
  .books-detail-intro h2 {
    font-size: 20px;
    padding: 20px;
  }
  .books-detail-intro p {
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
  }
  .books-detail-form {
    padding: 30px 20px;
    font-size: 14px;
  }
  .books-detail-line {
    clear: both;
    padding-bottom: 20px;
  }
  .books-detail-line-left {
    display: inline-block;
    width: 100px;
  }
  .books-detail-line-right {
    display: inline-block;
    width: 75%;
  }
  .books-detail-des {
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
  }
  .books-detail-des p {
    line-height: 1.6;
  }
  .books-detail-des h2 {
    font-size: 20px;
    padding-bottom: 15px;
  }
  .books-detail-des h3 {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
  }
  .books-detail-des li {
    padding: 5px 0;
  }
  .books-detail-table {
    width: 100%;
    margin-top: 20px;
  }
  .books-detail-table th {
    background: #FF2832;
    color: #fff;
  }
  .books-detail-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
  }
</style>
