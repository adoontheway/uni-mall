import store from '@/store/index.js';
export default {
	common:{
		// baseUrl:"http://192.168.3.36:8085",
		baseUrl:"http://mall.adxwork.com",
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
					console.log('success:',options.url,result);
					if(result.statusCode != 200 ){
						return rej(result.errMsg);
					}
					
					if(result.data.code != 200 ){
						if(result.data.code == 401 ){
							uni.navigateTo({
								url:"/pages/login/login"
							});
						}
						return rej(result.data.message);
					}
					res(result.data.data);
				},
				complete:(e)=>{
					// console.log('complete:',e);
				},
				fail:(e)=> {
					// console.log('fail:',e);
				}
			})
		});
	},
	// 登录或者初始化的时候调用此方法在请求头中加入token
	addToken(head,token){
		this.common.header['Authorization'] = head+token;
	}
}