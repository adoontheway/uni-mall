import $http from "@/common/api/request.js";
import API from "@/utils/api.js";
export default {
	state:{
		flag:false,//是否已经初始化
		list :[
			// {
			// 	id:1000,
			// 	name:"吴彦祖",
			// 	tel:"13000000000",
			// 	city:"香港特别行政区",
			// 	details:"九龙大道001号",
			// 	isDefault:false,
			// 	cityCode:'10001'
			// },
			// {
			// 	id:1001,
			// 	name:"任贤齐",
			// 	tel:"13000000001",
			// 	city:"湖北省武汉市武昌区",
			// 	details:"黄鹤楼1楼001号",
			// 	isDefault:true,
			// 	cityCode:'10002'
			// },
		]
	},
	getters:{
		defaultAddress(state){
			return state.list.filter(v=> v.defaultStatus == 1);
		}
	},
	mutations:{
		//todo 修正没有token清空下也去获取地址的bug
		initAddress(state){
			$http.request({
				url:API.ADDRESS.LIST,
			}).then((res)=>{
				state.list = res;
			}).catch((e)=>{
				uni.showToast({
					title:"请求地址信息失败",
					icon:"none"
				})
			});
		},
		createAddress(state, obj){
			
			state.list.push(obj);
		},
		updateAddress(state, {index, obj}){
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
			if(obj.defaultStatus != 0){
				commit('resetDefault');
			}
			
			$http.request({
				url:API.ADDRESS.ADD,
				method:'POST',
				data:obj
			}).then((res)=>{
				// state.list.push(obj);
				// commit('createAddress',obj);
				commit('initAddress');
			}).catch((e)=>{
				uni.showToast({
					title:"新增地址失败",
					icon:"none"
				})
			});
			
		},
		updateAddressFn({commit}, obj){
			console.log(JSON.stringify(obj));
			if(obj.obj.defaultStatus != 0){
				commit('resetDefault');
			}
			$http.request({
				url:API.ADDRESS.UPDATE,
			}).then((res)=>{
				// state.list.push(obj);
				commit('updateAddress',obj);
			}).catch((e)=>{
				uni.showToast({
					title:"修改地址信息失败",
					icon:"none"
				})
			});
			
		}
	}
}