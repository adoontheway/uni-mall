<template>
	<view class="index">
		<!-- 微信小程序的tab应该是没有生效的，这里自定义一个  -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="wx-nav">
			<view class="iconfont icon-fangdajing"></view>
			<!-- <text>京东</text> -->
			<view class="iconfont icon-xiaoxi"></view>
		</view>
		<!-- #endif -->
		
		<scroll-view 
			scroll-y="true" 
			:style="'height:'+contentHeight+'px'"
			@scrolltolower="loadMore"
		>
		
			<block v-if="content ">
				<IndexSwiper v-if="content['advertiseList'] " :dataList="content['advertiseList']"></IndexSwiper>
				
				<view class="order-list">
					<view class="order-item">
						<image class="order-img" src="../../static/img/topic.png"></image>
						<text>话题</text>
					</view>
					<view class="order-item">
						<image class="order-img" src="../../static/img/best-choice.png"></image>
						<text>优选</text>
					</view>
					<view class="order-item">
						<image class="order-img" src="../../static/img/present.png"></image>
						<text>特惠</text>
					</view>
					<view class="order-item">
						<image class="order-img" src="../../static/img/sign.png"></image>
						<text>签到</text>
					</view>
				</view>
				<NewLine></NewLine>
				<!-- 品牌制造商 -->
				<card-view 
					v-show="Object.keys(content['brandList']).length != 0"
					title="品牌制造商直供" 
					:showMore="true"
					:moreCall="goBrandList"
				>
					<Brands :dataList="content['brandList']"></Brands>
				</card-view>
						
				<!-- 秒杀专区 -->
				<card-view 
					title="秒杀专区" 
					v-show="Object.keys(content['homeFlashPromotion']).length != 0"
				>
					<Flashes :flashObj="content['homeFlashPromotion']"></Flashes>
				</card-view>			
				
				<!-- 新鲜好物 -->
				<card-view
					title="新鲜好物"
					:showMore="true"
					:moreCall="goNewList"
					v-show="Object.keys(content['newProductList']).length != 0"
				>
					<Freshes :dataList="content['newProductList']"></Freshes>				
				</card-view>
				
				<!-- 人气推荐 -->
				<card-view 
					title="人气推荐"
					:showMore="true"
					v-show="Object.keys(content['hotProductList']).length != 0"
				>
					<Hots :dataList="content['hotProductList']"></Hots>
				</card-view>
				
				<!-- 专题精选 -->
				<card-view 
					title="专题精选"
					:showMore="true"
					:moreCall="moreSubjects"
					v-show="Object.keys(content['subjectList']).length != 0"
				>
					<Subject :dataList="content['subjectList']"></Subject>
				</card-view>
				
				<!-- 猜你喜欢 -->
				<card-view 
					title="猜你喜欢"
					:showMore="true"
					v-show="recommendProduct.list.length != 0"
				>
					<Recommends :dataList="recommendProduct.list"></Recommends>
				</card-view>
				
			</block>
			<view v-else>
				暂无数据...
			</view>
			
			<view class="load-text f-color" v-show="!recommendProduct.noMore">
				{{loadText}}
			</view>
		</scroll-view>
					
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
	import NewLine from "@/components/NewLine.vue";
	import { mapGetters } from 'vuex';
	export default {
		data() {
			return {
				scrollViewIdx:'child0',
				contentHeight:0,
				content:null,
				recommendProduct:{
					page:0,
					list:[],
					noMore:false,
				},
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
			Shop,
			NewLine
		},
		onLoad() {
			this.__init();
		},
		onReady(){
			uni.getSystemInfo({
				success:(res)=>{
					console.log(res);
					this.contentHeight = res.windowHeight;// - res.statusBarHeight ;
				},
			})
			
		},
		onNavigationBarButtonTap:(e)=>{
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
					this.initContents(res);
				}).catch((e)=>{
					uni.showToast({
						title:"请求失败:",
						icon:"none"
					})
				});
			},
			initContents(res){
				this.content = res;
				this.loadMore();
			},
			
			
			fetchData(callback){
				$http.request({
					url:API.INDEX.RECOMMENDS+"?pageNum="+this.recommendProduct.page,
				}).then((res)=>{
					this.recommendProduct.list =  [...this.recommendProduct.list,...res];
					this.recommendProduct.noMore = res.length == 0;
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
			loadMore(){
				if(this.recommendProduct.noMore){
					uni.showToast({
						title:"无法加载更多",
						icon:"none"
					})
					return
				}
				this.recommendProduct.page++;
				this.fetchData(()=>{
					this.loadText = "上拉加载更多...";
				});
			},
			moreSubjects(){
				uni.switchTab({
					url:"/pages/subject/subject"
				})
			},
			goBrandList(){
				uni.navigateTo({
					url:'/pages/brand-list/brand-list'
				})
			},
			goNewList(){
				
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
		padding-top: 50rpx;
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
	.order-img {
		width: 66rpx;
		height: 66rpx;
	}
	.order-list {
		padding: 20rpx;
		display: flex;
	}
	.order-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	
	
</style>
