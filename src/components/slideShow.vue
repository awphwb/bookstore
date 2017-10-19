<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <img :src="slides[nowIndex].src">
      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <li @click="gotoImg(prevIndex)"><</li>
      <li v-for="(item,index) in slides" @click="gotoImg(index)">{{ index + 1 }}</li>
      <li @click="gotoImg(nextIndex)">></li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 1000
      }
    },
    data () {
      return {
        nowIndex: 0
      }
    },
    computed: {
      prevIndex () {
        if (this.nowIndex === 0 ){
          return this.slides.length - 1
        }else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.slides.length -1 ){
          return 0
        }else {
          return this.nowIndex + 1
        }
      },
    },
    methods: {
      gotoImg (index) {
        this.nowIndex = index
      },
      runInv () {
        this.invId = setInterval(() => {
          this.nowIndex = this.nextIndex
        }, this.inv)
      },
      clearInv () {
        clearInterval(this.invId)
      }
    },
    mounted () {
      this.runInv();
    }
  }
</script>

<style scoped>
  .slide-show {
    position: relative;
    width: 900px;
    height: 500px;
    margin: 15px 0;
    background: red;
    overflow: hidden;
  }
  .slide-show h2 {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    color: #fff;
    background: #000;
    opacity: 0.5;
    padding-left: 15px;
    line-height: 30px;
  }
  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  .slide-pages li {
    color: #fff;
    display: inline-block;
    padding: 0 7px;
    cursor: pointer;
  }
</style>
