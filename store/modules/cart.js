import $http from "@/common/api/request.js";
import API from "@/utils/api.js";

export default {
	state:{
		syncFlag:false,
		dataList:[
			{
				checked:false,
				id:10000,
				name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
				desc:"颜色：魅惑紫",
				imgUrl:'../../static/img/2.png',
				price:11.00,
				num:5,
			},
			{
				checked:false,
				id:20000,
				name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
				desc:"颜色：海天蓝",
				imgUrl:'../../static/img/item0.jpeg',
				price:100.00,
				num:2,
			},
		],
		selectList:[]
	},
	getters:{
		//判断是否全选
		checkedAll(state){
			return state.dataList.length!= 0 && state.dataList.length === state.selectList.length;
		},
		//合计和结算数量
		totalCount(state){
			let total = {
				price:0,
				num:0,
			}
			state.dataList.forEach(v=>{
				if(state.selectList.indexOf(v.id) != -1){
					total.price += v.price*v.num;
				}
			});
			total.num = state.selectList.length;
			return total;
		},
		selectedItemList(state){
			return state.dataList.filter((item,index)=>{
				return state.selectList.indexOf(item.id) != -1;
			})
		}
	},
	mutations:{
		syncCartFn(state,list){
			state.dataList = list;
		},
		//全选方法
		checkAll(state){
			state.selectList = state.dataList.map(v=>{
				v.checked = true;
				return v.id;
			})
		},
		//全不选方法
		uncheckAll(state){
			state.selectList = [];
			state.dataList.forEach(v => {
				v.checked = false;
			});
		},
		// 单选
		selectItem(state, index){
			let id = state.dataList[index].id;
			let i = state.selectList.indexOf(id);
			// 如果已经选中
			if(i > -1){
				state.dataList[index].checked = false;
				return state.selectList.splice(i, 1);
			}else{
				state.dataList[index].checked = true;
				state.selectList.push(id);
			}
		},
		delGood(state){
			uni.showModal({
				content:"确定要从购物车移除吗?",
				success:()=> {
					$http.request({
						url:API.CART.DEL,
						data:state.selectList,
						method:'POST',
					}).then((res)=>{
						state.dataList = state.dataList.filter(v=>{
							return state.selectList.indexOf(v.id) === -1;
						});
						state.selectList = [];
					}).catch((e)=>{
						uni.showToast({
							title:"从购物车移除失败",
							icon:"none"
						})
					});
				}
			})
			
		},
		addGood(state, goodInfo){
			$http.request({
				url:API.CART.ADD,
				data:{
					id:goodInfo.id,
					num:goodInfo.num
				},
				method:'POST',
			}).then((res)=>{
				state.dataList.push(goodInfo);
			}).catch((e)=>{
				uni.showToast({
					title:"添加购物车失败",
					icon:"none"
				})
			});
		},
	},
	actions:{
		checkAll({commit, getters}){
			getters.checkAll ? commit("uncheckAll") :commit("checkAll")
		},
		delGoods({commit}){
			commit('delGood');
			uni.showToast({
				title:"删除成功",
				icon:"none"
			})
		},
		syncCart({commit}){
			$http.request({
				url:API.CART.LIST,
			}).then((res)=>{
				commit('syncCartFn',res);
			}).catch((e)=>{
				uni.showToast({
					title:"获取商品分类失败",
					icon:"none"
				})
			});
		},
	}
}