<template>
	<view class="config">
		<view class="config-item">
			<view>地址管理</view>
			<view> > </view>
		</view>
		<view class="config-item">
			<view>修改密码</view>
			<view> > </view>
		</view>
		<view class="config-item">
			<view>绑定手机号</view>
			<view> > </view>
		</view>
		<view class="config-item">
			<view>绑定第三方账号</view>
			<view> > </view>
		</view>
		<view class="config-item">
			<view>消息推送</view>
			<view> > </view>
		</view>
		<view class="config-item">
			<view>短信提醒</view>
			<view> > </view>
		</view>
		<view class="config-item">
			<view>图片显示</view>
			<view> > </view>
		</view>
		<view class="config-item">
			<view>清除缓存</view>
			<view> > </view>
		</view>
		<view class="my-exit">退出</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.config {
	
}
.config-item {
	font-display: flex;
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
}
</style>
