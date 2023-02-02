<template>
	<view class="pay-success">
		<view class="f-active-color">恭喜您支付成功</view>
		<view @tap="goIndex" class="return-index">继续去首页逛逛</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goIndex(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style scoped>
.pay-success {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.return-index {
	padding: 10rpx 60rpx;
	border: 2rpx solid #49bdfb;
	border-radius: 40rpx;
}
</style>
