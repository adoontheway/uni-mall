<template>
	<view class="card-view">
		<view class="header">
			<view class="header-name" >{{title}}</view>
			<view class="more f-color" v-show="showMore" @tap="onShowMore">
				<text>更多推荐</text>
				<image class="right-arrow" src="../../static/img/right-arrow.png"></image>
			</view>
		</view>
		
		<view class="card-body">
			<slot>
				
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"CardView",
		data() {
			return {
				
			};
		},
		props:{
			title:{
				type:String,
				default:"卡片标题"
			},
			showMore:{
				type:Boolean,
				default:false
			},
			moreCall:{
				type:Function,
				default:null
			}
		},
		methods:{
			onShowMore(){
				if(this.moreCall){
					this.moreCall()
				}
			}
		}
	}
</script>

<style scoped>
.card-view{
	padding: 20rpx;
	margin-top: 10rpx;
	width: 100%;
	/* background-color: aliceblue; */
}
.header {
	display: flex;
	justify-content: space-between; 
	align-items: center;
	line-height: 30rpx;
}
.more {
	display: flex;
	align-items: center;
	font-size: 26rpx;
}
.right-arrow {
	width: 50rpx;
	height: 50rpx;
}
.more image {
	padding: 0 20rpx;
}
</style>