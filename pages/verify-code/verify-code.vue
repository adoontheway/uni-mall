<template>
	<view class='register'>
		<NewLine></NewLine>
		<view class="reg-main">
			<view class="tel-input">
				<text class="form-label">验证码</text>
				<input v-model='code' focus="true" type="text" placeholder="请输入验证码"/>
				<button plain="true" >{{msg}}</button>
			</view>
			<view class="remind">
				我们已经给您的手机{{tel}}发送了验证短信
			</view>
			<view class="next" @tap="submit">
				下一步
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import NewLine from '@/components/NewLine.vue';
	export default {
		data() {
			return {
				code:"",
				msg:"",
				tel:"",
				time:10,
				curInterval:-1
			}
		},
		components:{
			NewLine
		},
		onLoad(e){
			this.tel = e.tel;
			this.curInterval = setInterval(()=>{
				this.time--
			},1000);
		},
		methods: {
			submit(){
				
			}
		}
	}
</script>

<style scoped>
.register {
	width: 100vw;
	height: 100vh;
}
.reg-main {
	padding: 0 20rpx;
	align-items:center;
}
.form-label {
	padding: 0 10rpx;
}
.tel-input {
	/* font-size: 32rpx; */
	padding: 50rpx 10rpx;
	display: flex;
	border-bottom: 2rpx solid #f7f7f7;
	/* text-align: center; */
}
.next {
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	color: white;
	background-color: #49bdfb;
	border-radius: 40rpx;
}
.remind {
	text-align: center;
}
</style>

