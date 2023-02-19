<template>
	<view class="user-info">
		<view class="my-header">
			<view class="header-main">
				<view class="header-logo" >
					<image class="header-img" :src="loginStatus ? userInfo.icon:'http://cdn.adxwork.com/mall-app/static/img/16.png'"></image>
					<view class="f-color">点击修改头像</view>
				</view>
			</view>
		</view>
		
		<view class="info part">
			<view class="item">
				<view class="label">用户ID</view>
				<view>8447644</view>
			</view>
			<view class="item">
				<view class="label">昵称</view>
				<input v-model='nickname' type="text" placeholder="请输入昵称"/>
			</view>
			<view class="item">
				<view class="label">性别</view>
				<view>
					<radio-group @change="radioChange" >
						<label >
								<radio :value="'1'" :checked="gender === '1'" />男
						</label>
						<label >
								<radio :value="'2'" :checked="gender === '2'" />女
						</label>
					</radio-group>
				</view>
			</view>
			
			<view class="item">
				<view class="label">生日</view>
				<view class="date-chose">
					<view>{{birthday}}</view>
					<uDatetimePicker v-model="birthday">选择生日 ></uDatetimePicker>
				</view>
			</view>
			
			<view class="item">
				<view class="label">城市</view>
				<view
					@tap="showCityPicker" 
					style="flex:1; text-align: right; padding-right: 10rpx;"
				>{{addrObj.province}} {{addrObj.city}} {{addrObj.region}}</view>
				<mpvueCityPicker 
					ref="mpvueCityPicker"
					:pickerValueDefault="pickerValueDefault"
					@onConfirm="onConfirm"
				></mpvueCityPicker>
			</view>
			
			<view class="item">
				<view class="label">职业</view>
				<input v-model='career' type="text" placeholder="请填写您的职业"/>
			</view>
			
			<view class="item">
				<view class="label">个性签名</view>
				<input v-model='slogan' type="text" placeholder="请填写您的个性签名"/>
			</view>
		</view>
		<view>喜欢的分类</view>
		<view class="category part">
			<view
				class="cate-item"
				v-for="(item, index ) in category_liked"
				:key="index"
			>
			{{item}}
			</view>
		</view>
		
		<view class="my-exit" @tap="save">保存</view>
	</view>
</template>

<script>
	import mpvueCityPicker from "@/components/uni/mpvue-citypicker/mpvueCityPicker.vue";
	import uDatetimePicker from '@/components/uni/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue';
	import {mapState} from 'vuex';
	export default {
		data() {
			return {
				nickname:"",
				gender:'1',
				birthday:'',
				career:"",
				slogan:"",
				addrObj:{
					province:'',
					city:"选择城市 >",
					region:'',
					name:"",
					phoneNumber:"",
					detailAddress:"",
					defaultStatus:0,
					postCode:""
				},
				pickerValueDefault:[0,0,1],
				category_liked:[
					'服装','餐厨','配件',
					'居家','洗护','婴童',
					'杂志','饮食','志趣',
				]
			}
		},
		components:{
			uDatetimePicker,
			mpvueCityPicker
		},
		watch: {
			birthday(newval) {
				console.log('单选:', this.birthday);
			},
			
		},
		computed:{
			...mapState({
				loginStatus:state=>state.user.loginStatus,
				userInfo:state=>state.user.userInfo,
			})
		},
		methods: {
			 radioChange: function(evt) {
				this.gender = evt.detail.value;
			},
			maskClick(e){
				console.log('maskClick事件:', e);
			},
			showCityPicker(){
				this.$refs.mpvueCityPicker.show();
			},
			onConfirm(e){
				let arr = e.label.split("-");
				this.addrObj.province = arr[0];
				this.addrObj.city = arr[1];
				this.addrObj.region = arr[2];
				this.addrObj.postCode = e.cityCode;
			},
			showDatePicker(){
				this.$refs.datePicker.show();
			},
			save(){
				
			}
		}
	}
</script>

<style scoped>
.my-header {
	background: url('http://cdn.adxwork.com/mall-app/static/img/2.png') no-repeat;
	width: 100%;
	height: 400rpx;
}
.header-main {
	position: relative;
	top: 120rpx;
}
.header-logo {
	position: absolute;
	width: 180rpx;
	height: 180rpx;
	left: 50%;
	margin-left: -60rpx;
	font-size: 20rpx
}
	
.header-img {
	width: 120rpx;
	height: 120rpx;
	border: 2rpx solid #cccccc;
	border-radius: 50%;
	background-color: #ffffff;
}
.part {
	margin-top: 20rpx;
	background-color: #ffffff;
}
.item {
	display: flex;
	padding: 20rpx;
	border: 2rpx solid #cccccc;
}
.label {
	width: 150rpx;
}
.item * {
	padding-left: 20rpx;
}
.info {
	
}
.category{
	display: flex;
	flex-wrap: wrap;
}
.cate-item {
	width: 140rpx;
	height: 50rpx;
	border: 2rpx solid #cccccc;
	border-radius: 50rpx;
	text-align: center;
	padding: 8rpx;
	margin: 10rpx;
}
.date-chose {
	flex: 1;
	background-color: aliceblue;
	display: flex;
	justify-content: space-between;
}
.my-exit {
	background-color: #49bdfb;
	width: 100%;
	height: 80rpx;
	color: #ffffff;
	text-align: center;
	font-size: 32rpx;
	line-height: 80rpx;
	align-items: center;
}
</style>
