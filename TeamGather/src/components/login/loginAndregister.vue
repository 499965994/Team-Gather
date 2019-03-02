<template>
  <div id="loginAndregister">
      <div class="logo">
          <a href="#"><img src="https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png" alt=""></a>
      </div>
      <div class="C-login">
          <Loginform class="window"/>
      </div>
  </div>
</template>

<script>
import Loginform from './loginform.vue'
export default {
  name: 'loginAndregister',
  components: {
    Loginform
  }
}
</script>

<style scoped>
.logo {
    width: 100%;
    height: 100px;
    position: relative;
}
.logo img {
    margin-left: 170px;
}
.C-login {
    width: 100%;
    height: 365px;
    background-image: url('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/553c5e503fc83138c76bd7c17c1434db.jpeg');
    background-position-x: -540px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

</style>
