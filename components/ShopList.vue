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
	import $http from "@/common/api/request.js";
	import NewLine from "@/components/NewLine.vue";
	import CommodityList from "./CommodityList.vue"
	export default {
		name:"ShopList",
		data() {
			return {
				shopList:{
					curIndex:0,
					data:[
						{name:"价格",status:1,key:"price"},
						{name:"折扣",status:0,key:"discount"},
						{name:"品牌",status:0,key:"brand"}
					]
				},
				dataList:[
				
				]
			};
		},
		mounted() {
			this.getData();
		},
		props:{
			keyword:String,
		},
		components:{
			NewLine,
			CommodityList
		},
		computed:{
			orderBy(){
				let obj = this.shopList.data[this.shopList.curIndex];
				let val = obj.status === 1 ? "desc" : "asc";
				return {
					[obj.key]:val
				}
			}
		},
		methods:{
			changeIndex(index){
				if(index === this.shopList.curIndex){
					this.shopList.data[index].status = this.shopList.data[index].status === 1 ? 2 : 1;
				}else{
					this.shopList.data[this.shopList.curIndex].status = 0;
					this.shopList.data[index].status = 1;
				}
				
				this.shopList.curIndex = index;
				this.getData();
			}
		},
		getData(){
			//todo 需要分页
			$http.request({
				url:`/goods/search?name=${this.keyword}
				&${this.shopList.data[this.curIndex].key}=${this.shopList.data[this.curIndex].status == 1 ? 'asc':'desc'}`,
				// data:{
				// 	...this.orderBy
				// }
			}).then((res)=>{
				this.dataList = res.data;
			}).catch((e)=>{
				uni.showToast({
					title:"请求失败",
					icon:"none"
				})
			});
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