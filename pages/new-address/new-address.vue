<template>
	<view class="main">
		<view class="add-item">
			<view>收 件 人</view>
			<input placeholder="收件人姓名" v-model="addrObj.name"/>
		</view>
		<view class="add-item">
			<view>手 机 号</view>
			<input placeholder="11位手机号" v-model="addrObj.tel"/>
		</view>
		<view class="add-item">
			<view>所在地区</view>
			<view 
				@tap="showCityPicker" 
				style="flex:1; text-align: right; padding-right: 10rpx;"
			>{{addrObj.city}}</view>
			<mpvueCityPicker 
				ref="mpvueCityPicker"
				:pickerValueDefault="pickerValueDefault"
				@onConfirm="onConfirm"
			></mpvueCityPicker>
		</view>
		<view class="add-item">
			<view>详细地址</view>
			<input placeholder="5-60个字符" v-model="addrObj.details"/>
		</view>
		<view class="add-item">
			<view>邮编</view>
			<input placeholder="可选填"/>
		</view>
		<view class="add-item">
			<checkbox-group @change="radioChange">
				<label>
					<checkbox :checked="addrObj.isDefault">设为默认地址</checkbox>
				</label>
			</checkbox-group>
			
		</view>
	</view>
</template>

<script>
	import $http from "@/common/api/request.js";
	import mpvueCityPicker from "@/components/uni/mpvue-citypicker/mpvueCityPicker.vue";
	import {mapActions,mapState} from "vuex";
	export default {
		data() {
			return {
				addrObj:{
					city:"请选择",
					name:"",
					tel:"",
					details:"",
					isDefault:false,
					cityCode:""
				},
				pickerValueDefault:[0,0,1],
				index:-1,
			}
		},
		computed:{
			...mapState({
				list:state=>state.address.list
			})
		}, 
		components:{
			mpvueCityPicker
		},
		onLoad(e){
			this.index = parseInt(e.index);
			if(this.index !== -1){
				// 不能直接赋值，那是同一个引用
				// 在这里直接修改list里面的值的话不合理
				this.addrObj ={...this.list[this.index]} ; 
				uni.setNavigationBarTitle({
					title:"修改地址"
				});
			}
		},
		onNavigationBarButtonTap(){
			//新增
			if(this.index === -1){
				this.createAddressFn(this.addrObj);
			}else{// 修改
				this.updateAddressFn({index:this.index,obj:this.addrObj});
			}
			
			uni.navigateBack();
		},
		methods: {
			...mapActions(["createAddressFn","updateAddressFn"]),
			showCityPicker(){
				this.$refs.mpvueCityPicker.show();
			},
			onConfirm(e){
				this.addrObj.city = e.label;
				this.addrObj.cityCode = e.cityCode;
			},
			radioChange(e){
				this.addrObj.isDefault = !this.addrObj.isDefault;
			}
		}
	}
</script>

<style scoped>
.main {
	padding-left: 20rpx;
	
}
.add-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16rpx 0;
	width: 100%;
	border-bottom: 2rpx solid #cccccc;
}
.add-item input {
	flex: 1;
	text-align: left;
	padding-left: 10rpx;
}
</style>
