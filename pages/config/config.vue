<template>
	<view class="config">
		<NewLine></NewLine>
		<view class="part-header bottom-line">
			<view class="header bottom-line">账号设置</view>
			<view class="user-info" @tap="goUserInfo">
				<view class="user-name">
					<image class="logo-img" src="http://cdn.adxwork.com/mall-app/static/logo.png"></image>
					<view>{{userInfo.nickname}}</view>
				</view>
				<view class="f-color">编辑个人资料 > </view>
			</view>
			<!-- <NewLine></NewLine> -->
		</view>
		
		<view class="config-item" @tap="goUpdatePasswod">
			<view>修改密码</view>
			<view class="right-mark"> > </view>
		</view>
		<view class="config-item">
			<view>绑定手机号</view>
			<view class="right-mark"> > </view>
		</view>
		<view class="config-item" @tap="goAddressList">
			<view>地址管理</view>
			<view class="right-mark"> > </view>
		</view>
		<view class="config-item">
			<view>绑定第三方账号</view>
			<view class="right-mark"> > </view>
		</view>
		
		<view class="config-item member-item" @tap="goMemberCenter">
			<view>我是会员</view>
			<view class="right-mark f-color"> 钻石会员 > </view>
		</view>
		<view class="part-header bottom-line">
			<view class="header">系统设置</view>
		</view>
		<view class="config-item">
			<view>消息推送</view>
			<view class="right-mark"> > </view>
		</view>
		<view class="config-item">
			<view>短信提醒</view>
			<view class="right-mark"> > </view>
		</view>
		<view class="config-item">
			<view>图片显示</view>
			<view class="right-mark"> > </view>
		</view>
		<view class="config-item">
			<view>清除缓存</view>
			<view class="right-mark"> > </view>
		</view>
		
		<view class="part-header bottom-line">
			<view class="header">系统设置</view>
		</view>
		<view class="config-item">
			<view>给于好评</view>
			<view class="right-mark"> > </view>
		</view>
		<view class="config-item">
			<view>意见反馈</view>
			<view class="right-mark"> > </view>
		</view>
		<view class="config-item">
			<view>推荐码</view>
			<view class="right-mark"> > </view>
		</view>
		<view class="config-item">
			<view>关于</view>
			<view class="right-mark"> > </view>
		</view>
		<view class="my-exit" @tap="quit">退出登录</view>
	</view>
</template>

<script>
	import NewLine from "@/components/NewLine.vue";
	import {mapMutations,mapState} from 'vuex';
	export default {
		data() {
			return {
				
			}
		},
		components:{
			NewLine
		},
		computed:{
			...mapState({
				userInfo:state=>state.user.userInfo,
			})
		},
		methods: {
			...mapMutations(['logout']),
			goAddressList(){
				uni.navigateTo({
					url:"/pages/address-list/address-list"
				})
			},
			goUserInfo(){
				uni.navigateTo({
					url:"/pages/user-info/user-info"
				})
			},
			goUpdatePasswod(){
				uni.navigateTo({
					url:"/pages/update-password/update-password"
				})
			},
			goMemberCenter(){
				uni.navigateTo({
					url:"/pages/member-center/member-center"
				})
			},
			quit(){
				this.logout();
				uni.showToast({
					title:"退出成功",
					icon:"none"
				})
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style scoped>
.config {
	
}
.logo-img {
	width: 120rpx;
	height: 120rpx;
	border: 2rpx solid #cccccc;
	border-radius: 50%;
	background-color: #ffffff;
}
.user-info {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx 0 20rpx 20rpx;
}
.user-name {
	display: flex;
	align-items: center;
	padding: 10rpx 10rpx;
}
.user-name view {
	padding-left: 10rpx;
}
.config-item {
	display: flex;
	padding: 20rpx 0 20rpx 20rpx;
	justify-content: space-between;
	border-bottom: 2rpx solid #cccccc;
}
.my-exit {
	background-color: #49bdfb;
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	color: #ffffff;
	text-align: center;
	font-size: 32rpx;
	align-items: center;
}
.right-mark {
	padding-right: 10rpx;
}
.part-header {
	line-height: 40rpx;
	padding: 20rpx 30rpx 20rpx 0;
}
.header {
	font-size: 26rpx;
	padding:30rpx 0rpx 0rpx 20rpx;
}
.bottom-line {
	border-bottom: 2rpx solid #cccccc;
}
</style>
