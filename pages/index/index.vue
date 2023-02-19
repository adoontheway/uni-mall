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
				>
					<view class="brands" >
						<view 
							class="brand-item"
							v-for="(brand, bi) in content['brandList']"
							:key="bi"
						>
							<view class="brand-name">{{brand.name}}制造商</view>
							<view class="brand-price">9.9元起</view>
							<view>
								<image class="brand-img" :src="brand.logo"></image>
							</view>
						</view>
					</view>
				</card-view>		
				<!-- 秒杀专区 -->
				<card-view 
					title="秒杀专区" 
					v-show="Object.keys(content['homeFlashPromotion']).length != 0"
				>
					<view class="flushs">
						
					</view>
				</card-view>			
				
				<!-- 新鲜好物 -->
				<card-view
					title="新鲜好物"
					:showMore="true"
					v-show="Object.keys(content['newProductList']).length != 0"
				>
					
					<view class="brands">
						<view 
						v-for="(new_item, vi) in content['newProductList']"
							class="new-item"
							:key="vi"
						>
							<image
								class="brand-img" 
								:src="new_item.pic"
							></image>
							<text
								class="brand-name"
							>{{new_item.name}}</text>
							<text
								class="item-subTitle"
							>{{new_item.subTitle}}</text>
							<view class="item-price">
								${{new_item.price}}
							</view>
						</view>
					</view>
				</card-view>
				
				<!-- 人气推荐 -->
				<card-view 
					title="人气推荐"
					:showMore="true"
					v-show="Object.keys(content['hotProductList']).length != 0"
				>
					<view class="hots">
						<view 
							v-for="(hot_item, hi) in content['hotProductList']"
							class="hot-item"
							:key="hi"
						>
							<image
								class="hot-img" 
								:src="hot_item.pic"
							></image>
							<view class="hot-desc">
								<text
									class="hot-name"
								>{{hot_item.name}}</text>
								<text
									class="item-subTitle"
								>{{hot_item.subTitle}}</text>
								<view class="item-price">
									${{hot_item.price}}
								</view>
							</view>
							
						</view>
					</view>
				</card-view>
				
				<!-- 专题精选 -->
				<card-view 
					title="专题精选"
					:showMore="true"
					:moreCall="moreSubjects"
					v-show="Object.keys(content['subjectList']).length != 0"
				>
					<view class="hots">
						<view 
							v-for="(sub_item, si) in content['subjectList']"
							class="hot-item"
							:key="si"
						>
							<image
								class="hot-img" 
								:src="sub_item.pic"
							></image>
							<view class="hot-desc">
								<text
									class="hot-name"
								>{{sub_item.name}}</text>
								<text
									class="item-subTitle"
								>{{sub_item.subTitle}}</text>
								<view class="item-price">
									${{sub_item.price}}起
								</view>
							</view>
							
						</view>
					</view>
				</card-view>
				
				<!-- 猜你喜欢 -->
				<card-view 
					title="猜你喜欢"
					:showMore="true"
					v-show="recommendProduct.list.length != 0"
				>
					<view class="recommands">
						<view 
							v-for="(recommand_item, ri) in recommendProduct.list"
							class="recommand-item"
							:key="ri"
						>
							<image
								class="recommand-img" 
								:src="recommand_item.pic"
							></image>
							<text
								class="hot-name"
							>{{recommand_item.name}}</text>
							<text
								class="item-subTitle"
							>{{recommand_item.subTitle}}</text>
							<view class="item-price">
								${{recommand_item.price}}起
							</view>
							
						</view>
					</view>
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
					url:"/pages/cart/cart"
				})
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
	.brands{
		display: flex;
		padding: 20rpx;
		flex-wrap: wrap;
	}
	.brand-item {
		width: 320rpx;
		display: flex;
		flex-direction: column;
		padding: 10rpx;
	}
	.brand-img {
		height: 375rpx;
		width: 100%;
	}
	.brand-name{
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: #333333;
		word-break: break-all;
		padding: 6rpx 20rpx;
	}
	.brand-price{
		color: #cccccc;
		padding: 6rpx 20rpx;
		font-size: 28rpx;
	}
	
	.item-price {
		color: red;
	}
	.item-subTitle {
		color: darkgrey;
	}
	.new-item {
		width: 320rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 10rpx;
	}
	.hot-item {
		display: flex;
		padding: 20rpx;
	}
	.hot-img {
		width: 320rpx;
		height: 320rpx;
	}
	.hot-desc {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding-left: 20rpx;
	}
	
	
	.recommands{
		display: flex;
		padding: 20rpx;
		flex-wrap: wrap;
	}
	.recommand-item {
		width: 320rpx;
		display: flex;
		flex-direction: column;
		padding: 10rpx;
	}
	.recommand-img {
		height: 375rpx;
		width: 100%;
	}
	.recommand-name{
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: #333333;
		word-break: break-all;
		padding: 6rpx 20rpx;
	}
	.recommand-price{
		color: #cccccc;
		padding: 6rpx 20rpx;
		font-size: 28rpx;
	}
</style>
