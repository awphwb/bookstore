<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path:'/'}">
          <img src="./assets/logo.png" class="head-logo">
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li v-if="username === ''" @click="logClick">登录</li>
            <router-link :to="{path:'/bookList'}" tag="li" v-if="username !== ''">{{ username }}</router-link>
            <li class="nav-pile">|</li>
            <li v-if="username === ''" @click="regClick">注册</li>
            <li v-if="username !== ''" @click="quitClick">退出</li>
            <li class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>© 2017 fishenal MIT</p>
    </div>
    <my-dialog :isShow="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>书是人类用来纪录一切成就的主要工具，也是人类交融感情，取得知识，传承经验的重要媒介，对人类文明的开展，贡献非常大。
        一种记录、分析、总结、组织、讨论及解释信息的、有插图或无插图的、硬抄或平装的、加套或不加套的，包含有前言、介绍、目录表、索引的用以增长知识、加深理解、提升并教育人类大脑的装置，该装置需要视觉、有触碰的感官形式存在并使用。</p>
    </my-dialog>
    <my-dialog :isShow="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @haslogin="onSuccessLogin"></log-form>
    </my-dialog>
    <my-dialog :isShow="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog>
  </div>
</template>

<script>
  import myDialog from './components/myDialog.vue'
  import logForm from './components/logForm.vue'
  import regForm from './components/regForm.vue'
  export default {
    components: {
      myDialog,
      logForm,
      regForm
    },
    data () {
      return {
        isShowAboutDialog: false,
        isShowLogDialog: false,
        isShowRegDialog: false,
        username: ''
      }
    },
    methods: {
      aboutClick () {
        this.isShowAboutDialog = true
      },
      logClick () {
        this.isShowLogDialog = true
      },
      regClick () {
        this.isShowRegDialog = true
      },
      closeDialog (dialog) {
        this[dialog] = false
      },
      onSuccessLogin (data) {
        this.closeDialog('isShowLogDialog')
        this.username = data
      },
      quitClick () {
        this.username = ''
        this.$router.push({path: '/'})
      }
    }
  }
</script>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }
  .app-head {
    width: 100%;
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
  }
  .app-head-inner {
    width: 1200px;
    margin: 0 auto;
  }
  .head-logo {
    float: left;
    width: 50px;
    margin-top: 20px;
  }
  .head-nav {
    float: right;
  }
  .head-nav li{
    cursor: pointer;
    float: left;
  }
  .nav-pile {
    padding: 0 10px;
  }
  .app-foot {
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    margin-top: 30px;
    background: #e3e4e8;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }
  .button {
    background: #FF2832;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .dialog-form-line {
    padding: 15px 0;
  }
  .dialog-form-label {
    display: inline-block;
    width: 100px;
    font-size: 16px;
  }
  .dialog-form-input {
    display: inline-block;
  }
  .dialog-form-input input{
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    border: 1px solid #ccc;
    vertical-align: middle;
  }
  .dialog-form-btn {
    padding-left: 105px;
  }
  .dialog-form-errorText{
    padding-top: 20px;
    color: red;
  }
  .dialog-form-error {
    color: red;
    padding-left: 15px;
  }
</style>
