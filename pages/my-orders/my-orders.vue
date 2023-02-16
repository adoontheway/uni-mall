<template>
	<view class="my-orders">
		<NewLine></NewLine>
		
		<view class="header">
			<view 
				class="header-item"
				:class="index == curTabIndex ? 'header-item-active' : ''"
				v-for="(item, index) in dataList"
				@tap="selectTab(index)"
				:key="index"
			>
				{{item.name}}
			</view>
		</view>
		
		<block 
			v-for="(v,k) in dataList"
			:key="k"
		>
			<view
				v-show="curTabIndex === k"
			>
				<scroll-view scroll-y="true">
					
					<!-- 有订单的时候 -->
					<view class="orders-main" v-if="v.list.length !== 0 ">
						<view v-for="(s,si) in v.list" :key="si">
							<!-- 店家和买家信息 -->
							<view class="shop-info">
								<view class="shop-part">
									<image class="shop-icon" src="https://cdn.adxwork.com/mall-server/static/img/14.jpeg"></image>
									<view class="shop-name">
										太湖雪床上用品专卖店
									</view>
									<view class="iconfont icon-xiaoxi"></view>
								</view>
								<view class="pay-status f-active-color">{{s.status}}</view>
							</view>
							
							<!-- 商品详情 -->
							<view 
								class="item-info"
								v-for="(good, gidx) in s.goods_item"
								:key="gidx"
							>
								<image class="item-img" :src="good.imgUrl"></image>
								<view class="item-desc">
									<view class="item-name">{{good.name}}</view>
									<view class="item-size f-color">{{good.attrs}}</view>
									<view class="f-active-color" style="font-size: 24rpx;">7天无理由</view>
								</view>
								<view>
									<view>¥{{good.pprice}}</view>
									<view class="f-active-color">x {{good.num}}</view>
								</view>
							</view>
							
							<NewLine></NewLine>
							
							<!-- 总价 -->
							<view class="total-price">
								订单金额：<text class="f-active-color">¥39.00</text>(含运费¥0.00)
							</view>
							<NewLine></NewLine>
						</view>
						
						<!-- 支付 -->
						<view class="pay">
							<view class="pay-text f-active-color">支付</view>
						</view>
					</view>
					<!-- 没有订单的时候 -->
					<view class="no-order" v-else>
						<view>您还没有相关订单</view>
						<view class="go-index" @tap="goIndex">去首页逛逛</view>
					</view>
				</scroll-view>
			</view>
		</block>
		
	</view>
</template>

<script>
	import NewLine from '@/components/NewLine.vue';
	import { mapMutations,mapState } from "vuex";
	export default {
		data() {
			return {
				curTabIndex:0,
			}
		},
		onShow() {
			this.initOrderFn();
		},
		computed : {
			...mapState({
				dataList:state=>state.order.dataList,
			}),
		},
		onLoad(){
			//测试角标
			uni.setTabBarBadge({
			  index: 0,
			  text: '1'
			})
		},
		components:{
			NewLine
		},
		methods: {
			...mapMutations(['initOrderFn']),
			selectTab(index){
				this.curTabIndex = index;
			},
			goIndex(){
				
			}
		}
	}
</script>

<style scoped>
.my-orders {
	background-color: #f7f7f7;
}
.header {
	background-color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 2rpx solid #f7f7f7;
}
.header-item {
	flex: 1;
	text-align: center;
	line-height: 120rpx;
}
.header-item-active {
	border-bottom: 4rpx solid #49BDFB;
}
.no-order {
	/* position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: #f7f7f7; */
	
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.go-index {
	border-radius: 40rpx;
	border: 2rpx solid #49BDFB;
	color: #49BDFB;
	padding: 6rpx 60rpx;
}
.orders-main {
	padding: 20rpx 10rpx;
}
.shop-info {
	background-color: #ffffff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx 0;
}
.shop-icon {
	width: 48rpx;
	height: 48rpx;
	border-radius: 100%;
}
.shop-part {
	font-size: 24rpx;
	display: flex;
	align-items: center;
	justify-items: center;
	line-height: 30rpx;
}
.shop-part .iconfont {
	width: 48rpx;
	height: 48rpx;
	padding: 20rpx 0;
}
.shop-name {
	padding: 20rpx 0;
}
.item-info {
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
.total-price {
	display: flex;
	justify-content: flex-end;
	background-color: white;
	padding: 20rpx;
}
.pay {
	display: flex;
	justify-content: flex-end;
	background-color: white;
	padding: 20rpx;
}
.pay-text {
	border: 2rpx solid #49BDFB;
	border-radius: 30rpx;
	padding: 6rpx 40rpx;
}
</style>
