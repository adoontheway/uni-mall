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
					<scroll-view 
						scroll-y="true" 
						:style="'height:'+contentHeight+'px'"
						@scrolltolower="loadMore(index)"
					>
						<block v-if="item.data.length > 0">
						
							<block v-for="(v,k) in item.data" :key="k">
								<!-- 推荐模版-->
								<!-- {{v}} -->
								<IndexSwiper v-if="v.type === 'swiperList'" :dataList="v.data"></IndexSwiper>
								<template v-if="v.type === 'recommendList'">
									<Recommand  :dataList="v.data"></Recommand>
									<Card cardTitle="猜你喜欢"></Card>
								</template>
								
								<!-- 其他模版-->
								<Banner v-if="v.type === 'bannerList'" :imgUrl="v.imgUrl"></Banner>
								
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
								
								<!-- card放这里app显示不正常	 -->
								<CommodityList v-if="v.type === 'comodityList'"  :dataList="v.data"></CommodityList>
								
								
								
							</block>
						</block>
						<view v-else>
							暂无数据...
						</view>
						
						<view class="load-text f-color">
							{{item.loadText}}
						</view>
					</scroll-view>
						
				
				</swiper-item>
			</swiper>
		
	</view>
</template>

<script>
	import $http from "@/common/api/request.js";
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
					url:"/index_list/data",
				}).then((res)=>{
					this.topBar = res.topBar;
					this.newTopBar = this.initData(res);
				}).catch((e)=>{
					console.log("bad request",e);
					uni.showToast({
						title:"请求失败",
						icon:"none"
					})
				});
			},
			initData(res){
				let arr = [];
				for(let i = 0; i < this.topBar.length; i++){
					let obj = {
						data:[],
						loadText:'上拉加载更多'
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
				// 切换标签页不触发加载
				if(this.newTopBar[id].data.length == 0)
					this.fetchData();
			},
			onTabChanged(e){
				this.selectTab(e.detail.current);
			},
			fetchData(callback){
				let index = this.curTabIdx;
				let id = this.topBar[index].id;
				let page = Math.ceil(this.newTopBar[index].data.length/5)+1;
				$http.request({
					url:`/index_list/${id}/data/${page}`,
				}).then((res)=>{
					this.newTopBar[index].data = [...this.newTopBar[index].data,...res];
					if(typeof callback === "function"){
						callback();
					}
				}).catch((e)=>{
					console.log("bad request",e);
					uni.showToast({
						title:"请求失败",
						icon:"none"
					})
				});
				
			},
			//上拉加载更多
			loadMore(index){
				this.newTopBar[index].loadText = '加载中...';
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
