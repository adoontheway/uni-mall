<template>
	<view class="flashes" >
		
		<view class="time-view">
			<view>
				下一场{{new Date(flashObj.nextStartTime).toLocaleString()}}开始
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
			@tap='goDetail(item.id)'
		>
			<view class="flash-content">
				<image class="flash-img" :src="item.pic"></image>
				<view class="flash-price">秒杀价 ¥{{item.flashPromotionPrice}}</view>
				<view class="flash-name">{{item.name}}</view>
				<view class="flash-subtitle">{{item.subTitle}}</view>
				<view class="origin-price">
					¥{{item.originalPrice}}
				</view>
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
		},
		methods:{
			goDetail(item_id){
				uni.navigateTo({
					url:`/pages/detail/detail?id=${item_id}`
				})
			}
		}
	}
</script>

<style scoped>
.flashes{
	width: 94vw;
	display: flex;
	padding: 10rpx;
	flex-wrap: wrap;
	/* border: 4rpx solid #333333; */
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
	width: 45vw;
	height: 560rpx;
}
.img-con {
}
.origin-price {
	position: relative;
	width: 80rpx;
	height: 80rpx;
	line-height: 80rpx;
	border-radius: 50%;
	background-color: red;
	color: white;
	text-align: center;
	top: -500rpx;
	right: -130rpx;
	font-size: 20rpx;
}
.flash-img {
	height: 375rpx;
	width: 300rpx;
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


.time-view {
	display: flex;
	align-items: center;
	font-size: 20rpx;
	text-align: center;
	/* border: 2rpx solid rebeccapurple; */
	width: 100%;
}
.end-reminder {
	right: 0rpx;
	color: #cccccc;
	
}
.time-counter {
	flex: 1;
	top: -50rpx;
}
</style>