# uni-mall 便利店

## 文档
* [Vue](https://cn.vuejs.org/guide/essentials/template-syntax.html)
* [Vuex](https://vuex.vuejs.org/zh/guide/state.html)

## 用户名，手机号，第三方登录之间的关系
* 手机号必须要有,没有的话需要提醒绑定
* 用手机号注册的用户名就是手机号
* 不支持自定义注册
* 第三方登录存provider/openid/unionid等，但是还是需要手机号绑定
* 昵称可以设置，默认是用户名或者第三方的名字或者手机号，或者给生成的昵称
* 用户名可以是手机号，openid，自定义用户名

## token
初始化时机
* 登录的时候获取
* 从本地缓存中获取

## 支付宝沙箱对接流程:测试可用
测试：
1. 登录支付宝网页版 ->  点沙箱 -> 沙箱环境 -> 沙箱应用
2. 下载支付宝开放平台助手
3. 登录支付宝开放平台助手
	- 生成密钥
	- 将公钥复制到沙箱应用


## 线上对接