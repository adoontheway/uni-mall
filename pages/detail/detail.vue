 <template>
	<view class="detail">
		<swiper
			indicator-dots="true"
			:autoplay="true"
			:interval="3000"
			:duration="1000"
		>
			<swiper-item
				v-for="(item, index ) in swiperList"
				:key="index"
			>
				<view class="swiper-item">
					<image :src="item.imgUrl" class="swiper-img"></image>
				</view>
				
			</swiper-item>
		</swiper>
		
		<view class="detail-goods">
			<view class="price">$399.99</view>
			<view class="oprice">$599.00</view>
			<view class="good-name">
				Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米
			</view>
		</view>
		
		<view>
			<view>
				<image class="detail-img" src="'../../static/img/preview0.png'"></image>
			</view>
			<view>
				<image class="detail-img" src="'../../static/img/preview1.png'"></image>
			</view>
			<view>
				<image class="detail-img" src="'../../static/img/preview2.png'"></image>
			</view>
		</view>
		<!-- 商品列表 -->
		<Card cardTitle="看了又看"></Card>
		<CommodityList  :dataList="shopList"></CommodityList>
		<!-- 底部 -->
		<view 
			class="detail-foot"
		>
			<view class="iconfont icon-xiaoxi"></view>
			<view class="iconfont icon-gouwuche" @tap="goCart"></view>
			<view 
				class="add-cart"
				@tap="addCart"
			>加入购物车</view>
			<view 
				class="buy-now"
				@tap="buyNow"
			>立即购买</view>
		</view>
		<!-- 弹出框 -->
		<view class="pop" v-show="isPop" @touchmove.stop.prevent=''>
			<view class="mask" @tap="hidePop"></view>
			<view class="pop-box" :animation="animationData">
				<view>
					<image class="pop-icon" src="../../static/img/item1.jpeg"></image>
				</view>
				<view class="pop-count">
					<view>购买数量</view>
					<NumberBox 
						:min="1" 
						:value="num"
						@change="onNumChange($event)"
					></NumberBox>
				</view>
				<view class="pop-sub" @tap="addCart">
					<text>确定</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import $http from "@/common/api/request.js";
	import NumberBox from "@/components/uni/uni-number-box/components/uni-number-box/uni-number-box.vue";
	import Card from "@/components/Card.vue";
	import CommodityList from "@/components/CommodityList.vue";
	
	import {mapMutations} from "vuex";
	export default {
		data() {
			return {
				isPop:false,
				num:1,
				animationData:{},
				goodsInfo:{},
				swiperList:[
					{imgUrl:'../../static/img/preview0.png'},
					{imgUrl:'../../static/img/preview1.png'},
					{imgUrl:'../../static/img/preview2.png'}
				],
				shopList:[
					{
						id:1,
						imgUrl:"../../static/img/item2.jpeg",
						name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
						pprice:"199.00",
						oprice:"299.00",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/img/item1.jpeg",
						name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
						pprice:"188.00",
						oprice:"299.00",
						discount:"5.0"
					},
					{
						id:3,
						imgUrl:"../../static/img/item0.jpeg",
						name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
						pprice:"188.00",
						oprice:"399.00",
						discount:"4.0"
					},
					{
						id:4,
						imgUrl:"../../static/img/item2.jpeg",
						name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
						pprice:"199.00",
						oprice:"299.00",
						discount:"5.2"
					},
					{
						id:5,
						imgUrl:"../../static/img/item1.jpeg",
						name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
						pprice:"188.00",
						oprice:"299.00",
						discount:"5.0"
					},
				]
			}
		},
		components:{
			Card,
			CommodityList,
			NumberBox
		},
		onLoad(e) {
			this.getData(e.id);
		},
		//todo 这里需要做一个分享界面来分享到不同平台
		onNavigationBarButtonTap(e) {
			if(e.type == "share"){
				uni.share({
					imageUrl:this.goodsInfo.imgUrl,
					provider:"weixin",
					type:0,
					scene:"WXSceneSession",
					title:this.goodsInfo.name,
					href:getCurrentPages(),
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
						uni.showTabBar({
							title:"分享成功"
						})
					},
					fail: function (err) {
						console.log("fail:" + JSON.stringify(err));
					}
				})
			}
		},
		// 返回行为
		onBackPress() {
			if(this.isPop){
				this.hidePop();
				return;//此处必须return
			}
		},
		methods: {
			...mapMutations(["addGood"]),
			showPop(){
				var animation = uni.createAnimation({
				  duration: 200,
				});
				animation.translateY(600).step();
				this.animationData = animation.export();
				setTimeout(()=>{
					animation.translateY(0).step();
					this.animationData = animation.export();
				},200);
			},
			addCart(){
				this.showPop();
				this.isPop = true;
			},
			buyNow(){
				this.showPop();
				this.isPop = true;
			},
			hidePop(){
				var animation = uni.createAnimation({
				  duration: 1000,
				});
				animation.translateY(600).step();
				this.animationData = animation.export();
				setTimeout(()=>{
					animation.translateY(0).step();
					this.isPop = false;
				},2000);
				
			},
			getData(id){
				$http.request({
					url:"/godds/id?id="+id,
				}).then((res)=>{
					this.goodsInfo = res;
				}).catch((e)=>{
					uni.showToast({
						title:"请求失败",
						icon:"none"
					})
				});
			},
			onNumChange(value){
				this.num = value;
			},
			goCart(){
				uni.switchTab({
					url:"/pages/cart/cart"
				})
			},
			addCart(){
				this.goodsInfo['checked'] = false;
				this.goodsInfo['num'] = this.num; 
				this.addGood(this.goodsInfo);
				this.hidePop();
				uni.showToast({
					title:'加入购物车成功',
					icon:'none'
				})
			}
		}
	}
</script>

<style scoped>
swiper {
	width: 100%;
	height: 700rpx;
}
.detail{
	padding-bottom: 90rpx;
}
.swiper-img {
	width: 100%;
	height: 700rpx;
}
.detail-goods {
	text-align: center;
	font-weight: bold;
	font-size: 36rpx;
	padding: 10rpx 0;
}
.oprice {
	text-decoration: line-through;
}
.detail-img {
	width:100%;
}
.detail-foot {
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 90rpx;
	background-color: #ffffff;
}
.detail-foot .iconfont{
	width: 60rpx;
	height: 60rpx;
	background-color: #000000;
	border-radius: 100%;
	color: #ffffff;
	text-align: center;
	align-items: center;
	margin: 0 10rpx;
}
.add-cart {
	margin:0 40rpx;
	padding:6rpx 30rpx;
	background-color: #000000;
	color:#ffffff;
	border-radius: 40rpx;
}
.buy-now {
	margin:0 40rpx;
	padding:6rpx 30rpx;
	background-color: #49BDFB;
	color:#ffffff;
	border-radius: 40rpx;
	text-align: center;
	align-items: center;
}
.pop {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;
}
.mask {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
}
.pop-box {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 400px;
	background-color: #ffffff;
}
.pop-icon {
	width: 260rpx;
	height: 260rpx;
	top: -50rpx;
	padding-left: 20rpx;
}
.pop-count {
	display: flex;
	padding: 20rpx;
	justify-content: space-between;
}
.pop-sub {
	line-height: 80rpx;
	background-color: #49bdfb;
	color: #ffffff;
	text-align: center;
}
</style>
