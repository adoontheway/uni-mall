import { setAuthorization,removeAuthorization } from '@/utils/auth.js';

export default {
	state:{
		// 登录状态
		loginStatus:false,
		// token
		token:null,
		// 用户信息
		userInfo:{}
	},
	getters:{
		
	},
	mutations:{
		// 进入app的时候读取本地用户信息
		initUser(state){
			let userInfo = uni.getStorageSync('userInfo');
			if(userInfo){
				userInfo = JSON.parse(userInfo);
				state.userInfo = userInfo;
				state.loginStatus = true;
				state.token = userInfo.token;// 根据jwt机制，检查是否过时
			}
		},
		//登陆了后保存用户信息
		login(state, userInfo){
			state.userInfo = userInfo;
			state.loginStatus = true;
			state.token = userInfo.token;
			setAuthorization(state.token);
			// 持久化
			uni.setStorageSync('userInfo',JSON.stringify(userInfo));
		},
		// 退出登录
		logout(state){
			state.loginStatus = false;
			state.userInfo = {};
			state.token = null;
			removeAuthorization();
			uni.removeStorageSync('userInfo');
		}
	},
	actions:{
		
	},
	
}