<template>
  <div>
    <form class="C-form" v-if="flag==1">
      <div class="title">
        <span @click="forchange1">账号登陆</span>
        <span @click="forchange2">账号注册</span>
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control username"
          id="exampleInputEmail1"
          placeholder="账号"
          v-model="username"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control psw"
          id="exampleInputPassword1"
          placeholder="密码"
          v-model="psw"
        >
      </div>
      <button type="submit" class="btn btn-default forlogin" @click.prevent="login">登录</button>
    </form>
    <form class="C-form" v-if="flag==2">
      <div class="title">
        <span @click="forchange1">账号登陆</span>
        <span @click="forchange2">账号注册</span>
      </div>
      <div class="form-group">
        <input type="email" class="form-control username" id="exampleInputEmail1" placeholder="账号">
      </div>
      <div class="form-group">
        <input type="password" class="form-control psw" id="exampleInputPassword1" placeholder="密码">
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control psw"
          id="exampleInputPassword1"
          placeholder="手机号"
        >
      </div>
      <button type="submit" class="btn btn-default forlogin" @click.prevent="register">注册</button>
    </form>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
export default {
  name: 'lAndre',
  data () {
    return {
      flag: 1,
      username: '',
      psw: ''
    }
  },
  methods: {
    forchange1 () {
      this.flag = 1
    },
    forchange2 () {
      this.flag = 2
    },
    register () {
      let url = 'www.baidu.com'
      this.$http.post(url, {
        username: this.username,
        psw: this.psw
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },
    login () {

    }
  }
}
</script>

<style scoped>
.C-form {
  /* border: 1px solid #666; */
  width: 350px;
  margin-right: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
}
.title {
  margin-right: 20px;
  font-size: 24px;
  color: #2196f3;
}
.title:hover {
  cursor: pointer;
}
.psw {
  width: 280px;
}
.username {
  width: 280px;
}
.forlogin {
  background-color: #2196f3;
  display: block;
  margin: 0 auto;
}
</style>
