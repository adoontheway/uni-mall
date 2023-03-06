<template>
	<view class="brand">
		<view class="brand-body" v-if="brand">
			<view class="brand-header">
				<image class="brand-img" :src="brand.bigPic"></image>
				<view class="brand-lable">制造商直供</view>
			</view>
			<view class="brand-subtitle">
				<image class="brand-logo" :src="brand.logo"></image>
				<view class="brand-title-3">
					<view class="brand-name">{{brand.name}}</view>
					<view class="brand-brief">国际著名内衣品牌</view>
					<view class="location-likes">
						<UniIcons type='location' size='30'/>中国
						<UniIcons type='heart' style="padding-left: 10rpx;" size='30'/>1000
					</view>
				</view>
				<view class="follow">
					<view class="follow-btn">+ 关注</view>	
				</view>
				
			</view>
			
			<view class="brand-story">
				品牌故事：Victoria's Secret成立于20世纪70年代初，是美国最大的女性成衣零售店，也是领跑全球的最著名内衣品牌之一。它以性感美艳为主题的内衣吸引着大量的追随者，公司每分钟的内衣销量可以多达600多件。<br/>
				
				维多利亚的秘密最初建立是为了方便男士为女士挑选内衣，希望借此环境消除男士的尴尬。如今她已发展为主旨是“魅力、美丽、时尚、浪漫”的风靡全球的内衣品牌，引人遐想的名字也给产品带来了无限的神秘与高贵感。<br/>
				
				维多利亚的秘密的产品种类包括了女式内衣、睡衣、短裤、香水化妆品以及相关书籍等。自1995年起，维多利亚的秘密开始举行年度时尚秀，也借由性感的服饰、华丽的舞台效果而捧红了因具备姣好容貌和傲人身材的维密天使们。<br/>
			</view>
			<view class="story-more">
				<UniIcons type="bottom" class="more-btn" size="30"></UniIcons>
			</view>
			
			<!-- 商品列表-->
			<card-view
				:title="'相关商品 '+brand.productCount"
			>
				<Recommends :dataList="products"></Recommends>
			</card-view>
			<view class="load-text f-color" v-show="!noMore">
				{{loadText}}
			</view>
		</view>
		
		<view v-else>
			努力加载中...
		</view>
	</view>
	
</template>

<script>
	import $http from "@/common/api/request.js";
	import API from "@/utils/api.js";
	import UniIcons from '@/components/uni/uni-icons/components/uni-icons/uni-icons.vue';
	export default {
		data() {
			return {
				brand:undefined,
				products:[],
				loadText:"上拉加载更多",
				page:0,
				noMore:false,
			}
		},
		onLoad(e){
			let id = e.id;
			this.fetchBrandData(id);
		},
		components:{
			UniIcons
		},
		methods: {
			fetchBrandData(brand_id){
				$http.request({
					url:API.BRAND.DETAIL.replace('{brandId}',brand_id),
				}).then((res)=>{
					this.brand =  res;
					uni.setNavigationBarTitle({
						title:"Victoria's Secret"
					});
					this.loadMore();
				});
			},
			fetchData(){
				$http.request({
					url:API.PRODUCT.LIST+"?pageNum="+this.page+"&brandId="+this.brand.id,
				}).then((res)=>{
					this.products =  [...this.products,...res];
					this.noMore = res.length == 0;
					
				}).catch((e)=>{
					uni.showToast({
						title:"请求失败",
						icon:"none"
					})
				});
			},
			loadMore(){
				if(this.noMore){
					uni.showToast({
						title:"无法加载更多",
						icon:"none"
					})
					return
				}
				this.page++;
				this.fetchData();
			},
		}
	}
</script>

<style scoped>
.brand-body {
	
}
.brand-header {
	
}
.brand-subtitle {
	padding: 6rpx;
	display: flex;
	align-items: center;
	background-color: aliceblue;
	border-bottom: 2rpx solid #cccccc;
}
.brand-title-3 {
	/* padding: 10rpx; */
	display: flex;
	flex-direction: column;
	flex: 2;
	align-items: center;
	justify-content: center;
	
}
.brand-img {
	width: 100%;
	height: 375rpx;
}
.brand-lable {
	position: relative;
	left:550rpx;
	bottom: 80rpx;
	background-color: grey;
	width: 150rpx;
	height: 40rpx;
	line-height: 40rpx;
	font-size: 24rpx;
	padding: 5rpx;
	border-radius: 20rpx;
	color: white;
	text-align: center;
}
.brand-brief {
	font-size: 24rpx;
	color: #cccccc;
}
.brand-logo{
	width: 120rpx;
	height: 120rpx;
	border: 2rpx solid #cccccc;
	border-radius: 50%;
	background-color: #ffffff;
}
.brand-name{
	
}
.location-likes{
	display: flex;
	align-items: center;
}
.story-more {
	width: 100%;
	padding: 10rpx;
}
.more-btn {
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 40rpx;
	height: 40rpx;
}
.brand-story {
	padding: 10rpx;
	font-size: 24rpx;
	line-height: 40rpx;
}
.brand-location {
	
}
.brand-likes {
	
}
.follow{
	flex: 1;
}
.follow-btn{
	background-color: seagreen;
	width: 160rpx;
	height: 60rpx;
	line-height: 60rpx;
	text-align: center;
	color: white;
	border-radius: 10rpx;
}
.brand-desc {
	
}
.bran-commodity-count {
	
}
</style>
