<template>
  <div class="book-wrap">
    <h3>您的书籍</h3>
    <div class="book-list-table">
      <table>
        <tr>
          <th v-for="head in tableHeads" :class="{active:head.active}">{{ head.label }}</th>
        </tr>
        <tr v-for="item in tableData">
          <td v-for="head in tableHeads">{{ item[head.key] }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableHeads: [
          {
            label: '订单号',
            key: 'bookId'
          },
          {
            label: '购买书籍',
            key: 'bookName'
          },
          {
            label: '产品类型',
            key: 'buyType'
          },
          {
            label: '数量',
            key: 'buyNum'
          },
          {
            label: '总价',
            key: 'amount'
          }
        ],
        tableData: []
      }
    },
    methods: {
      getList () {
        this.$http.get('api/getBookList')
          .then((res) => {
            this.tableData = res.data.list
          },(err) => {
            console.log(err)
          })
      }
    },
    mounted () {
      this.getList()
    }
  }
</script>

<style scoped>
  .book-wrap {
    width: 1200px;
    min-height: 800px;
    margin: 20px auto;
    overflow: hidden;
  }
  .book-wrap h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .book-list-table {
    margin-top: 20px;
  }
  .book-list-table table {
    width: 100%;
    background: #fff;
  }
  .book-list-table td,
  .book-list-table th {
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 10px 0;
  }
  .book-list-table th {
    background: #FF2832;
    color: #fff;
    border: 1px solid #FF2832;
    cursor: pointer;
  }
  .book-list-table th.active {
    background: #35495e;
  }
</style>
