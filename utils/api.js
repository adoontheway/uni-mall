/**
 * API地址
 */

const API_USER_LOGIN = 'user/login';

const ADDRESS = {
	LIST:'/member/address/list',
	ADD:'/member/address/add',
	DEL:'/member/address/delete/{id}',
	UPDATE:'/member/address/update/{id}',
	DETAIL:'/member/address/{id}'
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

const INDEX = {
	//首页内容信息展示
	CONTENT:'/home/content',
	//分页获取推荐商品
	RECOMMENDS:'/home/recommendProductList',
	//获取首页商品分类
	CATE_LIST:'/home/productCateList/{parentId}',
	//根据分类获取专题
	SUBJECT_LIST:'/home/subjectList',
	//分页获取人气推荐商品
	HOT_LIST:'/home/hotProductList',
	//分页获取新品推荐商品
	NEW_LIST:'/home/newProductList',
}

export default {
	ADDRESS,
	CART,
	ORDER, 
	PAY,
	GOODS,
	LIST,
	USER,
	INDEX
}