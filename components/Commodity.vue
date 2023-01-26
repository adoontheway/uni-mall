<template>
	<view 
		class="commodity" 
		:style="'flex-wrap:'+wrap+';' ">
		<view 	
			class="commodity-item" 
			v-for="(item, index) in dataList" 
			:key="index"
			:style="'width:'+itemW+';' "
			@tap="goDetails(item.id)"
		>
			<image 
				class="commodity-img" 
				:src="item.imgUrl"
				:style="'height:'+imgH+';' "
				></image>
			<view class="content">
				<text 
				class="commodity-name"
				:style="'font-size:'+titleFontSize+';' "
				>{{item.name}}</text>
				<view>
					<text class="pprice">${{item.pprice}}</text>
					<text class="oprice">${{item.oprice}}</text>
				</view>
				<text class="discount">{{item.discount}}折</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"Commodity",
		data() {
			return {
				
			};
		},
		props:{
			dataList:Array,
			itemW:{
				type:String,
				default:"375rpx"
			},
			imgH:{
				type:String,
				default:"375rpx"
			},
			wrap:{
				type:String,
				default:"wrap"
			},
			titleFontSize:{
				type:String,
				default:"26rpx"
			}
		},
		methods:{
			goDetails(id){
				uni.navigateTo({
					url:"/pages/detail/detail?id="+id
				})
			}
		}
	}
</script>

<style>
.commodity{
	display: flex;
	/* flex-wrap: wrap; */
}
.commodity-item{
	/* width: 375rpx; */
	padding-bottom: 20rpx;
}
.commodity-img{
	width: 100%;
	/* height: 375rpx; */
}
.content{
	text-align: center;
}
.commodity-name{
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	color: #333333;
	word-break: break-all;
	padding: 6rpx 20rpx;
}
.oprice{
	text-decoration: line-through;
	/* font-size: 24rpx; */
	color: #999999;
}
.discount{
	border-radius: 4rpx;
	border: 1px solid red;
	padding: 2rpx 10rpx;
	/* font-size: 20rpx; */
	color: red;
}
</style>