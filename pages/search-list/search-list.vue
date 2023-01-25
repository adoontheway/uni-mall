<template>
	<view>
		<ShopList :keyword="keyword"></ShopList>
	</view>
</template>

<script>
	import ShopList from "@/components/ShopList.vue";
	export default {
		data() {
			return {
				keyword:""
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

<style>

</style>
