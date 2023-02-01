<template>
	<view class="shop-cart">
		<template v-if="dataList.length > 0">
			<uniNavBar
				title="购物车" 
				:rightText="isEditing ? '完成':'编辑'" 
				fixed="true"
				statusBar="true"
				@clickLeft="onLeftClick"
				@clickRight="onRightClick"
			></uniNavBar>
			<!-- 商品neir -->
			<view class="shop-list">
				<view 
					class="shop-item"
					v-for="(item,index) in dataList"
					:key="index"
								
				>
					<radio 
						:checked="item.checked" 
						@tap="selectItem(index)"
					>
						
					</radio>
					<image class="shop-img" :src="item.imgUrl"></image>
					<view class="shop-desc">
						<view class="shop-name">{{item.name}}</view>
						<view class="shop-color f-color">{{item.desc}}</view>
						<view class="shop-price">
							<view>{{item.price}}</view>
							<template v-if="!isEditing">
								<view>*{{item.num}}</view>
							</template>
							<template v-else>
								<NumberBox :min="1" :value="item.num" @change="changeNum($event, index)"></NumberBox>
							</template>
						</view>
					</view>
				</view>
				
			</view>
			
			<view class="shop-foot">
				<view class="foot-radio">
					<radio 
						color="#ff3333" 
						:checked="checkedAll" 
						@tap="checkAll"
					>
						全选	
					</radio>
				</view>
					
				<view class="foot-total">
					<template v-if="isEditing">
						<view class="foot-count ">合计：<text class="f-active-color">¥{{totalCount.price}}</text></view>
						<view class="foot-num" @tap="goConfirm">结算：（{{totalCount.num}}）</view>
					</template>	
					<template v-else>
						<view class="foot-num" style="background-color: black;">移入收藏夹</view>
						<view class="foot-num" @tap="delGoods()">删除</view>
					</template>
				</view>
			</view>
			
		</template>
		<template v-else>
			<uniNavBar
				title="购物车" 
				statusBar="true"
				fixed="true"
			></uniNavBar>
			<view class="shop-list-empty">
				<text>囧～购物车还是空的</text>
			</view>
		</template>
		
		
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue";
	import NumberBox from "@/components/uni/uni-number-box/components/uni-number-box/uni-number-box.vue";
	import {mapState,mapActions,mapGetters,mapMutations} from "vuex";
	export default {
		data() {
			return {
				isEditing:false,
			}
		},
		components:{
			uniNavBar,
			NumberBox
		},
		computed:{
			...mapState({
				dataList:state=>state.cart.dataList
			}),
			...mapGetters([
				'checkedAll',
				'totalCount'
				])
		},
		methods: {
			...mapActions(['checkAll','delGoods']),
			...mapMutations(['selectItem']),
			onLeftClick(){
				
			},
			onRightClick(){
				this.isEditing = true;
			},
			changeNum(event, index){
				this.dataList[index].num = event;
			},
			goConfirm(){
				uni.navigateTo({
					url:"/pages/confirm-order/confirm-order"
				})
			}
		}
	}
</script>

<style scoped>
.shop-list {
	padding-bottom: 100rpx;
}
.shop-list-empty{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: #f7f7f7;
	
	display: flex;
	align-items: center;
	justify-content: center;
}
.shop-item {
	display: flex;
	padding: 20rpx;
	align-items: center;
	background-color: #f7f7f7;
	margin-bottom: 10rpx;
}
.shop-img {
	width: 200rpx;
	height: 200rpx;
}
.shop-desc {
	flex: 1;
	padding-left: 20rpx;
}
.shop-color {
	font-size: 24rpx;
}
.shop-price {
	display: flex;
	justify-content: space-between; 
}
.shop-foot {
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
.foot-radio {
	padding-left: 20rpx;
}
.foot-total {
	display: flex;
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
