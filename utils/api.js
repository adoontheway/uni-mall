/**
 * API地址
 */

const API_USER_LOGIN = 'user/login';

const ADDRESS = {
	LIST:'/address/list',
	ADD:'/address/add',
	DEL:'/address/delete',
	UPDATE:'/address/update',
};

const CART = {
	LIST:'/cart/list',
	ADD:'/cart/add',
	DEL:'/cart/delete',
	UPDATE:'/cart/update',
};

const ORDER = {
	LIST:'/order/list',
	ADD:'/order/add',// 新建订单,生成订单号
	DEL:'/order/delete',
	SUBMIT:"order/submit",//提交订单，状态更改，从购物车移除
};

const GOODS = {
	INFO:'/goods/info',
	LIST:'/goods/list',
	SEARCH:'/goods/search'
};

const LIST = "/list/data";

const PAY = "/pay";

const USER = {
	LOGIN:'/user/login',
	LOGIN_3RD:'/user/login_3rd',
	REGISTER:'/user/register',
	VERIFY_CODE:'/user/verify_code',
	
};

export default {
	ADDRESS,
	CART,
	ORDER, 
	PAY,
	GOODS,
	LIST,
	USER
}