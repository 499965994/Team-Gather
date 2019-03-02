<template>
  <div class='C-personpage-info'>
    <span>个人资料</span>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3" :placeholder="username">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">个性签名</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" :placeholder="sign">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-primary" @click.prevent="givepersoninfo">确定</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script scoped>
export default {
  name: 'personpage-info',
  data () {
    return {
      username: 'joker',
      sign: '今天又是美好的一天'
    }
  },
  methods: {
    givepersoninfo () {
      console.log(666)
    }
  }
}
</script>

<style>
.C-personpage-info {
    height: 200px;
}
</style>
