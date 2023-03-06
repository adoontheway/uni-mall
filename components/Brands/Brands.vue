<template>
	<view class="brands" >
		<view 
			class="brand-item"
			v-for="(brand, bi) in dataList"
			:key="bi"
			@tap="goBrand(brand.id)"
		>
			<view class="brand-name">{{brand.name}}制造商</view>
			<view class="brand-price">9.9元起</view>
			<view>
				<image class="brand-img" :src="brand.logo"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Brands",
		data() {
			return {
				
			};
		},
		props:{
			dataList:Array,
		},
		methods:{
			goBrand(id){
				uni.navigateTo({
					url:`/pages/Brand/Brand?id=${id}`
				})
			},
		}
	}
</script>

<style scoped>
.brands{
	display: flex;
	padding: 20rpx;
	flex-wrap: wrap;
}
.brand-item {
	width: 320rpx;
	display: flex;
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
</style>