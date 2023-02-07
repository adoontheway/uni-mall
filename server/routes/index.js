var express = require('express');
var router = express.Router();

router.all("*", (req,res, next)=> {
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","COntent-Type");
	res.header("Access-Control-Allow-Methods","*");
	next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/api/login", function(req, res, next) {
	let params = {
		userName:req.body.userName,
		userPwd : req.body.userPwd
	}
	res.json({
		code:0,
		data:{
			id:1,
			nickname:'张三',
			phone:'13500000000',
			avatar:'../../static/img/16.png',
			token:'12312dfsd'
		}
	})
});

router.post("/api/loginother", function(req, res, next) {
	let provider = req.body.provider;
	let openid  = req.body.openid;
	let nickname  = req.body.nickname;
	let imgUrl  = req.body.imgUrl;
});

router.post("/api/register", function(req, res, next) {
	// todo:插入手机号以及验证码
	res.json({
		code:0,
	});
	
	// res.json({
	// 	code:1,
	// 	msg:'手机号已存在'
	// })
});
// 请求验证码
router.post("/api/code", function(req, res, next) {
	// todo: 生成验证码存放到缓存，接入短信sdk
	res.json({
		code:0,
	});
});
// 发送验证码
router.post("/api/verify_code", function(req, res, next) {
	let code = req.body.code;
	res.json({
		code:0,
	});
	// 注册流程
	// 返回用户信息
});
router.get("/api/address/list", function(req, res, next){
	res.json({
		code:0,
		data:[
			{
				name:"吴彦祖",
				tel:"13000000000",
				city:"香港特别行政区",
				details:"九龙大道001号",
				isDefault:false,
				cityCode:'10001'
			},
			{
				name:"任贤齐",
				tel:"13000000001",
				city:"湖北省武汉市武昌区",
				details:"黄鹤楼1楼001号",
				isDefault:true,
				cityCode:'10002'
			},
		]
	})
});
router.get("/api/order/list", function(req, res, next){
	
});
router.post("/api/order/add", function(req, res, next){
	res.json({
		code:0,
		data:{
			status:0,
			id:5000+Math.ceil(Math.random(5000)),
			name:"做点办公室椅垫3D网眼透气防滑竹炭垫学生餐椅汽车垫夏天防汗",
			imgUrl:'../../static/img/14.jpeg',
			attrs:"颜色分类：竹炭做点黑色 尺寸：45*45cm",
			pprice:299.00,
			num:3,
		}
	});
});

router.get("/api/goods/id", function(req, res, next){
	res.json({
		code:0,
		data:  {
				  	id:6,
				  	imgUrl:"../../static/img/item0.jpeg",
				  	name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
				  	pprice:"188.00",
				  	oprice:"399.00",
				  	discount:"4.0"
				  },
	})
});

