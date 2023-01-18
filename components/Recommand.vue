<template>
	<view class="recommand bg-color">
		<view class="recommand-item" v-for="(item, index) in dataList" :key="index">
			<image class="item-big" :src="item.bigImg"></image>
			<view class="item-small">
				<block v-for="(v,k) in item.data" :key="k">
					<image  class="img-small" :src="v"></image>
				</block>
				
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		name:"Recommand",
		data() {
			return {
				
			};
		},
		props:{
			dataList:Array
		}
	}
</script>

<style scoped>
.recommand{
	padding: 20rpx;
}
.recommand-item{
	display: flex;
	flex-direction: column;
	border: 2rpx solid #CCCCCC;
	border-radius: 20rpx;
	 overflow: hidden;
	 margin: 20rpx 0;
}
.item-big{
	width: 100%;
	height: 300rpx;
}
.item-small {
	display: flex;
	width: 100%;
	height: 240rpx;
}
.img-small {
	width: 33%;
	height: 240rpx;
}
</style>