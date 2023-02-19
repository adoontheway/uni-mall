import $http from "@/common/api/request.js";
import API from "@/utils/api.js";

export default {
	state:{
		syncFlag:false,
		dataList:[
			
		],
	},
	getters:{
		
	},
	mutations:{
		syncSubjectFn(state,list){
			state.dataList = list;
		},
	},
	actions:{
		initSubjects({commit}){
			$http.request({
				url:API.INDEX.SUBJECT_LIST,
			}).then((res)=>{
				commit('syncSubjectFn',res);
			}).catch((e)=>{
				uni.showToast({
					title:"获取专题信息失败",
					icon:"none"
				})
			});
		}
	}
}