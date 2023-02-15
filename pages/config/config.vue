<template>
	<view class="config">
		<view class="part-header">
			<view>账号设置</view>
			<view class="user-info">
				<image class="logo-img" src="../../static/logo.png"></image>
				<view>{{userInfo.nickname}}</view>
				<view>编辑个人资料</view>
			</view>
			<!-- <NewLine></NewLine> -->
		</view>
		
		<view class="config-item">
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
		
		<view class="part-header">
			<view>系统设置</view>
			<!-- <NewLine></NewLine> -->
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
		
		<view class="part-header">
			<view>系统设置</view>
			<!-- <NewLine></NewLine> -->
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
	color: #ffffff;
	text-align: center;
	font-size: 32rpx;
	align-items: center;
}
.right-mark {
	padding-right: 10rpx;
}
.part-header {
	font-size: 26rpx;
}
</style>
