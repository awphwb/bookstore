<template>
  <div class="dialog-warp">
    <div class="dialog-cover" v-if="isShow" @click="closeMyself"></div>
    <div class="dialog-content" v-if="isShow">
      <p class="dialog-close" @click="closeMyself">X</p>
      <slot>empty</slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeMyself () {
        this.$emit('on-close')
      }
    }
  }
</script>

<style scoped>
  .dialog-cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.3;
    z-index: 5;
  }
  .dialog-content {
    position: fixed;
    width: 50%;
    max-height: 50%;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    background: #fff;
    border: 1px solid #000;
    z-index: 10;
    padding: 2%;
  }
  .dialog-close {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
  }
</style>
