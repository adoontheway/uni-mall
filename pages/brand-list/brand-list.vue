<template>
	<view class="brand-list">
		<scroll-view
			scroll-y="true" 
			:style="'height:'+contentHeight+'px'"
			@scrolltolower="loadMore"
		>
			<view
				v-for="(item, index) in list"
				class="brand-item"
				@tap="goBrand(item.id)"
			>
				<view class="brand-img">
					<image class="brand-ico" :src="item.logo"></image>
				</view>
				<view class="brand-desc">
					<view class="desc-left">
						<view class="brand-likes">
							<UniIcons type="heart" size="30"/>{{item.productCommentCount}}
						</view>
						<view class="brand-good-comments">
							<UniIcons type="hand-up" size="30"/>好评率98%
						</view>
					</view>
					
					<view class="brand-total-commodities">
						共{{item.productCount}}件商品
						<UniIcons type="right" size="30"/>
					</view>
					
				</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	import $http from "@/common/api/request.js";
	import API from "@/utils/api.js";
	import UniIcons from '@/components/uni/uni-icons/components/uni-icons/uni-icons.vue';
	export default {
		data() {
			return {
				contentHeight:0,
				loadText:'上拉加载更多...',
				noMore:false,
				page:0,
				list:[],
			}
		},
		onLoad() {
			this.loadMore();
		},
		onReady(){
			uni.getSystemInfo({
				success:(res)=>{
					console.log(res);
					this.contentHeight = res.windowHeight;// - res.statusBarHeight ;
				},
			})
			
		},
		components:{
			UniIcons
		},
		methods: {
			fetchData(callback){
				$http.request({
					url:API.BRAND.RECOMMENDS+"?pageNum="+this.page,
				}).then((res)=>{
					this.list =  [...this.list,...res];
					this.noMore = res.length == 0;
					if(typeof callback === "function"){
						callback();
					}
				});
				
			},
			goBrand(bid){
				console.log(bid)
				uni.navigateTo({
					url:`/pages/Brand/Brand?id=${bid}`
				})
			},
			//上拉加载更多
			loadMore(){
				if(this.noMore){
					uni.showToast({
						title:"无法加载更多",
						icon:"none"
					})
					return
				}
				this.page++;
				this.fetchData(()=>{
					this.loadText = "上拉加载更多...";
				});
			},
		}
	}
</script>

<style scoped>
.brand-list {
	padding: 10rpx;
}
.brand-item {
	margin-top: 20rpx;
	padding: 10rpx;
	border-bottom: 4rpx solid #cccccc;
}
.brand-img{
	
}
.brand-ico {
	width: 100%;
	height: 320rpx;
}
.brand-desc {
	display: flex;
	align-items: center;
	font-size: 20rpx;
	justify-content: space-between;
	padding-top: 20rpx;
	/* border-top: 2rpx solid #cccccc; */
}
.desc-left {
	display: flex;
}
.brand-likes{
	display: flex;
	line-height: 50rpx;
}
.brand-good-comments {
	display: flex;
	padding-left: 10rpx;
	line-height: 50rpx;
}
.brand-total-commodities {
	display: flex;
	line-height: 50rpx;
}
</style>
