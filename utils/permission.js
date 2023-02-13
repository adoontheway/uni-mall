import { getAuthorization } from '@/utils/auth.js';

const whiteList = [
	"/",
	"/pages/login/login",
	"//pages/logout/logout",
	{pattern: /^\/pages\/list.*/},
	'/pages/my/my',
	'"pages/phone-register/phone-register"'
];

export default async function (){
	const list = ['navigateTo','redirectTo','reLaunch','switchTab'];
	list.forEach(item => {
		uni.addInterceptor(item, {
			invoke(e){
				const url =e.url.split('?')[0];
				// console.log('url',url);
				
				let pass;
				if(whiteList){
					pass = whiteList.some((item)=> {
						if(typeof(item) === 'object' && item.pattern){
							return item.pattern.test(url);
						}
						return url === item;
					})
				}
				if(!pass && !getAuthorization()){
					uni.showToast({
						title:"请选登录",
						icon:"none"
					})
					
					uni.navigateTo({
						url:'/pages/login/login'
					})
					return false;
				}
				// console.log('invoke:',e);
				return e;
			},
			success(args) {
				// console.log('interceptor-success',args)
			},
			 complete(res) {
			    // console.log('interceptor-complete',res)
			  },
			fail(err){
				console.log('interceptor failed:',err)
			}
		})
	})
}