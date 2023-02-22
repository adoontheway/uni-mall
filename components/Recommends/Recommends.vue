<template>
	<view class="recommands">
		<view 
			v-for="(recommand_item, ri) in dataList"
			class="recommand-item"
			:key="ri"
		>
			<image
				class="recommand-img" 
				:src="recommand_item.pic"
			></image>
			<text
				class="hot-name"
			>{{recommand_item.name}}</text>
			<text
				class="item-subTitle"
			>{{recommand_item.subTitle}}</text>
			<view class="item-price">
				${{recommand_item.price}}起
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"Recommends",
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
.recommands{
	display: flex;
	padding: 20rpx;
	flex-wrap: wrap;
}
.recommand-item {
	width: 320rpx;
	display: flex;
	flex-direction: column;
	padding: 10rpx;
}
.recommand-img {
	height: 375rpx;
	width: 100%;
}
.recommand-name{
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	color: #333333;
	word-break: break-all;
	padding: 6rpx 20rpx;
}
.recommand-price{
	color: #cccccc;
	padding: 6rpx 20rpx;
	font-size: 28rpx;
}
</style>