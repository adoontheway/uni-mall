<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in dataList" :key="index">
				<image class="swiper-img" :src="item.pic"></image>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"IndexSwiper",
		data() {
			return {
				
			};
		},
		props:{
			dataList:Array,
		},
		onShow(){
			console.log(dataList);
		}
	}
</script>

<style scoped>
	/* swiper的默认宽高会在不同平台上有差异，需要手动在这里处理 */
	swiper{
		width: 100%;
		height: 400rpx;
	}
.swiper-img{
	width: 100%;
	height: 400rpx;
}
</style>