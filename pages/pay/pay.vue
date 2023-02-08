<template>
	<view>
		<uniNavBar
			title="确认支付" 
			leftText="关闭" 
			fixed="true"
			statusBar="true"
			@clickLeft="onLeftClick"
		></uniNavBar>
		<view class="pay-main">
			<radio-group>
				<label>
					<view class="pay-item">
						<image class="pay-icon" src="../../static/img/pay-zfb.png"></image>
						<view>
							<view>支付宝支付</view>
							<view class="f-color">推荐支付宝用户使用</view>
						</view>
						<radio></radio>
					</view>
				</label>
				<label>
					<view class="pay-item">
						<image class="pay-icon" src="../../static/img/pay-wx.png"></image>
						<view>
							<view>微信支付</view>
							<view class="f-color">推荐有微信账号的用户使用</view>
						</view>
						<radio></radio>
					</view>
				</label>
			</radio-group>
		</view>
		
		<view class="pay-foot">
			<view class="foot-count"><text class="f-color">合计：</text>¥159.00</view>
			<view class="foot-num" @tap="goCallPay">去支付</view>
		</view>	
	</view>
</template>

<script>
	import $http from "@/common/api/request.js";
	import API from "@/utils/api.js";
	import uniNavBar from "@/components/uni/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue";
	export default {
		data() {
			return {
				
			}
		},
		components:{
			uniNavBar,
		},
		methods: {
			onLeftClick(){
				uni.navigateBack();
			},
			goCallPay(){
				//  服务端接通支付宝沙箱
				$http.request({
					url:API.ORDER.PAY,
					method:'POST',
					data:{
						orderId: this.orderId
					}
				}).then((res)=>{
					// 这个是服务端支付成功的返回url,应该需要传入默认值，并检查是否支付成功
					plus.runtime.openURL(res.paymentUrl);
				}).catch((e)=>{
					uni.showToast({
						title:"获取订单列表失败",
						icon:"none"
					})
				});
				// uni.requestPayment({
				// 	provider:"alipay",
				// 	orderInfo:,
				// 	success:(res)=> {
				// 		console.log(res);
				// 	},
				// 	fail:()=> {
						
				// 	}
				// })
				//todo 吊起支付app
				uni.navigateTo({
					url:'/pages/pay-success/pay-success'
				})
			}
		}
	}
</script>

<style scoped>
.pay-main {
	/* display: flex; */
}
.pay-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx;
	border-bottom: 2rpx solid #cccccc;
}
.pay-icon {
	width: 100rpx;
	height: 100rpx;
}
.pay-foot {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	border-top: 2rpx solid #f7f7f7;
}
.foot-count {
	flex: 1;
	line-height: 100rpx;
	padding: 0 20rpx;
	font-size: 26rpx;
	background-color: black;
	color: white;
}
.foot-num {
	background-color: #49bdfb;
	color: #ffffff;
	padding: 0 60rpx;
	line-height: 100rpx;
	font-size: 26rpx;
	width: 120rpx;
}
</style>
