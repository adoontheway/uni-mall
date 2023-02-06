<template>
	<view class="login-other">
		<view class="other-txt">
			<view>或者用一下方式登陆</view>
		</view>
		<view class="other">
			<view class="other-item" @tap="loginWith3rd('weixin')">
				<image class="other-img" src="../static/img/weixin.png"></image>
				<view>微信登陆</view>
			</view>
			<view class="other-item" @tap="loginWith3rd('qq')">
				<image class="other-img" src="../static/img/QQ.png"></image>
				<view>QQ登陆</view>
			</view>
			<view class="other-item" @tap="loginWith3rd('sinaweibo')">
				<image class="other-img" src="../static/img/sina.png"></image>
				<view>微博登陆</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"login-other",
		data() {
			return {
				
			};
		},
		method:{
			loginWith3rd(model){
				uni.login({
					provider:model,
					success:(res)=> {
						// weixin
						// {
						// 	code:'',
						// 	authResult:{
						// 		access_token:'',
						// 		code:'',
						// 		expires_in:0,
						// 		openid:'',
						// 		refresh_token:'',
						// 		scope:'',
						// 		unionid:''
						// 	},
						// 	errMsg:''
						// }
						// qq
						// {
						// 	authResult:{
						// 		access_token:'',
						// 		expires_in:0,
						// 		openid:'',
						// 		scope:'',
						// 	},
						// 	errMsg:''
						// }
						//需要将openid存放起来，作为唯一身份
						
						// 获取用户信息
						uni.getUserInfo({
							provider:model,
							success:(res)=>{
								//weixin
								// {
								// 	errMsg:''.
								// 	userInfo:{
								// 		openId:'',
								// 		nickName:'',
								// 		gender:1,
								// 		city:'',
								// 		province:'',
								// 		country:'',
								// 		avatarUrl:'',
								// 		unionId:''
								// 	}
								// }
								//qq
								// {
								// 	errMsg:''.
								// 	userInfo:{·
								// 		openId:'',
								// 		nickName:'',
								// 		gender:'',
								// 		gender_type:1,
								// 		city:'',
								// 		province:'',
								// 		country:'',
								// 		headimgurl:'',
								// 		unionId:''
								// 	}
								// }
								
								// todo 需要给服务端传递用于生成账号的值
								// {
									// provider,
									// openid,
									// nickname,
									// imgUrl
								// }
							}
						})
					}
				})
			}
		}
	}
</script>

<style scoped>
/*其他登陆方式*/
.login-other {
	padding:100rpx 0;
}
.other-txt {
	display: flex;
	padding: 50rpx 0;
}
.other-txt view{
	line-height: 0rpx;
	padding: 0 10rpx;
}
.other-txt:before {
	flex:1;
	content: '';
	height: 2rpx;
	background-color: #cccccc;
}
.other-txt::after {
	flex:1;
	content: '';
	height: 2rpx;
	background-color: #cccccc;
}
.other {
	display: flex;
	justify-content: space-around;
}
.other-item {
	display: flex;
	justify-content: center;
	align-items: center;
}
.other-item image {
	width: 80rpx;
	height: 80rpx;
}
/* end 其他登陆方式*/
</style>