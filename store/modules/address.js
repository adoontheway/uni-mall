import $http from "@/common/api/request.js";
import API from "@/utils/api.js";
export default {
	state:{
		list :[
			{
				id:1000,
				name:"吴彦祖",
				tel:"13000000000",
				city:"香港特别行政区",
				details:"九龙大道001号",
				isDefault:false,
				cityCode:'10001'
			},
			{
				id:1001,
				name:"任贤齐",
				tel:"13000000001",
				city:"湖北省武汉市武昌区",
				details:"黄鹤楼1楼001号",
				isDefault:true,
				cityCode:'10002'
			},
		]
	},
	getters:{
		defaultAddress(state){
			return state.list.filter(v=> v.isDefault);
		}
	},
	mutations:{
		initAddress(state){
			$http.request({
				url:API.ADDRESS.LIST,
			}).then((res)=>{
				this.list = res;
			}).catch((e)=>{
				uni.showToast({
					title:"请求地址信息失败",
					icon:"none"
				})
			});
		},
		createAddress(state, obj){
			$http.request({
				url:API.ADDRESS.ADD,
			}).then((res)=>{
				state.list.push(obj);
			}).catch((e)=>{
				uni.showToast({
					title:"新增地址失败",
					icon:"none"
				})
			});
			state.list.push(obj);
		},
		updateAddress(state, {index, obj}){
			// console.log("UPDATE",index,JSON.stringify(obj))
			$http.request({
				url:API.ADDRESS.UPDATE,
			}).then((res)=>{
				state.list.push(obj);
			}).catch((e)=>{
				uni.showToast({
					title:"修改地址信息失败",
					icon:"none"
				})
			});
			state.list[index] = obj;
		},
		
		resetDefault(state){
			state.list.forEach(v=>{
				if(v.isDefault){
					v.isDefault = false;
				}
			})
		}
	},
	actions:{
		createAddressFn({commit},obj){
			if(obj.isDefault){
				commit('resetDefault');
			}
			commit('createAddress',obj);
		},
		updateAddressFn({commit}, obj){
			console.log(JSON.stringify(obj));
			if(obj.obj.isDefault){
				commit('resetDefault');
			}
			commit('updateAddress',obj);
		}
	}
}