<template>
	<view class="config">
		<view class="config-item" @tap="goAddressList">
			<view>地址管理</view>
			<view class="right-mark"> > </view>
		</view>
		<view class="config-item">
			<view>修改密码</view>
			<view class="right-mark"> > </view>
		</view>
		<view class="config-item">
			<view>绑定手机号</view>
			<view class="right-mark"> > </view>
		</view>
		<view class="config-item">
			<view>绑定第三方账号</view>
			<view class="right-mark"> > </view>
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
		<view class="my-exit" @tap="quit">退出登录</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex';
	export default {
		data() {
			return {
				
			}
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
</style>
