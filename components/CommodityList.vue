<template>
	<view class="commondity-list">
		<Commodity :dataList="dataList"></Commodity>
	</view>
</template>

<script>
	import Commodity from "./Commodity.vue"
	export default {
		name:"CommodityList",
		data() {
			return {
				
			};
		},
		components:{
			Commodity
		},
		props:{
			dataList:Array
		}
	}
</script>

<style>
.commondity-list{
	
}
</style>