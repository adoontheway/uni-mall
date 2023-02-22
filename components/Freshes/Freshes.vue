<template>
	<view class="brands">
		<view 
		v-for="(new_item, vi) in dataList"
			class="new-item"
			:key="vi"
		>
			<image
				class="brand-img" 
				:src="new_item.pic"
			></image>
			<text
				class="brand-name"
			>{{new_item.name}}</text>
			<text
				class="item-subTitle"
			>{{new_item.subTitle}}</text>
			<view class="item-price">
				${{new_item.price}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Freshes",
		data() {
			return {
				
			};
		},
		props:{
			dataList:Array,
		}
	}
</script>

<style scoped>
.brands{
	display: flex;
	padding: 20rpx;
	flex-wrap: wrap;
}
.new-item {
		width: 320rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 10rpx;
	}
.brand-img {
	height: 375rpx;
	width: 100%;
}
.brand-name{
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	color: #333333;
	word-break: break-all;
	padding: 6rpx 20rpx;
}
.brand-price{
	color: #cccccc;
	padding: 6rpx 20rpx;
	font-size: 28rpx;
}
.item-price {
	color: red;
}
.item-subTitle {
	color: darkgrey;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
	
</style>