export default {
	state:{
		list :[
			{
				name:"吴彦祖",
				tel:"13000000000",
				city:"香港特别行政区",
				details:"九龙大道001号",
				isDefault:false,
				cityCode:'10001'
			},
			{
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
		createAddress(state, obj){
			console.log("NEW:",JSON.stringify(obj))
			state.list.push(obj);
		},
		updateAddress(state, {index, obj}){
			console.log("UPDATE",index,JSON.stringify(obj))
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