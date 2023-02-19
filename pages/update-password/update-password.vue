<template>
	<view class="update-password">
		<view class="item">
			<view class="label">旧密码</view>
			<input v-model='oldpwd' type="text" placeholder="旧密码"/>
		</view>
		<view class="item">
			<view class="label">新密码</view>
			<input v-model='newpwd' type="text" placeholder="新密码"/>
		</view>
		<view class="item">
			<view class="label">确认密码</view>
			<input v-model='newpwd2' type="text" placeholder="确认密码"/>
		</view>
		<view class="my-exit" @tap="save">保存</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldpwd:'',
				newpwd:'',
				newpwd2:'',
			}
		},
		methods: {
			save(){
				
			}
		}
	}
</script>

<style scoped>
.update-password{
	margin-top: 20rpx;
	background-color: #ffffff;
}
.item {
	display: flex;
	padding: 20rpx;
	border: 2rpx solid #cccccc;
}
.item * {
	padding-left: 20rpx;
}
.label {
	width: 150rpx;
}
.my-exit {
	background-color: #49bdfb;
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	color: #ffffff;
	text-align: center;
	font-size: 32rpx;
	align-items: center;
}
</style>
