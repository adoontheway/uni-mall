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
					v-for="(item, index) in navTabs"
					:key="index"
					@tap="selectTab(index,item.id)"
					:id="'child'+index"
				>
					<text :class="curTabIdx == index ? 'f-active-color':'f-color'">{{item.name}}</text>
				</view>
			</scroll-view>
			
			<swiper
				@change="onTabChanged"
				:currentId="curTabIdx"
				:style="'height:'+contentHeight+'px'"
			>
				<swiper-item
					v-for=" index in navTabs.length"
					:key="index"
				>
				
					<scroll-view 
						scroll-y="true" 
						:style="'height:'+contentHeight+'px'"
						@scrolltolower="loadMore(index)"
					>
					
						<block v-if="contents[curTabIdx] ">
						<!-- <block v-if="item.data.length > 0"> -->
						
							<!-- <block v-for="(v,k) in item.data" :key="k"> -->
								<!-- 推荐模版-->
								<!-- {{v}} -->
								
								<IndexSwiper v-if="contents[curTabIdx]['advertiseList'] " :dataList="contents[curTabIdx]['advertiseList']"></IndexSwiper>
								<!-- <IndexSwiper v-if="v.type === 'swiperList'" :dataList="v.data"></IndexSwiper> -->
								<!-- <template v-if="v.type === 'recommendList'">
									<Recommand  :dataList="v.data"></Recommand>
									<Card cardTitle="猜你喜欢"></Card>
								</template> -->
								
								
								<template v-if="contents[curTabIdx]['brandList']">
									<Icons  :dataList="contents[curTabIdx]['brandList']"></Icons>
									<Card cardTitle="新品上市"></Card>
								</template>
								<!-- 其他模版-->
								<!-- <Banner v-if="v.type === 'bannerList'" :imgUrl="v.imgUrl"></Banner>
								
								<template v-if="v.type === 'iconsList'">
									<Icons  :dataList="v.data"></Icons>
									<Card cardTitle="热销爆品"></Card>
								</template>
								<template v-if="v.type === 'hotList'">
									<Hot  :dataList="v.data"></Hot>
									<Card cardTitle="推荐店铺"></Card>
								</template>
								<template v-if="v.type === 'shopList'">
									<Shop  :dataList="v.data"></Shop>
									<Card cardTitle="为您推荐"></Card>
								</template>
								 -->
								<!-- card放这里app显示不正常	 -->
								<!-- <CommodityList v-if="v.type === 'comodityList'"  :dataList="v.data"></CommodityList> -->
								<template v-if="contents[curTabIdx]['newProductList']">
									<CommodityList :dataList="contents[curTabIdx]['newProductList']"></CommodityList>
									<Card cardTitle="热销爆品"></Card>
								</template>
								<template v-if="contents[curTabIdx]['hotProductList']">
									<CommodityList  :dataList="contents[curTabIdx]['hotProductList']"></CommodityList>
									<Card cardTitle="为您推荐"></Card>
								</template>
								
								<CommodityList v-if="recommendProductList[curTabIdx].list.length != 0"  :dataList="recommendProductList[curTabIdx].list"></CommodityList>
								
								
							<!-- </block> -->
						<!-- </block> -->
						</block>
						<view v-else>
							暂无数据...
						</view>
						
						<view class="load-text f-color">
							{{loadText}}
						</view>
					</scroll-view>
						
				
				</swiper-item>
			</swiper>
		
	</view>
</template>

<script>
	import $http from "@/common/api/request.js";
	import API from "@/utils/api.js";
	import IndexSwiper from "@/components/IndexSwiper.vue";
	import Recommand from "@/components/Recommand.vue"
	import Card from "@/components/Card.vue"
	import CommodityList from "@/components/CommodityList.vue";
	import Banner from "@/components/Banner.vue";
	import Icons from "@/components/Icons.vue";
	import Hot from "@/components/Hot.vue";
	import Shop from "@/components/Shop.vue";
	import { mapGetters } from 'vuex';
	export default {
		data() {
			return {
				curTabIdx:0,
				scrollViewIdx:'child0',
				contentHeight:0,
				// topBar:[
				// 	{name:"推荐",id:1},
				// 	{name:"运动户外",id:2},
				// 	{name:"服饰内衣",id:3},
				// 	{name:"鞋靴箱包",id:4},
				// 	{name:"美妆个护",id:5},
				// 	{name:"数码家具",id:6},
				// 	{name:"食品母婴",id:7},
				// 	{name:"萌宠生活",id:8}
				// ],
				contents:[],
				// content:{},
				recommendProductList:[],
				// newTopBar:{},
				subjects:[],
				loadText:"上拉加载更多",
			}
		},
		computed:{
				...mapGetters(['navTabs'])
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
			uni.getSystemInfo({
				success:(res)=>{
					// console.log(JSON.stringify(res));
					this.contentHeight = res.windowHeight - uni.upx2px(80);
				},
			})
			
		},
		onNavigationBarButtonTap:(e)=>{
			// console.log(e);
			if(e.index == 0){
				uni.navigateTo({
					url:"/pages/search/search"
				})
			}
		},
		methods: {
			__init(){
				$http.request({
					url:API.INDEX.CONTENT
				}).then((res)=>{
					console.log(this.navTabs.length);
					this.contents = new Array(this.navTabs.length);
					this.subjects = new Array(this.navTabs.length);
					this.contents[this.curTabIdx] = res;
					// this.content = res;
					this.recommendProductList = new Array(this.navTabs.length).fill({page:0,list:[]});
					this.loadMore();
				}).catch((e)=>{
					uni.showToast({
						title:"请求失败:",
						icon:"none"
					})
				});
			},
			
			selectTab(index,id){
				this.curTabIdx = index;
				this.scrollViewIdx = `child${index}`;
				if(this.subjects[this.curTabIdx] === undefined){
					$http.request({
						url:API.INDEX.SUBJECT_LIST+`?cateId=${id}`,
					}).then((res)=>{
						this.subjects[this.curTabIdx] =  res;
					}).catch((e)=>{
						uni.showToast({
							title:"请求主题失败",
							icon:"none"
						})
					});
				}
				// 切换标签页不触发加载
				// if(this.newTopBar[id].data.length == 0)
				// 	this.fetchData();
			},
			onTabChanged(e){
				let id = this.navTabs[e.detail.current].id;
				this.selectTab(e.detail.current,id);
			},
			fetchData(callback){
				$http.request({
					url:API.INDEX.RECOMMENDS+"?pageNum="+this.recommendProductList[this.curTabIdx].page,
				}).then((res)=>{
					// this.newTopBar[index].data = [...this.newTopBar[index].data,...res];
					this.recommendProductList[this.curTabIdx].list =  [...this.recommendProductList[this.curTabIdx].list,...res];
					if(typeof callback === "function"){
						callback();
					}
				}).catch((e)=>{
					uni.showToast({
						title:"请求失败",
						icon:"none"
					})
				});
				
			},
			//上拉加载更多
			loadMore(index){
				this.recommendProductList[this.curTabIdx].page++;
				this.fetchData(()=>{
					this.loadText = "上拉加载更多...";
				});
			},
			
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
	.load-text{
		border-top: 2rpx solid #636263;
		line-height: 60rpx;
		text-align: center;
	}
</style>
