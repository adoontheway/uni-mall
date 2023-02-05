import store from '@/store/index.js';
export default {
	common:{
		baseUrl:"http://192.168.3.36:3000/api",
		header:{
			"Content-Type":"application/json",
			"Content-Type":"application/x-www-form-urlencoded",
		},
		data:{},
		method:"GET",
		dataType:"json"
	},
	request(options={}){
		uni.showLoading({
			title:"加载中"
		});
		options.url = this.common.baseUrl+options.url;
		options.data = options.data || this.common.data;
		options.header = options.header || this.common.header;
		options.method = options.method || this.common.method;
		options.dataType = options.dataType || this.common.dataType;
		// if(options.header.token){
		// 	options.header.token = store.state.user.token;
		// 	if(options.header.token){
		// 		uni.showToast({
		// 			title:"请选登录",
		// 			icon:"none"
		// 		});
		// 		return uni.navigateTo({
		// 			url:"login"
		// 		});
		// 	}
		// }else{
			
		// }
		setTimeout(()=>{
			uni.hideLoading();
		},2000);
		return new Promise((res, rej)=>{
			uni.request({
				...options,
				success:(result)=>{
					if(result.statusCode != 200){
						return rej();
					}
					let data = result.data.data;
					res(data);
				},
				complete:()=>{
					
				}
			})
		});
	}
}