<template>
  <div>
      <div class='buyerinfo'>
          <img :src="userlogo" alt="">
          <span>hello</span><span>{{buyername}}</span>
      </div>
      <div class='orders'>
        <p>订单</p>
        <table class="table table-bordered">
            <tr>
                <th>订单详情</th>
                <th>备注信息</th>
                <th>收货地址</th>
                <th>下单时间</th>
                <th>支付金额</th>
            </tr>
            <tr v-for='(order,index) in orders' :key='index' class='order'>
                <td>{{order.details}}</td>
                <td>{{order.note}}</td>
                <td>{{order.position}}</td>
                <td>{{order.time}}</td>
                <td>{{order.money}}</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personpage-orders',
  data () {
    return {
      orders: [{ details: 1111, note: '2222qqqqqqqqqqqqqq', position: 333, time: 4444, money: 555 },
        { details: 1111, note: 222, position: 333, time: 4444, money: 555 }],
      buyername: 'joker',
      userlogo: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro320-220.png'
    }
  }
}
</script>

<style scoped>
.table-bordered th {
  width: 200px;
}
.table {
  width: 940px;
}
</style>
