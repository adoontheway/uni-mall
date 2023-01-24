<template>
	<view class="shop-list">
		<view class="shop-title f-color">
			<view 
				class="shop-item" 
				v-for="(item, index) in shopList.data" 
				:key="index"
				@tap="changeIndex(index)"
			>
				<view :class="shopList.curIndex == index ? 'f-active-color' : '' ">{{item.name}}</view>
				<view class="shop-icon">
					<view 
						class="iconfont icon-shangjiantou up"
						:class="item.status == 1 ? 'f-active-color' : ''"
						>
					</view>
					<view 
						class="iconfont icon-arrow-down down"
						:class="item.status == 2 ? 'f-active-color' : ''"
					></view>
				</view>
			</view>
			
		</view>
		<NewLine></NewLine>
		
		<CommodityList  :dataList="dataList"></CommodityList>
	</view>
</template>

<script>
	import NewLine from "@/components/NewLine.vue";
	import CommodityList from "./CommodityList.vue"
	export default {
		name:"ShopList",
		data() {
			return {
				shopList:{
					curIndex:0,
					data:[
						{name:"价格",status:1},
						{name:"折扣",status:0},
						{name:"品牌",status:0}
					]
				},
				dataList:[
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
			NewLine,
			CommodityList
		},
		methods:{
			changeIndex(index){
				console.log(index,this.shopList.curIndex);
				if(index === this.shopList.curIndex){
					this.shopList.data[index].status = this.shopList.data[index].status === 1 ? 2 : 1;
				}else{
					this.shopList.data[this.shopList.curIndex].status = 0;
					this.shopList.data[index].status = 1;
				}
				
				this.shopList.curIndex = index;
			}
		}
	}
</script>

<style scoped>
.shop-title {
	display: flex;
}
.shop-item {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80rpx;
}

.shop-icon{
	position: relative;
	margin-left: 10rpx;
}
.iconfont {
	width: 16rpx;
	height: 8rpx;
	position: absolute;
	left: 0;
} 
.up {
	top: -14rpx;
}
.down {
	top: -6rpx;
}
</style>