import { setAuthorization,removeAuthorization,getAuthorization } from '@/utils/auth.js';
import $http from "@/common/api/request.js";
import API from "@/utils/api.js";

export default {
	state:{
		// 登录状态
		loginStatus:false,
		// 用户信息
		userInfo:{}
	},
	getters:{
		
	},
	mutations:{
		// 进入app的时候读取本地用户信息
		initUser(state){
			let userInfo = uni.getStorageSync('userInfo');
			let tokenInfo = JSON.parse(getAuthorization());
			if(tokenInfo){
				$http.addToken(tokenInfo.tokenHead, tokenInfo.token);
			}
			if(userInfo){
				userInfo = JSON.parse(userInfo);
				state.userInfo = userInfo;
				state.loginStatus = true;
				// state.token = userInfo.token;// 根据jwt机制，检查是否过时
			}else{
				if(tokenInfo){
					this.dispatch('getUserInfo');
				}else{
					//todo let it be
				}
			}
		},
		setToken(state,tokenInfo){
			setAuthorization(JSON.stringify(tokenInfo));
			$http.addToken(tokenInfo.tokenHead, tokenInfo.token);
			this.dispatch('getUserInfo');
		},
		//登陆了后保存用户信息
		login(state, userInfo){
			state.userInfo = userInfo;
			state.loginStatus = true;
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
		getUserInfo({commit}){
			$http.request({
				url:API.USER.INFO,
			}).then((res)=>{
				commit('login',res);
			}).catch((e)=>{
				uni.showToast({
					title:"获取用户信息失败",
					icon:"none"
				})
			});
		}
	},
	
}