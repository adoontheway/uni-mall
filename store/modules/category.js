import $http from "@/common/api/request.js";
import API from "@/utils/api.js";

export default {
	state:{
		dataList:[
		
		],
	},
	getters:{
		navTabs(state){
			return state.dataList.filter(item => item.level == 0);
		}
	},
	mutations:{
		initCategory(state, goodInfo){
			$http.request({
				url:API.GOODS.LIST,
			}).then((res)=>{
				state.dataList = res;
			}).catch((e)=>{
				uni.showToast({
					title:"获取商品分类失败",
					icon:"none"
				})
			});
		},
	},
	actions:{
		
	}
}