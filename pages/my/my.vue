<template>
	<view class="my">
		<!-- 头部 -->
		<view class="my-header">
			<view class="header-main">
				<view class="header-config" @tap="goConfig">
					<image class="config-img" src="http://cdn.adxwork.com/mall-app/static/img/config.png"></image>
				</view>
				<view class="header-logo" > <!-- @tap="goLogin"> -->
					<image class="logo-img" :src="loginStatus ? userInfo.icon:'http://cdn.adxwork.com/mall-app/static/img/16.png'"></image>
					<view class="logo-name">
						{{loginStatus ?　userInfo.nickname : '用户昵称'}}
					</view>
				</view>
			</view>
		</view>
		<!-- 订单相关 -->
		<view class="order">
			<view class="order-title" @tap='goOrder'>
				<view>我的订单</view>
				<view>全部订单 > </view>
			</view>
			<view class="order-list">
				<view class="order-item">
					<image class="order-img" src="http://cdn.adxwork.com/mall-app/static/img/order0.png"></image>
					<text>待付款</text>
				</view>
				<view class="order-item">
					<image class="order-img" src="http://cdn.adxwork.com/mall-app/static/img/order1.png"></image>
					<text>待发货</text>
				</view>
				<view class="order-item">
					<image class="order-img" src="http://cdn.adxwork.com/mall-app/static/img/order2.png"></image>
					<text>待收获</text>
				</view>
				<view class="order-item">
					<image class="order-img" src="http://cdn.adxwork.com/mall-app/static/img/order3.png"></image>
					<text>待评价</text>
				</view>
				<view class="order-item">
					<image class="order-img" src="http://cdn.adxwork.com/mall-app/static/img/order4.png"></image>
					<text>退款管理</text>
				</view>
			</view>
		</view>
		
		<!-- 内容列表 -->
		<view class="my-content">
			<view class="my-content-item">
				<view>我的收藏</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>我的优惠券</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>我的积分</view>
				<view>></view>
			</view>
		</view>
		<view class="my-content">
			<view class="my-content-item">
				<view>加入超级VIP</view>
				<view>></view>
			</view>
		</view>
		
		<view class="my-content">
			<view class="my-content-item">
				<view>帮助中心</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>联系客服</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>上架入驻</view>
				<view>></view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import {mapState} from 'vuex';
	
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			...mapState({
				loginStatus:state=>state.user.loginStatus,
				userInfo:state=>state.user.userInfo,
			})
		},
		methods: {
			goConfig(){
				uni.navigateTo({
					url:"/pages/config/config"
				})
			},
			goOrder(){
				uni.navigateTo({
					url:"/pages/my-orders/my-orders"
				})
			},
			// goLogin(){
			// 	uni.navigateTo({
			// 		url:'/pages/login/login'
			// 	})
			// }
		}
	}
</script>

<style scoped>
.my-header {
	background: url('http://cdn.adxwork.com/mall-app/static/img/2.png') no-repeat;
	width: 100%;
	height: 400rpx;
}
.header-main {
	position: relative;
	top: 120rpx;
}
.header-config {
	position: absolute;
	left: 40rpx;
}
.header-logo {
	position: absolute;
	width: 120rpx;
	height: 120rpx;
	left: 50%;
	margin-left: -60rpx;
}
.config-img {
	width: 40rpx;
	height: 40rpx;
}
.logo-img {
	width: 120rpx;
	height: 120rpx;
	border: 2rpx solid #cccccc;
	border-radius: 50%;
	background-color: #ffffff;
}
.logo-name {
	color: #ffffff;
	font-weight: bold;
	text-align: center;
}
.order-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx;
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
}
.my-content {
	margin: 20rpx 0;
	padding: 0 20rpx;
}
.my-content-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx;
	border-bottom: 2px solid #cccccc;
}
</style>
