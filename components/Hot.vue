<template>
	<view class="hot">
		<Commodity :dataList="dataList" itemW="250rpx" imgH="250rpx"></Commodity>
	</view>
</template>

<script>
	import Commodity from "./Commodity.vue";
	export default {
		name:"Hot",
		data() {
			return {
			
			};
		},
		props:{
			dataList:Array
		},
		components:{
			Commodity
		}
	}
</script>

<style scoped>
.hot{
	
}
</style>