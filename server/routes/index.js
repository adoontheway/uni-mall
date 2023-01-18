var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
					  {imgUrl:"../static/img/swiper0.png"},
					  {imgUrl:"../static/img/swiper1.png"},
					  {imgUrl:"../static/img/swiper2.png"},
					  {imgUrl:"../static/img/swiper3.png"}
				  ]
			  },
			  {
				  type:"recommendList",
				  data:[
					  {
						  bigImg:"../static/img/1.jpeg",
						  data:[
							  "../static/img/item0.jpeg",
							  "../static/img/item1.jpeg",
							  "../static/img/item2.jpeg"
						  ]
					  },
					  {
						  bigImg:"../static/img/1.jpeg",
						  data:[
							  "../static/img/item13.jpeg",
							  "../static/img/item14.jpeg",
							  "../static/img/item17.jpeg"
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