router.get('/api/list/data/:id/:page', function(req, res, next) {
	let id = parseInt(req.params.id);
	let page = parseInt(req.params.page);
	if(page == 0){
		if(id ===0){
			res.json( {
					  code:0,
					  data:{
						  topBar:[
							{name:"推荐",id:1},
							{name:"运动户外",id:2},
							{name:"服饰内衣",id:3},
							{name:"鞋靴箱包",id:4},
							{name:"美妆个护",id:5},
							{name:"数码家具",id:6},
							{name:"食品母婴",id:7},
							{name:"萌宠生活",id:8}
						  ],
						  data:[
							  {
								  type:"swiperList",
								  data:[
									  {imgUrl:"../../static/img/swiper0.png"},
									  {imgUrl:"../../static/img/swiper1.png"},
									  {imgUrl:"../../static/img/swiper2.png"},
									  {imgUrl:"../../static/img/swiper3.png"}
								  ]
							  },
							  {
								  type:"recommendList",
								  data:[
									  {
										  bigImg:"../../static/img/1.jpeg",
										  data:[
											  "../../static/img/item0.jpeg",
											  "../../static/img/item1.jpeg",
											  "../../static/img/item2.jpeg"
										  ]
									  },
									  {
										  bigImg:"../../static/img/1.jpeg",
										  data:[
											  "../../static/img/13.jpeg",
											  "../../static/img/14.jpeg",
											  "../../static/img/15.jpeg"
										  ]
									  }
								  ]
							  },
							  {
								type:"comodityList",
								data:[
								  {
								  	id:1,
								  	imgUrl:"../../static/img/item2.jpeg",
								  	name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
								  	pprice:"199.00",
								  	oprice:"299.00",
								  	discount:"5.2"
								  },
								  {
								  	id:2,
								  	imgUrl:"../../static/img/item1.jpeg",
								  	name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
								  	pprice:"188.00",
								  	oprice:"299.00",
								  	discount:"5.0"
								  },
								  {
								  	id:3,
								  	imgUrl:"../../static/img/item0.jpeg",
								  	name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
								  	pprice:"188.00",
								  	oprice:"399.00",
								  	discount:"4.0"
								  },
								  {
								  	id:4,
								  	imgUrl:"../../static/img/item2.jpeg",
								  	name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
								  	pprice:"199.00",
								  	oprice:"299.00",
								  	discount:"5.2"
								  },
								  {
								  	id:5,
								  	imgUrl:"../../static/img/item1.jpeg",
								  	name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
								  	pprice:"188.00",
								  	oprice:"299.00",
								  	discount:"5.0"
								  },
							  ]
							}
						]
				  }
			});
		}else{
			res.json( {
				  code:0,
				  data: [
					  {
					  		type:"bannerList",
					  		imgUrl:"../../static/img/2.png"
					  },
					  {
					  		type:"iconsList",
					  		data:[
								{
									imgUrl:"../../static/banner/banner0.png",
									name:"运动户外"
								},
								{
									imgUrl:"../../static/banner/banner1.png",
									name:"运动户外"
								},
								{
									imgUrl:"../../static/banner/banner2.png",
									name:"运动户外"
								},
								{
									imgUrl:"../../static/banner/banner3.png",
									name:"运动户外"
								},
								{
									imgUrl:"../../static/banner/banner4.png",
									name:"运动户外"
								},
								{
									imgUrl:"../../static/banner/banner5.png",
									name:"运动户外"
								},
								{
									imgUrl:"../../static/banner/banner6.png",
									name:"运动户外"
								},
								{
									imgUrl:"../../static/banner/banner7.png",
									name:"运动户外"
								},
							],
					  },
					  {
						  type:"hotList",
						  data:[
							  {
							  	id:1,
							  	imgUrl:"../../static/img/item2.jpeg",
							  	name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
							  	pprice:"199.00",
							  	oprice:"299.00",
							  	discount:"5.2"
							  },
							  {
							  	id:2,
							  	imgUrl:"../../static/img/item1.jpeg",
							  	name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
							  	pprice:"188.00",
							  	oprice:"299.00",
							  	discount:"5.0"
							  },
							  {
							  	id:3,
							  	imgUrl:"../../static/img/item0.jpeg",
							  	name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
							  	pprice:"188.00",
							  	oprice:"399.00",
							  	discount:"4.0"
							  },
							  {
							  	id:4,
							  	imgUrl:"../../static/img/item2.jpeg",
							  	name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
							  	pprice:"199.00",
							  	oprice:"299.00",
							  	discount:"5.2"
							  },
							  {
							  	id:5,
							  	imgUrl:"../../static/img/item1.jpeg",
							  	name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
							  	pprice:"188.00",
							  	oprice:"299.00",
							  	discount:"5.0"
							  },
							  {
							  	id:6,
							  	imgUrl:"../../static/img/item0.jpeg",
							  	name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
							  	pprice:"188.00",
							  	oprice:"399.00",
							  	discount:"4.0"
							  },
						  ],
					  },
					  {
						  type:"shopList",
						  data:[
							  {
								  shopImg:"../../static/img/swiper3.png",
								  data:[
									 {
									 	id:1,
									 	imgUrl:"../../static/img/item2.jpeg",
									 	name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
									 	pprice:"199.00",
									 	oprice:"299.00",
									 	discount:"5.2"
									 },
									 {
									 	id:2,
									 	imgUrl:"../../static/img/item1.jpeg",
									 	name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
									 	pprice:"188.00",
									 	oprice:"299.00",
									 	discount:"5.0"
									 },
									 {
									 	id:3,
									 	imgUrl:"../../static/img/item0.jpeg",
									 	name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
									 	pprice:"188.00",
									 	oprice:"399.00",
									 	discount:"4.0"
									 },
									 {
									 	id:4,
									 	imgUrl:"../../static/img/item2.jpeg",
									 	name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
									 	pprice:"199.00",
									 	oprice:"299.00",
									 	discount:"5.2"
									 },
									 {
									 	id:5,
									 	imgUrl:"../../static/img/item1.jpeg",
									 	name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
									 	pprice:"188.00",
									 	oprice:"299.00",
									 	discount:"5.0"
									 }, 
								  ]
							  },
							  {
								  shopImg:"../../static/img/swiper3.png",
								  data:[
									 {
										id:1,
										imgUrl:"../../static/img/item2.jpeg",
										name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
										pprice:"199.00",
										oprice:"299.00",
										discount:"5.2"
									 },
									 {
										id:2,
										imgUrl:"../../static/img/item1.jpeg",
										name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
										pprice:"188.00",
										oprice:"299.00",
										discount:"5.0"
									 },
									 {
										id:3,
										imgUrl:"../../static/img/item0.jpeg",
										name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
										pprice:"188.00",
										oprice:"399.00",
										discount:"4.0"
									 },
									 {
										id:4,
										imgUrl:"../../static/img/item2.jpeg",
										name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
										pprice:"199.00",
										oprice:"299.00",
										discount:"5.2"
									 },
									 {
										id:5,
										imgUrl:"../../static/img/item1.jpeg",
										name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
										pprice:"188.00",
										oprice:"299.00",
										discount:"5.0"
									 }, 
								  ]
							  }
							  
						  ]
					  },
					  {
					  				  type:"comodityList",
					  				  data:[
					  					  {
					  					  	id:1,
					  					  	imgUrl:"../../static/img/item2.jpeg",
					  					  	name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
					  					  	pprice:"199.00",
					  					  	oprice:"299.00",
					  					  	discount:"5.2"
					  					  },
					  					  {
					  					  	id:2,
					  					  	imgUrl:"../../static/img/item1.jpeg",
					  					  	name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
					  					  	pprice:"188.00",
					  					  	oprice:"299.00",
					  					  	discount:"5.0"
					  					  },
					  					  {
					  					  	id:3,
					  					  	imgUrl:"../../static/img/item0.jpeg",
					  					  	name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
					  					  	pprice:"188.00",
					  					  	oprice:"399.00",
					  					  	discount:"4.0"
					  					  },
					  					  {
					  					  	id:4,
					  					  	imgUrl:"../../static/img/item2.jpeg",
					  					  	name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
					  					  	pprice:"199.00",
					  					  	oprice:"299.00",
					  					  	discount:"5.2"
					  					  },
					  					  {
					  					  	id:5,
					  					  	imgUrl:"../../static/img/item1.jpeg",
					  					  	name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
					  					  	pprice:"188.00",
					  					  	oprice:"299.00",
					  					  	discount:"5.0"
					  					  },
					  				  ]
					  }
				  ] ,
				});
		}
	 
	}else{
		res.json( {
			  code:0,
			  data: [
				 
				  {
					  type:"comodityList",
					  data:[
						  {
							id:1,
							imgUrl:"../../static/img/item2.jpeg",
							name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
							pprice:"199.00",
							oprice:"299.00",
							discount:"5.2"
						  },
						  {
							id:2,
							imgUrl:"../../static/img/item1.jpeg",
							name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
							pprice:"188.00",
							oprice:"299.00",
							discount:"5.0"
						  },
						  {
							id:3,
							imgUrl:"../../static/img/item0.jpeg",
							name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
							pprice:"188.00",
							oprice:"399.00",
							discount:"4.0"
						  },
						  {
							id:4,
							imgUrl:"../../static/img/item2.jpeg",
							name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
							pprice:"199.00",
							oprice:"299.00",
							discount:"5.2"
						  },
						  {
							id:5,
							imgUrl:"../../static/img/item1.jpeg",
							name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
							pprice:"188.00",
							oprice:"299.00",
							discount:"5.0"
						  },
					  ]
				  }
			  ] ,
			});
	}
});

