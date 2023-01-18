<template>
	<view class="icons">
		<view class="icons-item">
			<image class="icons-img" src="../static/banner/banner0.png"></image>
			<text class="icons-name">运动户外</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../static/banner/banner4.png"></image>
			<text class="icons-name">运动户外</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../static/banner/banner5.png"></image>
			<text class="icons-name">运动户外</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../static/banner/banner6.png"></image>
			<text class="icons-name">运动户外</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../static/banner/banner7.png"></image>
			<text class="icons-name">运动户外</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../static/banner/banner1.png"></image>
			<text class="icons-name">运动户外</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../static/banner/banner2.png"></image>
			<text class="icons-name">运动户外</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../static/banner/banner3.png"></image>
			<text class="icons-name">运动户外</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Icons",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.icons{
	display: flex;
	flex-wrap: wrap;
}
.icons-item{
	width: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 20rpx;
}
.icons-img{
	width: 110rpx;
	height: 110rpx;
}
</style>