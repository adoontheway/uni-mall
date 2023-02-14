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
		syncCollectionFn(state,list){
			state.dataList = list;
		},
		
		delCollection(state){
			uni.showModal({
				content:"确定要从收藏夹移除吗?",
				success:()=> {
					$http.request({
						url:API.COLLECTION.DEL,
						data:state.selectList,
						method:'POST',
					}).then((res)=>{
						state.dataList = state.dataList.filter(v=>{
							return state.selectList.indexOf(v.id) === -1;
						});
						state.selectList = [];
					}).catch((e)=>{
						uni.showToast({
							title:"从收藏夹移除失败",
							icon:"none"
						})
					});
				}
			})
			
		},
		addCollection(state, goodInfo){
			$http.request({
				url:API.COLLECTION.ADD,
				data:{
					id:goodInfo.id,
					num:goodInfo.num
				},
				method:'POST',
			}).then((res)=>{
				state.dataList.push(goodInfo);
			}).catch((e)=>{
				uni.showToast({
					title:"添加收藏夹失败",
					icon:"none"
				})
			});
		},
	},
	actions:{
		delCollection({commit}){
			commit('delCollection');
			uni.showToast({
				title:"删除成功",
				icon:"none"
			})
		},
		syncCollection({commit}){
			$http.request({
				url:API.COLLECTION.LIST,
			}).then((res)=>{
				commit('syncCollectionFn',res);
			}).catch((e)=>{
				uni.showToast({
					title:"获取收藏夹信息失败",
					icon:"none"
				})
			});
		},
	}
}