<template>
	<view>
		<NewLine></NewLine>
		<view class="list">
			<block v-if="dataList.length > 0">
				<scroll-view scroll-y="true" class="list-left">
					<view 
						v-for="(item, index ) in dataList"
						class="left-item"	
						:key="index"
						@tap="selectType(index)"
					>
						<view class="left-name">{{item.name}}</view>
					</view>
					
				</scroll-view>
				
				<scroll-view scroll-y="true" class="list-right">
					<view 
						class="right-list" 
						v-for="(v,k) in dataList[curIdx].data"
						:key="k"
					>
						<view class="list-title">{{v.name}}</view>
						<view class="right-content">
							<view 
								v-for="(v1,k1) in v.data"
								:key="k1"
								class="right-item"
							>
								<image class="right-img" :src="v1.imgUrl"></image>
								<view class="right-name">{{v1.name}}</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</block>
			<view v-else>数据加载中...</view>
			
		</view>
	</view>
	
</template>

<script>
	import NewLine from "@/components/NewLine.vue";
	import $http from "@/common/api/request.js";
	export default {
		data() {
			return {
				dataList:[],
				curIdx:0,
			}
		},
		onLoad() {
			this.getData();
		},
		components:{
			NewLine
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:"/pages/search/search"
			})
		},
		methods: {
			getData(){
				$http.request({
						url:`/goods/list`
					}).then((res)=>{
						console.log(JSON.stringify(res));
						this.dataList = res;
					}).catch((e)=>{
						uni.showToast({
							title:"请求失败",
							icon:"none"
						})
					});
				},
				selectType(idx){
					this.curIdx = idx;
				}
			}
			
		}
	
</script>

<style scoped>
.list {
	display: flex;
}
.list-left {
	width: 200rpx;
}
.left-item{
	border-bottom: 2rpx solid #ffffff;
	font-size: 20rpx;
	background-color: #f7f7f7;
}
.left-name {
	padding: 30rpx 6rpx;
	text-align: center;
	font-weight: bold;
}
.left-name-activate {
	border-left: 8rpx solid #49BDFB;
	background-color: #ffffff;
}
.list-right {
	flex: 1;
	padding-left: 30rpx;
}
.list-title {
	font-weight: bold;
	padding: 30rpx 0;
}
.right-content {
	display: flex;
	flex-wrap: wrap;
}
.right-name{
	padding: 16rpx 0;
}

.right-img{
	width: 150rpx;
	height: 150rpx;
}
.right-item {
	width: 150rpx;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	padding: 10rpx;
}
</style>
