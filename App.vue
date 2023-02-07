<script>
	// import routingIntercept from '@/utils/permission.js';
	export default {
		onLaunch: function() {
			console.log('App Launch');
			this.$store.commit('initUser');
			this.$store.commit('initAddress');
			
			// routingIntercept();
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() { 
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import 'common/uni.css';
	@import 'common/common.css';
	@import 'common/iconfont.css';
	
</style>
