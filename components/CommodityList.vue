<template>
	<view class="commondity-list">
		<Commodity :dataList="commodityList"></Commodity>
	</view>
</template>

<script>
	import Commodity from "./Commodity.vue"
	export default {
		name:"CommodityList",
		data() {
			return {
				commodityList:[
					{
						id:1,
						imgUrl:"../../static/img/item2.jpeg",
						name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
						pprice:"199.00",
						oprice:"299.00",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/img/item1.jpeg",
						name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
						pprice:"188.00",
						oprice:"299.00",
						discount:"5.0"
					},
					{
						id:3,
						imgUrl:"../../static/img/item0.jpeg",
						name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
						pprice:"188.00",
						oprice:"399.00",
						discount:"4.0"
					},
					{
						id:4,
						imgUrl:"../../static/img/item2.jpeg",
						name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
						pprice:"199.00",
						oprice:"299.00",
						discount:"5.2"
					},
					{
						id:5,
						imgUrl:"../../static/img/item1.jpeg",
						name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
						pprice:"188.00",
						oprice:"299.00",
						discount:"5.0"
					},
				]
			};
		},
		components:{
			Commodity
		}
	}
</script>

<style>
.commondity-list{
	
}
</style>