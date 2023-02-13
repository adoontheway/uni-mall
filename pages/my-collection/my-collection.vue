<template>
	<view>
		<CommodityList  :dataList="dataList"></CommodityList>
	</view>
</template>

<script>
	import { mapGetters,mapState } from 'vuex';
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			...mapState({
				dataList:state=>state.collection.dataList,
			})
		},
		onLoad() {
			if(this.dataList.length == 0){
				this.$store.dispatch('syncCollection');
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>

</style>
