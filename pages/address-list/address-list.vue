<template>
	<view class="address-list">
		<view class="list">
			<view 
				class="address-item"
				v-for="(item, index) in list"
				:key="index"
				@tap="goNewAddress(index)"
			>
				<view class="item-parts">
					<view>{{item.name}}</view>
					<view>{{item.tel}}</view>
				</view>
				<view class="item-parts">
					<view class="active" v-show="item.isDefault">默认</view>
					<view>{{item.city}} {{item.details}}  </view>
				</view>
			</view>
		</view>
		<view class="new-address" @tap="goNewAddress(-1)">
			<view class="new-address-btn">新增地址</view>
		</view>
		
	</view>
</template>

<script>
	import {mapState} from "vuex";
	export default {
		data() {
			return {
				delBtnWidth:160,
				type:"",
			}
		},
		computed:{
			...mapState({
				list:state=>state.address.list
			})
		}, 
		onLoad(e){
			this.type = e.type;
		},
		methods: {
			goNewAddress(index){
				// 如果是选择地址
				if(this.type =="select"){
					uni.$emit("address-selected",{index:index});
					uni.navigateBack({
						delta:1
					});
				}else{
					// 如果是新增或者编辑地址信息
					uni.navigateTo({
						url:`/pages/new-address/new-address?index=${index}`
					})
				}
				
			},
		}
	}
</script>

<style scoped>
.new-address {
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 20rpx;
	padding: 20rpx 0;
}
.new-address-btn {
	border: 2rpx solid #49bdfb;
	color: #49bdfb;
	border-radius: 30rpx;
	padding: 6rpx 60rpx;
}
.list {
	padding-left: 20rpx;
}
.address-item {
	padding: 10rpx;
	border-bottom: 2rpx solid #cccccc;
}
.item-parts {
	display: flex;
	align-items: center;
}
.active {
	padding-right: 10rpx;
	background-color: #49bdfb;
	color: #ffffff;
	border-radius: 20rpx;
	font-size: 24rpx;
	text-align: center;
}
</style>
