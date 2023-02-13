<template>
	<view>
		<!-- <scroll-view
			scroll-y="true" 
			:style="'height:'+contentHeight+'px'"
			@scrolltolower="loadMore(index)"
		> -->
			<ShopList :keyword="keyword"></ShopList>
		<!-- </scroll-view> -->
		
		<!-- <view class="load-text f-color">
			{{loadText}}
		</view> -->
	</view>
</template>

<script>
	import ShopList from "@/components/ShopList.vue";
	export default {
		data() {
			return {
				keyword:"",
				loadText:"上拉加载更多",
			}
		},
		onLoad(e) {
			this.keyword = e.keyword;
			// #ifdef APP-PLUS
			let webview = this.$mp.page.$getAppWebview();
			webview.setTitleNViewSearchInputText(this.keyword);
			// #endif
		},
		components:{
			ShopList
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.load-text{
		border-top: 2rpx solid #636263;
		line-height: 60rpx;
		text-align: center;
	}
</style>
