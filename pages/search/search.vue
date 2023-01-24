<template>
	<view class="search">
		<NewLine></NewLine>
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">最近搜索</view>
				<view class="iconfont icon-lajitong"></view>
			</view>
			<view>
				<view class="search-name f-color">四件套</view>
				<view class="search-name f-color">面膜</view>
			</view>
		</view>
		
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">热门搜索</view>
			</view>
			<view>
				<view class="search-name f-color">四件套</view>
				<view class="search-name f-color">面膜</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import NewLine from "@/components/NewLine.vue";
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap:(e)=>{
			if(e.float == "right"){
				uni.navigateTo({
					url:"/pages/search-list/search-list"
				})
			}
		},
		components:{
			NewLine
		},
		methods: {
			
		}
	}
</script>

<style>
.search-item{
	padding: 20rpx;
}
.search-title {
	display: flex;
	justify-content: space-between;
}
.search-name {
	padding: 4rpx 24rpx;
	background-color: #e1e1e1;
	display: inline-block;
	border-radius: 26rpx;
	margin: 10rpx;
}
</style>
