<template>
	<view class='register'>
		<NewLine></NewLine>
		<view class="reg-main">
			<view class="tel-input">
				<text class="form-label">手机号</text>
				<input v-model='phoneno' focus="true" type="number" placeholder="请输入11位手机号"/>
			</view>
			<view class="next" @tap="submit">
				下一步
			</view>
			<view class="remind">
				继续注册表示您阅读并同意<text class="f-active-color">《京东商城（含App）服务协议》</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	import $http from "@/common/api/request.js";
	import API from "@/utils/api.js";
	import NewLine from '@/components/NewLine.vue';
	export default {
		data() {
			return {
				phoneno:"",
				rules:{
					phoneno:{
						rule:/^1[3-9]\d{9}$/,
						msg:"请输入11位手机号"
					},
				}
			}
		},
		components:{
			NewLine
		},
		methods: {
			submit(){
				if(this.validate('phoneno')){
					$http.request({
						url:API.USER.REGISTER,
						methods:'POST',
						data:{
							tel:this.phoneno,
						}
					}).then((res)=>{
						console.log(JSON.stringify(res));
						if(res.code === 0){
							uni.navigateTo({
								url:`/pages/verify-code/verify-code?tel=${this.phoneno}`
							})
						}else{
							uni.showToast({
								title:res.msg,
								icon:"none"
							})
						}
							
					}).catch((e)=>{
						uni.showToast({
							title:"请求失败",
							icon:"none"
						})
					});
					
				}
			},
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
	/* display:flex; */
	/* flex-direction:column; */
	/* justify-content:center; */
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
