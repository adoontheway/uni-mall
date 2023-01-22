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

router.get('/api/index_list/3/data/1', function(req, res, next) {
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
						name:"服饰内衣"
					},
					{
						imgUrl:"../../static/banner/banner1.png",
						name:"服饰内衣"
					},
					{
						imgUrl:"../../static/banner/banner2.png",
						name:"服饰内衣"
					},
					{
						imgUrl:"../../static/banner/banner3.png",
						name:"服饰内衣"
					},
					{
						imgUrl:"../../static/banner/banner4.png",
						name:"服饰内衣"
					},
					{
						imgUrl:"../../static/banner/banner5.png",
						name:"服饰内衣"
					},
					{
						imgUrl:"../../static/banner/banner6.png",
						name:"服饰内衣"
					},
					{
						imgUrl:"../../static/banner/banner7.png",
						name:"服饰内衣"
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
});

router.get('/api/index_list/2/data/2', function(req, res, next) {
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
});

router.get('/api/index_list/2/data/3', function(req, res, next) {
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
});

router.get('/api/index_list/2/data/1', function(req, res, next) {
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
});

router.get('/api/index_list/data', function(req, res, next) {
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
});

module.exports = router;