router.get('/api/goods/search/',function(req, res, next){
	let [goodsName, orderName] = Object.keys(req.query);
	let name = req.query.name;
	let orderBy = req.query[orderName];
	res.json({
		code:0,
		data:[
			{
				id:1,
				imgUrl:"../../static/img/item2.jpeg",
				name:"Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",
				pprice:"199.00",
				oprice:"299.00",
				discount:"5.2"
			},
			{
				id:2,
				imgUrl:"../../static/img/item1.jpeg",
				name:"OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
				pprice:"188.00",
				oprice:"299.00",
				discount:"5.0"
			},
			{
				id:3,
				imgUrl:"../../static/img/item0.jpeg",
				name:"Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB +128GB 神秘黑境 智能手机 小米 红米",
				pprice:"188.00",
				oprice:"399.00",
				discount:"4.0"
			},
		]
	});
});

router.get('/api/goods/list/', function(req, res, next){
	res.json({
		code:0,
		data:[
			{
				id:1,
				name:"家居家纺",
				data:[
					{
						name:"家纺",
						data:[
							{id:1, name:"毛巾",imgUrl:'../../static/img/item2.jpeg'},
							{id:2, name:"枕头",imgUrl:'../../static/img/item2.jpeg'},
							{id:3, name:"被子",imgUrl:'../../static/img/item2.jpeg'},
							{id:4, name:"被套",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
					{
						name:"生活日用",
						data:[
							{id:10, name:"浴室用品",imgUrl:'../../static/img/item2.jpeg'},
							{id:11, name:"洗晒/熨烫",imgUrl:'../../static/img/item2.jpeg'},
							{id:12, name:"净化除味",imgUrl:'../../static/img/item2.jpeg'},
						],
					}
				]
			},
			{
				id:2,
				name:"女装",
				data:[
					{
						name:"服装",
						data:[
							{id:21, name:"上衣",imgUrl:'../../static/img/item2.jpeg'},
							{id:22, name:"长裤",imgUrl:'../../static/img/item2.jpeg'},
							{id:23, name:"短裙",imgUrl:'../../static/img/item2.jpeg'},
							{id:24, name:"连衣裙",imgUrl:'../../static/img/item2.jpeg'},
							{id:21, name:"上衣",imgUrl:'../../static/img/item2.jpeg'},
							{id:22, name:"长裤",imgUrl:'../../static/img/item2.jpeg'},
							{id:23, name:"短裙",imgUrl:'../../static/img/item2.jpeg'},
							{id:24, name:"连衣裙",imgUrl:'../../static/img/item2.jpeg'},
							{id:21, name:"上衣",imgUrl:'../../static/img/item2.jpeg'},
							{id:22, name:"长裤",imgUrl:'../../static/img/item2.jpeg'},
							{id:23, name:"短裙",imgUrl:'../../static/img/item2.jpeg'},
							{id:24, name:"连衣裙",imgUrl:'../../static/img/item2.jpeg'},
							{id:21, name:"上衣",imgUrl:'../../static/img/item2.jpeg'},
							{id:22, name:"长裤",imgUrl:'../../static/img/item2.jpeg'},
							{id:23, name:"短裙",imgUrl:'../../static/img/item2.jpeg'},
							{id:24, name:"连衣裙",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
					{
						name:"化妆",
						data:[
							{id:30, name:"护肤",imgUrl:'../../static/img/item2.jpeg'},
							{id:31, name:"护发",imgUrl:'../../static/img/item2.jpeg'},
							{id:32, name:"美妆",imgUrl:'../../static/img/item2.jpeg'},
						],
					}
				]
			},
			{
				id:3,
				name:"家居家纺",
				data:[
					{
						name:"家纺",
						data:[
							{id:1, name:"毛巾",imgUrl:'../../static/img/item2.jpeg'},
							{id:2, name:"枕头",imgUrl:'../../static/img/item2.jpeg'},
							{id:3, name:"被子",imgUrl:'../../static/img/item2.jpeg'},
							{id:4, name:"被套",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
				]
			},
			{
				id:3,
				name:"家居家纺",
				data:[
					{
						name:"家纺",
						data:[
							{id:1, name:"毛巾",imgUrl:'../../static/img/item2.jpeg'},
							{id:2, name:"枕头",imgUrl:'../../static/img/item2.jpeg'},
							{id:3, name:"被子",imgUrl:'../../static/img/item2.jpeg'},
							{id:4, name:"被套",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
				]
			},
			{
				id:3,
				name:"家居家纺",
				data:[
					{
						name:"家纺",
						data:[
							{id:1, name:"毛巾",imgUrl:'../../static/img/item2.jpeg'},
							{id:2, name:"枕头",imgUrl:'../../static/img/item2.jpeg'},
							{id:3, name:"被子",imgUrl:'../../static/img/item2.jpeg'},
							{id:4, name:"被套",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
				]
			},
			{
				id:3,
				name:"家居家纺",
				data:[
					{
						name:"家纺",
						data:[
							{id:1, name:"毛巾",imgUrl:'../../static/img/item2.jpeg'},
							{id:2, name:"枕头",imgUrl:'../../static/img/item2.jpeg'},
							{id:3, name:"被子",imgUrl:'../../static/img/item2.jpeg'},
							{id:4, name:"被套",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
				]
			},
			{
				id:3,
				name:"家居家纺",
				data:[
					{
						name:"家纺",
						data:[
							{id:1, name:"毛巾",imgUrl:'../../static/img/item2.jpeg'},
							{id:2, name:"枕头",imgUrl:'../../static/img/item2.jpeg'},
							{id:3, name:"被子",imgUrl:'../../static/img/item2.jpeg'},
							{id:4, name:"被套",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
				]
			},
			{
				id:3,
				name:"家居家纺",
				data:[
					{
						name:"家纺",
						data:[
							{id:1, name:"毛巾",imgUrl:'../../static/img/item2.jpeg'},
							{id:2, name:"枕头",imgUrl:'../../static/img/item2.jpeg'},
							{id:3, name:"被子",imgUrl:'../../static/img/item2.jpeg'},
							{id:4, name:"被套",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
				]
			},
			{
				id:3,
				name:"家居家纺",
				data:[
					{
						name:"家纺",
						data:[
							{id:1, name:"毛巾",imgUrl:'../../static/img/item2.jpeg'},
							{id:2, name:"枕头",imgUrl:'../../static/img/item2.jpeg'},
							{id:3, name:"被子",imgUrl:'../../static/img/item2.jpeg'},
							{id:4, name:"被套",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
				]
			},
			{
				id:3,
				name:"家居家纺",
				data:[
					{
						name:"家纺",
						data:[
							{id:1, name:"毛巾",imgUrl:'../../static/img/item2.jpeg'},
							{id:2, name:"枕头",imgUrl:'../../static/img/item2.jpeg'},
							{id:3, name:"被子",imgUrl:'../../static/img/item2.jpeg'},
							{id:4, name:"被套",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
				]
			},
			{
				id:3,
				name:"家居家纺",
				data:[
					{
						name:"家纺",
						data:[
							{id:1, name:"毛巾",imgUrl:'../../static/img/item2.jpeg'},
							{id:2, name:"枕头",imgUrl:'../../static/img/item2.jpeg'},
							{id:3, name:"被子",imgUrl:'../../static/img/item2.jpeg'},
							{id:4, name:"被套",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
				]
			},
			{
				id:3,
				name:"家居家纺",
				data:[
					{
						name:"家纺",
						data:[
							{id:1, name:"毛巾",imgUrl:'../../static/img/item2.jpeg'},
							{id:2, name:"枕头",imgUrl:'../../static/img/item2.jpeg'},
							{id:3, name:"被子",imgUrl:'../../static/img/item2.jpeg'},
							{id:4, name:"被套",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
				]
			},
			{
				id:3,
				name:"家居家纺",
				data:[
					{
						name:"家纺",
						data:[
							{id:1, name:"毛巾",imgUrl:'../../static/img/item2.jpeg'},
							{id:2, name:"枕头",imgUrl:'../../static/img/item2.jpeg'},
							{id:3, name:"被子",imgUrl:'../../static/img/item2.jpeg'},
							{id:4, name:"被套",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
				]
			},
			{
				id:3,
				name:"家居家纺",
				data:[
					{
						name:"家纺",
						data:[
							{id:1, name:"毛巾",imgUrl:'../../static/img/item2.jpeg'},
							{id:2, name:"枕头",imgUrl:'../../static/img/item2.jpeg'},
							{id:3, name:"被子",imgUrl:'../../static/img/item2.jpeg'},
							{id:4, name:"被套",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
				]
			},
			{
				id:3,
				name:"家居家纺",
				data:[
					{
						name:"家纺",
						data:[
							{id:1, name:"毛巾",imgUrl:'../../static/img/item2.jpeg'},
							{id:2, name:"枕头",imgUrl:'../../static/img/item2.jpeg'},
							{id:3, name:"被子",imgUrl:'../../static/img/item2.jpeg'},
							{id:4, name:"被套",imgUrl:'../../static/img/item2.jpeg'},
						],
					},
				]
			},
		]
	})
});
module.exports = router;
