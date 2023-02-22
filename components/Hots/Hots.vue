<template>
	<view class="hots">
		<view 
			v-for="(hot_item, hi) in dataList"
			class="hot-item"
			:key="hi"
		>
			<image
				class="hot-img" 
				:src="hot_item.pic"
			></image>
			<view class="hot-desc">
				<text
					class="hot-name"
				>{{hot_item.name}}</text>
				<text
					class="item-subTitle"
				>{{hot_item.subTitle}}</text>
				<view class="item-price">
					${{hot_item.price}}
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"Hots",
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
.hot-item {
	display: flex;
	padding: 20rpx;
}
.hot-img {
	width: 320rpx;
	height: 320rpx;
}
.hot-desc {
	display: flex;
	flex: 1;
	flex-direction: column;
	padding-left: 20rpx;
}
</style>