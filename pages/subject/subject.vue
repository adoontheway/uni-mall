<template>
	<view class="subjects">
		<scroll-view scroll-x="true" class="scroll-content">
			<view class="scroll-item">
				<view class="item-container"> 
					<view class="kind-item">
						<image class="kind-img" src="../../static/logo.png"></image>
						<view class="kind-name f-active-color">服装专题</view>
					</view>
					<view class="kind-item">
						<image class="kind-img" src="../../static/logo.png"></image>
						<view class="kind-name">服装专题</view>
					</view>
					<view class="kind-item">
						<image class="kind-img" src="../../static/logo.png"></image>
						<view class="kind-name">服装专题</view>
					</view>
					<view class="kind-item">
						<image class="kind-img" src="../../static/logo.png"></image>
						<view class="kind-name">服装专题</view>
					</view>
					<view class="kind-item">
						<image class="kind-img" src="../../static/logo.png"></image>
						<view class="kind-name">服装专题</view>
					</view>
					<view class="kind-item">
						<image class="kind-img" src="../../static/logo.png"></image>
						<view class="kind-name">服装专题</view>
					</view>
				</view>
				
			</view>
			
		</scroll-view>
			
				
		<view
			class="subject-container"
		>
			<view
				class="subject-item"
				v-for="(item, index) in dataList"
				:key="index"
			>
				<view class="subject-header">
					<image class="subject-header-img" src="../../static/logo.png"></image>
					<view>{{item.categoryName}}</view>
				</view>
				<view >
					<image class="subject-pic" :src="item.pic"></image>
				</view>
				<view class="subject-title">
					<view>{{item.title}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
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
	padding-top: 20rpx;
}
.item-container {
	display: flex;
}
.scroll-child {
	display: flex;
	flex-wrap: nowrap;
}
.scroll-item{
	display: inline-block;
	width:100vw;
	height: 200rpx;
}
.scroll-content {
	width: 100%;
	border-bottom: 4rpx solid #cccccc;
}
.kind-item {
	width: 200rpx;
	margin-left: 40rpx;
	/* padding: 10rpx; */
}
.kind-img {
	width: 150rpx;
	height: 150rpx;
	border-radius: 50%;
}
.kind-name {
	
}
.subject-container {
	padding-top: 30rpx;
}
.subject-item {
	/* display: block; */
	width: 100%;
	height: 400rpx;
	border: 2rpx solid #cccccc;
	margin-bottom: 10rpx;
}
.subject-header{
	display: flex;
	align-items: center;
	padding: 10rpx;
}

.subject-header-img {
	width: 80rpx;
	height: 80rpx;
	border-radius: 50%;
}
.subject-pic {
	width: 100%;
	height: 200rpx;
}
</style>
