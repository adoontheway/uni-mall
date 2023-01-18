<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<image class="swiper-img" src="../static/img/swiper0.png"></image>
			</swiper-item>
			<swiper-item>
				<image class="swiper-img" src="../static/img/swiper1.png"></image>
			</swiper-item>
			<swiper-item>
				<image class="swiper-img" src="../static/img/swiper2.png"></image>
			</swiper-item>
			<swiper-item>
				<image class="swiper-img" src="../static/img/swiper3.png"></image>
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