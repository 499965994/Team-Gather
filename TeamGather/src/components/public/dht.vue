<template>
  <div style="width: 100%; background-color:#F56C6C;display: flex;align-content: center;justify-content: center;" class="dht-C">
    <div style="width: 4%; display: flex;align-content: center;justify-content: center;"><img
      src="../../assets/xwlogo.png"
      style="height: 60px;width:60px;margin-right: 335px;"/></div>
    <el-menu
      mode="horizontal"
      background-color="#F56C6C"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="border-bottom: none;width: 1200px;"
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
