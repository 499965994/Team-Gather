<template>
  <div style="width: 100%; background-color:#F56C6C" class="dht-C">
    <img
      src="../../assets/xwlogo.png"
      style="height: 60px;width:95px;position: absolute;left: 42px;top: 0px;">
    <el-menu
      mode="horizontal"
      background-color="#F56C6C"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="border-bottom: none;margin: 0 auto;width: 1200px;"
    >
      <el-menu-item index="1">头条</el-menu-item>
      <el-menu-item index="2">社会</el-menu-item>
      <el-menu-item index="3">国内</el-menu-item>
      <el-menu-item index="4">国际</el-menu-item>
      <el-menu-item index="5">娱乐</el-menu-item>
      <el-menu-item index="6">体育</el-menu-item>
      <el-menu-item index="7">军事</el-menu-item>
      <el-menu-item index="8">科技</el-menu-item>
      <el-menu-item index="9">商城</el-menu-item>
    </el-menu>
  </div>
  <!-- <div class='dht-C'>
		<div classs>
			
		</div>
  </div>-->
</template>

<script>
export default {
  name: "dht",
}
// 	export default {
// 		name:"dht",
// 		props:{
// 			adswtushudata:{
// 				type:,
// 				require:true
// 			}
// 		}
// 		data(){
// 			return{
// 				
// 			};
// 		}
// 	}
</script>

<style scoped>
.dht-C {
  margin-bottom: 20px;
}
</style>
