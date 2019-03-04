<template>
	<div><dnt></dnt>
	<div id="container">
		<lunbo></lunbo>
		<div class="hot">
			<!-- 轮播下侧新闻 -->
			<ul class="rightclass">
				<h1 class="hotnews" @click="page(newsdata[0].uniquekey)">
					<a>{{newsdata[0].title}}</a></h1>
				<li v-for="(item,index) in newsdata" v-if="0<index&&index<9"  @click="page(item.uniquekey)">
					<rightnews :rightnews="item"></rightnews>
				</li>
			</ul>
			<ul class="rightclass">
				<h1 class="hotnews" @click="page(newsdata[9].uniquekey)">
					<a>{{newsdata[9].title}}</a></h1>
				<li v-for="(item,index) in newsdata" v-if="9<index&&index<18" @click="page(item.uniquekey)">
					<rightnews :rightnews="item"></rightnews>
				</li>
			</ul>
			<div class="pictext">
				<h3 style="color: black; margin: 0px;">百家专栏</h3>
				<div v-for="(item,index) in newsdata" v-if="10<index&&index<15" @click="page(item.uniquekey)">
					<pictext :picitem="item"></pictext>
				</div>
			</div>
		</div>
		<!-- NBA新闻模块 -->
		<div class="nbavideo">
			<div class="hot nba">
				<h3 style="color: black; margin: 0px;">NBA🏀COM</h3>
				<hr style="background-color: #C7C7C7; width: 100%;height: 2px; border: none; margin-top: -2px;" />
				<ul class="rightclass">
					<h1 class="hotnews" @click="page(newsdata[25].uniquekey)">
						<a>{{newsdata[25].title}}</a></h1>
					<li v-for="(item,index) in newsdata" v-if="25<index&&index<30" @click="page(item.uniquekey)">
						<rightnews :rightnews="item"></rightnews>
					</li>
				</ul>
				<ul class="rightclass">
					<h1 class="hotnews" @click="page(newsdata[10].uniquekey)">
						<a>{{newsdata[10].title}}</a></h1>
					<li v-for="(item,index) in newsdata" v-if="20<index&&index<25" @click="page(item.uniquekey)">
						<rightnews :rightnews="item"></rightnews>
					</li>
				</ul>
			</div>
			<div class="video">
				<h3 style="color: black; margin: 0px;">视频专栏</h3>
				<hr style="background-color: #C7C7C7; width: 100%;height: 2px; border: none; margin-top: -2px;" />
				<div class="videoitem">
					<video src="http://f10.v1.cn/site/15568502.mp4.f40.mp4" muted="muted" autoplay="autoplay" loop="loop"></video>
					<a>
						<h3>流浪汉捡到2000元钱包 分文未动上交警察</h3>
					</a>
				</div>
				<div class="videoitem">
					<video src="http://f10.v1.cn/site/15568700.mp4.f40.mp4" muted="muted" autoplay="autoplay" loop="loop"></video>
					<a>
						<h3>男子将打火机扔进火锅 200℃热油爆炸溅出</h3>
					</a>
				</div>
				<div class="videoitem">
					<video src="http://f10.v1.cn/site/15563685.mp4.f40.mp4" muted="muted" autoplay="autoplay" loop="loop"></video>
					<a>
						<h3>男孩当街被泼胶水 警方：肇事者有智力障碍</h3>
					</a>
				</div>
				<div class="videoitem">
					<video src="http://f10.v1.cn/site/15563656.mp4.f40.mp4" muted="muted" autoplay="autoplay" loop="loop"></video>
					<a>
						<h3>情绪激动 女乘客拿应急锤猛砸动车玻璃</h3>
					</a>
				</div>
				<div class="videoitem">
					<video src="http://f10.v1.cn/site/15569197.mp4.f40.mp4" muted="muted" autoplay="autoplay" loop="loop"></video>
					<a>
						<h3>男子酒后免费帮人代驾 路遇例行检查被查</h3>
					</a>
				</div>
				<div class="videoitem">
					<video src="http://f10.v1.cn/site/15568848.mp4.f40.mp4" muted="muted" autoplay="autoplay" loop="loop"></video>
					<a>
						<h3>关门抄不了近路 居民向隔壁小区扔垃圾发泄</h3>
					</a>
				</div>
			</div>
		</div>
		<!-- 国际足球 -->
		<div class="foot">
			<div class="football">
				<h3 style="color: black; margin: 0px;">国际⚽足球</h3>
				<hr style="background-color: #C7C7C7; width: 100%;height: 2px; border: none; margin-top: -2px;" />
				<ul>
					<h3 @click="page(newsdata[5].uniquekey)">
						<a>{{newsdata[5].title}}</a></h3>
					<li v-for="(item,index) in newsdata" v-if="5<index&&index<12" @click="page(item.uniquekey)">
						<rightnews :rightnews="item"></rightnews>
					</li>
				</ul>
				<ul>
					<h3 @click="page(newsdata[15].uniquekey)">
						<a>{{newsdata[15].title}}</a></h3>
					<li v-for="(item,index) in newsdata" v-if="15<index&&index<22" @click="page(item.uniquekey)">
						<rightnews :rightnews="item"></rightnews>
					</li>
				</ul>
			</div>
			<div class="footimg">
				<h3 style="color: black; margin: 0px;">百家专栏</h3>
				<hr style="background-color: #C7C7C7; width: 100%;height: 2px; border: none; margin-top: -2px;" />
				<div v-for="(item,index) in newsdata" v-if="20<index&&index<22" @click="page(item.uniquekey)">
					<pictext :picitem="item"></pictext>
				</div>
				<ul>
					<li v-for="(item,index) in newsdata" v-if="20<index&&index<30" @click="page(item.uniquekey)"><a>{{item.title}}</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div><foot></foot></div>
	</div>
</template>

<script>
	import dnt from "../components/public/dht.vue"
	import foot from "../components/public/foot.vue"
	import tiyudata from "../../data/tiyudata.js"
	import lunbo from "../components/tiyu/lunbo.vue"
	import rightnews from "../components/tiyu/rightnews.vue"
	import pictext from "../components/tiyu/pictext.vue"
	import "../components/tiyu/tiyu.css"

	export default {
		data() {
			return {
				newsdata:tiyudata.result.data
			};
		},
		methods:{
			page:function(id){
				console.log(id)
				// 发送ajax请求去服务器请求详情页数据
			}
		},
		components:{
			lunbo,rightnews,pictext,dnt,foot
		}
	}
</script>

<style>

</style>
