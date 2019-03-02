<template>
  <div class="C-personpage">
    <Leftnav @showorno="fn" @showorno2="fn2"/>
    <div class="C-show">
      <Orders v-show="forshow==1"/>
      <Personpageinfo v-show="forshow==2"/>
    </div>
  </div>
</template>

<script>
import Leftnav from './personleftnav'
import Orders from './personpage-orders'
import Personpageinfo from './personpage-info'
export default {
  name: 'personpage',
  components: {
    Leftnav, Orders, Personpageinfo
  },
  data () {
    return {
      forshow: 1
    }
  },
  methods: {
    fn (x) {
      this.forshow = x
    },
    fn2 (y) {
      this.forshow = y
      console.log(666)
    }
  }
}
</script>

<style scoped>
.C-personpage {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
