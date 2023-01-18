<template>
	<view class="index">
		<!-- 微信小程序的tab应该是没有生效的，这里自定义一个  -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="wx-nav">
			<view class="iconfont icon-fangdajing"></view>
			<text>京东</text>
			<view class="iconfont icon-xiaoxi"></view>
		</view>
		<!-- #endif -->
			<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="scrollViewIdx">
				<view
					class="scroll-item"
					v-for="(item, index) in topBar"
					:key="index"
					@tap="selectTab(index)"
					:id="'child'+index"
				>
					<text :class="curTabIdx == index ? 'f-active-color':'f-color'">{{item.name}}</text>
				</view>
			</scroll-view>
			
			<swiper
				@change="onTabChanged"
				:current="curTabIdx"
				:style="'height:'+contentHeight+'px'"
			>
				<swiper-item
					v-for="(item, index) in newTopBar"
					:key="index"
				>
				
		
				<view id="main-data">
					<block v-for="(v,k) in item.data" :key="k">
						<!-- {{v}} -->
						<IndexSwiper v-if="v.type === 'swiperList'" :dataList="v.data"></IndexSwiper>
						<Recommand v-if="v.type === 'recommendList'" :dataList="v.data"></Recommand>
						<Card cardTitle="猜你喜欢"></Card>
						<CommodityList v-if="v.type === 'comodityList'" :dataList="v.data"></CommodityList>
					</block>
				</view>
				
				</swiper-item>
			</swiper>
		<!-- 推荐模版 -->
		<!-- <IndexSwiper></IndexSwiper>
		<Recommand></Recommand>
		<Card cardTitle="猜你喜欢"></Card>
		<CommodityList></CommodityList> -->
		
		<!-- 其他模版 -->
		<!-- <Banner></Banner>
		<Icons></Icons>
		<Card cardTitle="热销爆品"></Card>
		<Hot></Hot>
		<Card cardTitle="推荐店铺"></Card>
		<Shop></Shop>
		<Card cardTitle="为您推荐"></Card>
		<CommodityList></CommodityList> -->
	</view>
</template>

<script>
	import IndexSwiper from "@/components/IndexSwiper.vue";
	import Recommand from "@/components/Recommand.vue"
	import Card from "@/components/Card.vue"
	import CommodityList from "@/components/CommodityList.vue";
	import Banner from "@/components/Banner.vue";
	import Icons from "@/components/Icons.vue";
	import Hot from "@/components/Hot.vue";
	import Shop from "@/components/Shop.vue";
	export default {
		data() {
			return {
				curTabIdx:0,
				scrollViewIdx:'child0',
				contentHeight:0,
				topBar:[
					// {name:"推荐",id:1},
					// {name:"运动户外",id:2},
					// {name:"服饰内衣",id:3},
					// {name:"鞋靴箱包",id:4},
					// {name:"美妆个护",id:5},
					// {name:"数码家具",id:6},
					// {name:"食品母婴",id:7},
					// {name:"萌宠生活",id:8},
				],
				newTopBar:{}
			}
		},
		components:{
			IndexSwiper,
			Recommand,
			Card,
			CommodityList,
			Banner,
			Icons,
			Hot,
			Shop
		},
		onLoad() {
			this.__init();
		},
		onReady(){
			uni.createSelectorQuery().select('#main-data').boundingClientRect(data=>{
				// this.contentHeight = data.height;
				this.contentHeight = 2000;
			}).exec();
		},
		methods: {
			__init(){
				uni.request({
					url:"http://192.168.1.4:3000/api/index_list/data",
					success:(res )=> {
 						let data = res.data.data;
						this.topBar = data.topBar;
						this.newTopBar = this.initData(data);
						// console.log(JSON.stringify(this.newTopBar))
					}
				})
			},
			initData(res){
				let arr = [];
				for(let i = 0; i < this.topBar.length; i++){
					let obj = {
						data:[]
					}
					if( i == 0){
						obj.data = res.data;
					}
					arr.push(obj);
				}
				return arr;
			},
			selectTab(id){
				this.curTabIdx = id;
				this.scrollViewIdx = `child${id}`;
			},
			onTabChanged(e){
				this.selectTab(e.detail.current);
			}
		}
	}
</script>

<style scoped>
	.wx-nav{
		height: 150rpx;
		line-height: 150rpx;
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.scroll-content {
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
	}
	.scroll-item {
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 32rpx;
	}
	.f-active-color {
		padding: 10rpx 0;
		border-bottom: 6rpx solid #49BDFB;
	}
</style>
