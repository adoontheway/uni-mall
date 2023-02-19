<template>
	<view class="subjects">
		<template v-if="dataList.length > 0">
		
			
		</template>
		
	</view>
</template>

<script>
	
	// import NumberBox from "@/components/uni/uni-number-box/components/uni-number-box/uni-number-box.vue";
	import {mapState,mapActions,mapMutations,mapGetters} from "vuex";
	export default {
		data() {
			return {
			}
		},
		components:{
			// NumberBox
		},
		computed:{
			...mapState({
				dataList:state=>state.subjects.dataList,
			}),
			
		},
		onLoad() {
			if(this.dataList.length == 0){
				this.$store.dispatch('initSubjects');
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.subjects {
	
}
</style>
