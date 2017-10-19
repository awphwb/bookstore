<template>
  <div class="dialog-form">
    <div class="dialog-form-line">
      <span class="dialog-form-label">用户名：</span>
      <div class="dialog-form-input">
        <input type="text" v-model="usernameModel" placeholder="用户名:admin"/>
      </div>
      <span class="dialog-form-error">{{ userErrors.errorText }}</span>
    </div>
    <div class="dialog-form-line">
      <span class="dialog-form-label">密码：</span>
      <div class="dialog-form-input">
        <input type="password" v-model="passwordModel" placeholder="密码:Abc123!"/>
      </div>
      <span class="dialog-form-error">{{ passwordErrors.errorText }}</span>
    </div>
    <div class="dialog-form-line">
      <div class="dialog-form-btn">
        <a class="button" @click="onLogin">登录</a>
      </div>
      <p class="dialog-form-errorText">{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: '',
        userFlag: false,
        passwordFlag: false
      }
    },
    computed: {
      userErrors () {
        let uPattern = /^[a-zA-Z0-9]{4,16}$/;
        let errorText,isError;
        if(!uPattern.test(this.usernameModel)) {
          errorText = '4到16位字母，数字'
          isError = true
        }else {
          errorText= ''
          isError = false
        }
        if(!this.userFlag) {
          errorText= ''
          this.userFlag = true
        }
          return {
          errorText,
          isError
        }
      },
      passwordErrors () {
        let pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        let errorText,isError;
        if(!pPattern.test(this.passwordModel)) {
          errorText = '最少6位，包括大写字母，小写字母，数字，特殊字符'
          isError = true
        }else {
          errorText= ''
          isError = false
        }
        if(!this.passwordFlag) {
          errorText= ''
          this.passwordFlag = true
        }
        return {
          errorText,
          isError
        }
      }
    },
    methods: {
      onLogin () {
        if(this.userErrors.isError || this.passwordErrors.isError){
          this.errorText = '登录信息未通过'
        }else {
          this.errorText = ''
          this.$http.get('api/login')
            .then((res) => {
              let userData = res.data.username;
              let passData = res.data.password;
              if(this.usernameModel === userData && this.passwordModel === passData){
                this.$emit('haslogin',userData)
              }else {
                this.errorText = '用户名或密码错误'
              }
            },(error) => {
              console.log(error)
            })
        }
      }
    }
  }
</script>

<style scoped>

</style>
