<template>
	<view class="login-other">
		<view class="other-txt">
			<view>或者用一下方式登陆</view>
		</view>
		<view class="other">
			<view class="other-item">
				<image class="other-img" src="../static/img/weixin.png"></image>
				<view>微信登陆</view>
			</view>
			<view class="other-item">
				<image class="other-img" src="../static/img/QQ.png"></image>
				<view>QQ登陆</view>
			</view>
			<view class="other-item">
				<image class="other-img" src="../static/img/sina.png"></image>
				<view>微博登陆</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"login-other",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
/*其他登陆方式*/
.login-other {
	padding:100rpx 0;
}
.other-txt {
	display: flex;
	padding: 50rpx 0;
}
.other-txt view{
	line-height: 0rpx;
	padding: 0 10rpx;
}
.other-txt:before {
	flex:1;
	content: '';
	height: 2rpx;
	background-color: #cccccc;
}
.other-txt::after {
	flex:1;
	content: '';
	height: 2rpx;
	background-color: #cccccc;
}
.other {
	display: flex;
	justify-content: space-around;
}
.other-item {
	display: flex;
	justify-content: center;
	align-items: center;
}
.other-item image {
	width: 80rpx;
	height: 80rpx;
}
/* end 其他登陆方式*/
</style>