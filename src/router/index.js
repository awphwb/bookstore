import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/pages/index'
import booksPage from '@/pages/books'
import bookListPage from '@/pages/bookList'
import booksCXLPage from '@/pages/books/cxl'
import booksDWZYPage from '@/pages/books/dwzy'
import booksTLBBPage from '@/pages/books/tlbb'
import booksZBLPage from '@/pages/books/zbl'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: indexPage
    },
    {
      path: '/bookList',
      component: bookListPage
    },
    {
      path:'/books',
      component: booksPage,
      redirect: '/books/cxl',
      children: [
        {
          path: 'cxl',
          component: booksCXLPage
        },
        {
          path: 'tlbb',
          component: booksTLBBPage
        },
        {
          path: 'zbl',
          component: booksZBLPage
        },
        {
          path: 'dwzy',
          component: booksDWZYPage
        }
      ]
    }
  ]
})
