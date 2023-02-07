<template>
	<view class="confirm-order">
		<NewLine></NewLine>
		<!-- 地址信息 -->
		<view class="address-info" @tap="goAddress">
			<template v-if="address != null">
				<view class="user-info">
					<view class="user-name">
						收件人：{{address.name}}
					</view>
					<view>
						{{address.tel}}
					</view>
				</view>
				<view class="address-detail">收货地址：{{address.city}} {{address.details}}</view>			
			</template>
			<!-- todo: 地址为空的情况逻辑有瑕疵 -->
			<template v-else>
				<view class="user-info">
					<view class="user-name">
						请选择收件地址
					</view>
				</view>
			</template>
		</view>
		
		
		<!-- 商品信息 -->
		<view class="item-list">
			<view 
				class="item-info"
				v-for="(item, index) in selectedItemList"
				:key="index"
			>
				<image class="item-img" :src="item.imgUrl"></image>
				<view class="item-desc">
					<view class="item-name">{{item.name}}</view>
					<view class="item-size f-color">{{item.desc}}</view>
					<view class="f-active-color" style="font-size: 24rpx;">7天无理由</view>
				</view>
				<view class="text-right">
					<view>¥ {{item.price}}</view>
					<view class="f-active-color">x {{item.num}}</view>
				</view>
			</view>
			
		</view>
		
		<!-- 提交订单 -->
		<view class="shop-foot">
			<view class="foot-count ">合计：<text class="f-active-color">¥ {{totalCount.price}}</text></view>
			<view class="foot-num" @tap="goPay">提交订单</view>
		</view>
	</view>
</template>

<script>
	import $http from "@/common/api/request.js";
	import API from "@/utils/api.js";
	import NewLine from '@/components/NewLine.vue';
	import { mapGetters, mapState } from "vuex";
	export default {
		data() {
			return {
				address:null,
				orderId:""
			}
		},
		computed:{
			...mapGetters(['defaultAddress','selectedItemList','totalCount']),
			...mapState({
				list:state=>state.address.list
			})
		},
		components:{
			NewLine
		},
		onLoad(e) {
			this.orderId = e.orderId;
			if(this.defaultAddress.length>0){
				this.address= this.defaultAddress[0];
			}
			uni.$on("address-selected",(e)=>{
				this.address = this.list[e.index];
			});
		},
		onUnload() {
			uni.$off("address-selected");
		},
		methods: {
			goAddress(){
				uni.navigateTo({
					url:`/pages/address-list/address-list?type=select`
				})
			},
			goPay(){
				if( !this.address){
					uni.showToast({
						title:"请选择收获地址",
						icon:"none"
					})
				}else{
					$http.request({
						url:API.ORDER.SUBMIT,
						method:'POST',
						data:{
							orderId: this.orderId
						}
					}).then((res)=>{
						uni.navigateTo({
							url:`/pages/pay/pay?orderId=${res.id}`
						})
					}).catch((e)=>{
						uni.showToast({
							title:"获取订单列表失败",
							icon:"none"
						})
					});
					
					uni.navigateTo({
						url:`/pages/pay/pay?orderId=${res.id}`
					});
				}
				
			}
		}
	}
</script>

<style scoped>
.confirm-order {
	background-color: #f7f7f7;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
}
.address-info {
	background-color: #ffffff;
	line-height: 30rpx;
	padding: 20rpx;
}
.user-info {
	display: flex;
	justify-content: space-between;
}
.user-name {
	font-weight: bold;
}
.item-list {
	background-color: #ffffff;
	padding: 20rpx;
}
.item-info {
	margin-top: 20rpx;
	padding: 10rpx 20rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #f7f7f7;
}
.item-img {
	width: 160rpx;
	height: 160rpx;
}
.item-desc {
	width: 360rpx;
	padding: 0 10rpx;
	font-size: 26rpx;
}
.item-size {
	font-size: 24rpx;
}
.item-name {
	font-size: 24rpx;
}
.text-right {
	text-align: right;
}
.shop-foot {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100rpx;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: #ffffff;
	border-top: 2rpx solid #f7f7f7;
}
.foot-count {
	line-height: 100rpx;
	padding: 0 20rpx;
	font-size: 32rpx;
}
.foot-num {
	background-color: #49bdfb;
	color: #ffffff;
	padding: 0 60rpx;
	line-height: 100rpx;
}
</style>
