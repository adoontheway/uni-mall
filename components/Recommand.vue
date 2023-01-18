<template>
	<view class="recommand bg-color">
		<view class="recommand-item">
			<image class="item-big" src="../static/img/1.jpeg"></image>
			<view class="item-small">
				<image class="img-small" src="../static/img/item0.jpeg"></image>
				<image class="img-small" src="../static/img/item1.jpeg"></image>
				<image class="img-small" src="../static/img/item2.jpeg"></image>
			</view>
		</view>
		
		<view class="recommand-item">
			<image class="item-big" src="../static/img/1.jpeg"></image>
			<view class="item-small">
				<image class="img-small" src="../static/img/17.jpeg"></image>
				<image class="img-small" src="../static/img/13.jpeg"></image>
				<image class="img-small" src="../static/img/14.jpeg"></image>
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