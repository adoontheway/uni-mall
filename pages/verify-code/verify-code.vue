<template>
	<view>
		<NewLine></NewLine>
		<view class="login-tel">
			<view class="tel-main">
				<view class="login-form">
					<view class="login-user">
						<text class="user-text">验证码</text>
						<input v-model='code' focus="true" type="text" placeholder="请输入验证码"/>
						<button plain="true" :disabled="disabled" @tap="sendCode ">{{codeMsg}}</button>
					</view>
				</view>
				<view class="remind">
					我们已经给您的手机<text style="color: #49BDFB;">13000000000</text>发送了验证短信
				</view>
				<view class="tel" @tap="submit">
					下一步
				</view>
			</view>
			
			
		</view>
		
	</view>
</template>

<script>
	
	import NewLine from '@/components/NewLine.vue';
	export default {
		data() {
			return {
				// 输入的内容 
				code:"",
				// 按钮文本
				codeMsg:"重新发送",
				// 发送的手机号码
				tel:"",
				// 倒计时时间
				time:10,
				// 按钮是否disable
				disabled:false,
			} 
		},
		components:{
			NewLine
		},
		onReady(e){
			// this.tel = e.tel;
			this.sendCode();
		},
		methods: {
			submit(){
				//todo 需要向后端发起请求
				uni.switchTab({
					url:"/pages/index/index"
				})
			},
			sendCode(){
				this.disabled = true;
				this.codeMsg = `重新发送 (${this.time}秒)`;
				let timer = setInterval(()=>{
					--this.time;
					this.codeMsg = `重新发送 (${this.time}秒)`;
					if(this.time <= 0){
						clearInterval(timer);
						this.codeMsg = `重新发送`;
						this.disabled = false;
						this.time = 10;
					}
				},1000);
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
.login-form {
	padding: 30rpx 0;
}
.login-user {
	font-size: 32rpx;
	padding: 10rpx 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	border-bottom: 2rpx solid #f7f7f7;
}
.user-text {
	padding-right: 10rpx;
}
.tel {
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	color: #ffffff;
	background-color: #49BDFB;
	border-radius: 40rpx;
}
.remind {
	text-align: center;
	padding-bottom: 30rpx;
}
</style>

