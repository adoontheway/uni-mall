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
		}
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
		}
	},
	actions:{
		checkAll({commit, getters}){
			getters.checkAll ? commit("uncheckAll") :commit("checkAll")
		}
	}
}