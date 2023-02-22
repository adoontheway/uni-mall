<template>
	<view class="hots">
		<view 
			v-for="(item, si) in dataList"
			class="hot-item"
			:key="si"
		>
			<image
				class="hot-img" 
				:src="item.pic"
			></image>
			<view class="hot-desc">
				<view class="hot-title">
					<text
						class="hot-name"
					>{{item.title}}</text>
					<text
						class="item-subTitle"
					>{{item.content}}</text>
				</view>
				
				<view class="item-price">
					$100起
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"Subject",
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
.hots {
	width: 95vw;
}
.hot-item {
	width: 100%;
}
.hot-img {
	width: 100%;
	height: 375rpx;
}
.hot-desc {
	display: flex;
	justify-content: space-between;
}
</style>