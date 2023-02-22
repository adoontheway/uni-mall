<template>
	<view class="list-body">
		<uNavBar>
			<view slot='left'>左边</view>
			<view slot='right'>
				<view>右边1</view>
				<view>右边2</view>
			</view>
		</uNavBar>
		<NewLine></NewLine>
		<view class="list">
			<block v-if="dataList.length > 0">
				<scroll-view 
					scroll-y="true" 
					class="list-left"
					:style="'height:'+contentHeight+'px'"
				>
					<view 
						v-for="(item, index ) in dataList"
						class="left-item"	
						:key="index"
						@tap="selectType(index)"
					>
						<view 
							class="left-name"
							:class="curIdx === index ? 'left-name-activate' : ''"
						>{{item.name}}</view>
					</view>
					
				</scroll-view>
				
				<scroll-view 
					scroll-y="true" 
					class="list-right"
					:style="'height:'+contentHeight+'px'"
				>
					<view class="right-content">
						<view
							class="right-item" 
							v-for="(v,k) in dataList[curIdx].children"
							:key="k"
							@tap="goCate(v.keywords)"
						>
						
							<image class="right-img" :src="(v.icon && (v.icon.length != 0)) ? v.icon : 'http://cdn.adxwork.com/mall-app/static/img/2.png' "></image>
							<view class="right-name">{{v.name}}</view>
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
	import uNavBar from "@/components/uni/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue";
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				curIdx:0,
				contentHeight:0,
			}
		},
		onLoad() {
			this.getData();
		},
		components:{
			NewLine,
			uNavBar
		},
		computed:{
			...mapState({
				dataList:state=>state.category.dataList,
			}),
		},
		onReady(){
			uni.getSystemInfo({
				success:(res)=>{
					this.contentHeight = res.windowHeight;// - uni.upx2px(80) - this.getClientHeight();
				},
			})
			
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:"/pages/search/search"
			})
		},
		methods: {
			getData(){
				if(this.dataList.length == 0){
					this.$store.commit('initCategory');
				}
				
			},
			selectType(idx){
				this.curIdx = idx;
			},
			getClientHeight(){
				const res = uni.getSystemInfoSync();
				const platform = res.platform;
				if(platform == "ios"){
					return 44 + res.statusBarHeight;
				}else if(platform == "android"){
					return 48 + res.statusBarHeight;
				}else{
					return 0;
				}
			},
			goCate(name){
				uni.navigateTo({
					url:`/pages/search-list/search-list?keyword=${name}`
				});
			}
		}
			
	}
	
</script>

<style scoped>
.list-body {
	/* margin-top: 180rpx; */
}
.list {
	display: flex;
}
.list-left {
	width: 200rpx;
}
.left-item{
	border-bottom: 2rpx solid #ffffff;
	/* font-size: 26rpx; */
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
	width: 220rpx;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	padding: 10rpx;
	margin: 10rpx;
	background-color: #f7f7f7;
}
</style>
