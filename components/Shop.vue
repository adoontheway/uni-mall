<template>
	<view class="shop">
		<view class="shop-item" v-for="(item, index ) in dataList" :key="index">
			<image class="shop-big" :src="item.shopImg"></image>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<Commodity :dataList="item.data" itemW="200rpx" imgH="200rpx" wrap="no-wrap"></Commodity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Commodity from "./Commodity.vue"
	export default {
		name:"Shop",
		data() {
			return {
				
			};
		},
		components:{
			Commodity
		},
		props:{
			dataList:Array
		}
	}
</script>

<style scoped>
.shop{
	
}
.shop-big{
	width: 100%;
	height: 350rpx;
}
.scroll-item{
	display: inline-block;
	width:300rpx;
	height: 300rpx;
}
.scroll-content {
	width: 100%;
}
</style>