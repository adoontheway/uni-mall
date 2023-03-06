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
/**
 * 购物车
 */
const CART = {
	LIST:'/cart/list',//获取当前会员的购物车列表
	LIST_PROMOTION:'/cart/list/promotion',//获取当前会员的购物车列表,包括促销信息
	ADD:'/cart/add',//添加商品到购物车
	DEL:'/cart/delete',//删除购物车中的指定商品
	CLEAR:'/cart/clear',//清空当前会员的购物车
	GET_PRODUCT:'/cart/getProduct/{productId}',//获取购物车中指定商品的规格,用于重选规格
	UPDATE_QTY:'/cart/update/quantity',//修改购物车中指定商品的数量
	UPDATE_ATTR:'/cart/update/attr',//修改购物车中商品的规格
};
/*
* 订单
*/
const ORDER = {
	LIST:'/order/list',//按状态分页获取用户订单列表
	DETAIL:'/order/detail/{orderId}',// 根据ID获取订单详情
	GEN_CONFIRM_ORDER:'/order/generateConfirmOrder',// 根据购物车信息生成确认单
	GEN_ORDER:'/order/generateOrder',// 根据购物车信息生成订单
	PAY_SUCCESS:'/order/paySuccess',//用户支付成功的回调
	CANCEL_TIMEOUT:'/order/cancelTimeOutOrder',//自动取消超时订单
	CANCEL:'/order/cancelOrder',//取消单个超时订单
	USER_CANCEL:'/order/cancelUserOrder',//用户取消订单
	CONFIRM_RECEIVE:'/order/confirmReceiveOrder',//用户确认收货
	DEL:"order/deleteOrder",//用户删除订单
};

/*
* 退货申请管理
*/
const RETURN = {
	CREATE:'/returnApply/create',//申请退货
};
/**
 * 商品管理
 */
const PRODUCT = {
	DETAIL:'/product/detail/{id}',
	TREE_LIST:'/product/categoryTreeList',//以树形结构获取所有商品分类
	SEARCH:'/product/search',//综合搜索、筛选、排序
	CREATE:'/product/create',//创建商品
	UPDATE_INFO:'/product/updateInfo/{id}',//根据商品id获取商品编辑信息
	UPDATE:'/product/update/{id}',//更新商品
	LIST:'/product/list',//查询商品
	SIMPLT_LIST:'/product/simpleList',//根据商品名称或货号模糊查询
	VERIFY_STATUS:'/product/update/verifyStatus',//批量修改审核状态
	PUBLISH_STATUS:'/product/update/publishStatus',//批量上下架商品
	RECOMMAND_STATUS:'/product/update/recommendStatus',//批量推荐商品
	NEW_STATUS:'/product/update/newStatus',//批量设为新品
	DELETE_STATUS:'/product/update/deleteStatus',//批量修改删除状态
};

/**
 * 会员收藏管理
 */
const COLLECTION = {
	ADD:'/member/productCollection/add',//添加商品收藏
	DEL:'/member/productCollection/delete',//删除商品收藏
	LIST:'/member/productCollection/list',//显示当前用户商品收藏列表
	LIST:'/member/productCollection/detail',//显示商品收藏详情
	CLEAR:'/member/productCollection/clear',//清空当前用户商品收藏列表
};

const LIST = "/list/data";

const PAY = "/pay";
/**
 * 用户相关
 */
const USER = {
	LOGIN:'/sso/login',//会员登录
	INFO:'/sso/info',//获取会员信息
	LOGIN_3RD:'/sso/login_3rd',
	REGISTER:'/sso/register',//会员注册
	VERIFY_CODE:'/sso/getAuthCode',//获取验证码
	UPDATE_PASSWORD:'/sso/updatePassword',//会员修改密码
	REFRESH:'/sso/refreshToken',//刷新token
};
/**
 * 首页相关
 */
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
/**
 * 优惠券
 */
const COUPON = {
	ADD:'/member/coupon/add/{couponId}',//领取指定优惠券
	LIST_HISTORY:'/member/coupon/listHistory',//获取会员优惠券历史列表
	LIST:'/member/coupon/list',//获取会员优惠券列表
	LIST_CART:'/member/coupon/list/cart/{type}',//获取登录会员购物车的相关优惠券
	LIST_PRODUCT:'/member/coupon/listByProduct/{productId}',//获取当前商品相关优惠券
};

/**
 * 首页品牌推荐管理
 */
const BRAND = {
	RECOMMENDS:'/brand/recommendList',//分页获取推荐品牌
	DETAIL:'/brand/detail/{brandId}',//获取品牌详情
	PRODUCTS:'/brand/productList',//分页获取品牌相关商品
};

export default {
	ADDRESS,
	CART,
	ORDER, 
	PAY,
	PRODUCT,
	LIST,
	USER,
	INDEX,
	RETURN,
	COUPON,
	COLLECTION,
	BRAND,
}