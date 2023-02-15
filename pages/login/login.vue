<template>
	<view class="login">
		<swiper vertical="true" style="height: 100vh;">
			<swiper-item>
				<scroll-view>
					<view class="login-tel">
						<view class="tel-main">
							<view class="close" @tap="goBack">
								<image class="close-img" src="../../static/img/close.png"></image>
							</view>
							<view class="logo">
								<image class="logo-img" src="../../static/logo.png"></image>
							</view>	
							<view class="tel" @tap="goRegister">
								手机号注册
							</view>
							<OtherLogin></OtherLogin>
							<view class="go-login">
								<text>已有账号，去登陆</text>
								<image src="../../static/img/down.png"></image>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view>
					<view class="login-tel">
						<view class="tel-main">
							<view class="close close-content"  @tap="goBack">
								<view>
									<image class="close-img" src="../../static/img/close.png"></image>
								</view>
								
								<view class="go-login">
									<image class="close-img" src="../../static/img/up.png"></image>
									<text style="align-items: center;">没有账号，去注册</text>
								</view>
								<view></view>
							</view>
							<view class="login-form">
								<view class="login-user">
									<text class="form-label">账号</text><input v-model='username' type="text" placeholder="请输入手机号昵称"/>
								</view>
								<view class="login-user">
									<text class="form-label">密码</text><input v-model='userpwd' type="safe-password" placeholder="6-16为字符"/>
								</view>
							</view>
							<view class="login-quick">
								<view>忘记密码</view>
								<view>免密登陆?</view>
							</view>
							<view class="tel" @tap="submit">
								登陆
							</view>
							<view class="remind">
								温馨提示：您可选择免密登陆，方便快捷
							</view>
							<OtherLogin></OtherLogin>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<!--  -->
		
		
	</view>
</template>

<script>
	import $http from "@/common/api/request.js";
	import API from "@/utils/api.js";
	import OtherLogin from '../../components/LoginOther.vue';
	import {mapMutations} from 'vuex';
	export default {
		data() {
			return {
				username:"",
				userpwd:"",
				rules:{
					username:{
						rule:/\S/,
						msg:"用户名账号不能为空"
					},
					userpwd:{
						rule:/^[0-9a-zA-Z]{5,12}$/,
						msg:"密码应该是5-12为字符"
					}
				}
			}
		},
		components:{
			OtherLogin,
		},
		methods: {
			...mapMutations(['setToken']),
			goBack(){
				// uni.navigateBack();
				uni.switchTab({
					url:"/pages/index/index"
				})
			},
			submit(){
				if(this.validate('username') && this.validate('userpwd')){
					
					$http.request({
						url:API.USER.LOGIN,
						method:'POST',
						data:{
							username:this.username,
							password:this.userpwd
						}
					}).then((res)=>{
						console.log(JSON.stringify(res));
						this.setToken(res);
						this.goBack();
					}).catch((e)=>{
						console.log("bad request",e);
						uni.showToast({
							title:"请求失败",
							icon:"none"
						})
					});
				
				}
			},
			//判断验证是否复合要求
			validate(key){
				if(!this.rules[key].rule.test(this[key])){
					uni.showToast({
						title:this.rules[key].msg,
						icon:"none"
					});
					return false
				}
				return true;
			},
			goRegister(){
				uni.navigateTo({
					url:"/pages/phone-register/phone-register"
				})
			}
		}
	}
</script>

<style scoped>
.login-tel {
	width: 100vw;
	height: 100vh;
}
.tel-main {
	padding: 0 20rpx;
}
.close{
	/* padding: 120rpx 0; */
}
.close-img {
	width: 60rpx;
	height: 60rpx;
}
.logo {
	padding-bottom: 100rpx;
	display: flex;
	justify-content: center;
}
.tel {
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	color: white;
	background-color: #49bdfb;
	border-radius: 40rpx;
}

.go-login {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.go-login image {
	width: 60rpx;
	height: 60rpx;
}
/* 第二屏*/
.close-content {
	display: flex;
}
.close-content view {
	flex: 1;
}
.login-form {
	padding: 100rpx;
}
.login-user {
	font-size: 32rpx;
	padding: 10rpx 0;
	display: flex;
	border-bottom: 2rpx solid #f7f7f7;
	/* text-align: center; */
}
.form-label {
	padding-left: 10rpx;
}
.login-quick {
	display: flex;
	justify-content: space-between;
	padding: 20rpx 0;
}
.remind {
	color: #cccccc;
	padding: 20rpx 0;
	text-align: center;
}
</style>
