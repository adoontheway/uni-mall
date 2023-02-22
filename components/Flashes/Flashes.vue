<template>
	<view class="flashes" >
		
		<view class="time-view">
			<view>
				下一场{{flashObj.nextStartTime}}开始
			</view>
			<view class="time-counter">
				<view class="end-reminder">本场结束剩余</view>
				00:20:56
			</view>
		</view>
		<view 
			class="flash-item"
			v-for="(item, index) in flashObj['productList']"
			:key="index"
		>
			<view class="flash-content">
				<image class="flash-img" :src="item.pic"></image>
				<view class="flash-price">秒杀价 ¥{{item.flashPromotionPrice}}</view>
				<view class="flash-name">{{item.name}}</view>
				<view class="flash-subtitle">{{item.subTitle}}</view>
			</view>
			<view class="origin-price">
				¥{{item.originalPrice}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Flashes",
		data() {
			return {
				
			};
		},
		props:{
			flashObj:Object,
		}
	}
</script>

<style scoped>
.flashes{
	width: 94vw;
	display: flex;
	padding: 10rpx;
	flex-wrap: wrap;
	border: 4rpx solid #333333;
}
.flash-content {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10rpx;
}
.flash-item {
	border: 2rpx solid rebeccapurple;
	width: 45vw;
	height: 560rpx;
}
.flash-img {
	height: 375rpx;
	width: 100%;
}
.flash-name{
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	color: #333333;
	word-break: break-all;
	padding: 6rpx 20rpx;
}
.flash-price{
	color: red;
	padding: 6rpx 20rpx;
	font-size: 28rpx;
}
.flash-subtitle {
	color: #cccccc;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	word-break: break-all;
	padding: 6rpx 20rpx;
}
.origin-price {
	position: absolute;
	display: block;
	top: 0rpx;
	right: 10rpx;
	width: 100rpx;
	height: 100rpx;
	line-height: 100rpx;
	border-radius: 50%;
	background-color: red;
	color: white;
	text-align: center;
}

.time-view {
	display: flex;
}
.end-reminder {
	top: -20rpx;
	right: 0rpx;
	color: #cccccc;
}
.time-counter {
	flex: 1;
}
</style>