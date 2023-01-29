export default {
	state:{
		dataList:[
			{
				checked:false,
				id:1,
				name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
				desc:"颜色：魅惑紫",
				imgUrl:'../../static/img/2.png',
				price:199.00,
				num:5,
			},
			{
				checked:false,
				id:1,
				name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
				desc:"颜色：海天蓝",
				imgUrl:'../../static/img/item0.jpeg',
				price:199.00,
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
			state.list.forEach(v=>{
				if(state.selectList.indexOf(v.id) != -1){
					total.price += v.price*v.num;
				}
			});
			total.num = state.selectList.length;
			return total;
		},
	},
	mutations:{
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
			let id = state.list[index].id;
			let i = state.selectList.indexOf(id);
			// 如果已经选中
			if(i > -1){
				state.list[index].checked = false;
				return state.selectList.splice(index, 1);
			}else{
				state.list[index].checked = true;
				state.selectList.push(id);
			}
		},
		delGood(state){
			state.list = state.list.filter(v=>{
				return state.selectList.indexOf(v.id) === -1;
			});
			state.selectList = [];
		},
		addGood(state, goodInfo){
			state.list.push(goodInfo);
		}
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
		}
	}
}