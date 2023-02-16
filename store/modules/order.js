import $http from "@/common/api/request.js";
import API from "@/utils/api.js";

export default {
	state:{
		dataList:[
			{
				name:'全部',
				list:[
					{
						status:"待付款",
						totalPrice:3999.00,
						goods_item:[
							{
								name:"做点办公室椅垫3D网眼透气防滑竹炭垫学生餐椅汽车垫夏天防汗",
								imgUrl:'https://cdn.adxwork.com/mall-server/static/img/14.jpeg',
								attrs:"颜色分类：竹炭做点黑色 尺寸：45*45cm",
								pprice:299.00,
								num:1,
							}
						]
					}
				]
			},
			{
				name:'待付款',
				list:[
					
				]
			},
			{
				name:'待发货',
				list:[
					
				]
			},
			{
				name:'待收获',
				list:[
					
				]
			},
			{
				name:'待评价',
				list:[
					
				]
			}
		],
		
	},
	getters:{
		//判断是否全选
		// checkedAll(state){
		// 	return state.dataList.length!= 0 && state.dataList.length === state.selectList.length;
		// },
		
	},
	mutations:{
		initOrderFn(state,force){
			if(!force && state.dataList.length != 0) return;
			$http.request({
				url:API.ORDER.LIST,
			}).then((res)=>{
				state.dataList = res;
			}).catch((e)=>{
				uni.showToast({
					title:"获取订单列表失败",
					icon:"none"
				})
			});
		},
	},
	actions:{
		initOrders({commit},force){
			commit('initOrderFn',force);
		}
	}
}