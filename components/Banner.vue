<template>
	<view class="banner">
		<image class="banner-img" :src="imgUrl"></image>
	</view>
</template>

<script>
	export default {
		name:"Banner",
		props:{
			imgUrl:String
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.banner{
	width: 100%;
	height: 400rpx;
}
.banner-img{
	width: 100%;
	height: 400rpx;
}
</style>