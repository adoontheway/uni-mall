<template>
	<view class="search">
		<NewLine></NewLine>
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">最近搜索</view>
				<view 
					class="iconfont icon-lajitong"
					@tap="clearRecords()"
				></view>
			</view>
			<view v-if="searchRecords.length > 0">
				<view 
					class="search-name f-color"	
					v-for="(item,index) in searchRecords"
					:key="index"
					@tap="startSearch(item)"
				>
					{{item}}
				</view>
			</view>
			<view v-else class="no-records">暂无搜索记录</view>
		</view>
		
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">热门搜索</view>
			</view>
			<view>
				<view class="search-name f-color">四件套</view>
				<view class="search-name f-color">面膜</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import NewLine from "@/components/NewLine.vue";
	export default {
		data() {
			return {
				keyword:'',
				searchRecords:[],
			}
		},
		onLoad(){
			uni.getStorage({
				key:"searchRecords",
				success:(res)=> {
					this.searchRecords = JSON.parse(res.data);
				}
			})
		},
		onNavigationBarButtonTap(e){
			if(e.float == "right"){
				// uni.navigateTo({
				// 	url:"/pages/search-list/search-list"
				// })
				this.search();
			}
		},
		// 监听搜索栏输入内容
		onNavigationBarSearchInputChanged(e){
				this.keyword = e.text;
		},
		// 监听软键盘搜索按钮点击事件
		onNavigationBarSearchInputConfirmed(e){
			this.search();
		},
		components:{
			NewLine
		},
		methods: {
			search(){
				if(this.keyword === ""){
					uni.showToast({
						title:"关键词不能为空",
						icon:"none"
					})
				}else{
					this.startSearch(this.keyword);
					
				}
			},
			addSearchRecord(){
				let idx = this.searchRecords.indexOf(this.keyword);
				if(idx == -1){
					this.searchRecords.unshift(this.keyword);
				}else{
					this.searchRecords.splice(idx, 1);
					this.searchRecords.unshift(this.keyword);
				}
				uni.setStorage({
					key:"searchRecords",
					data:JSON.stringify(this.searchRecords)
				})
			},
			clearRecords(){
				uni.showModal({
					title:"提示",
					content:"是否确定要清除搜索记录",
					cancelText:"取消",
					confirmText:"确定",
					success:(res)=> {
						if(res.confirm){
							uni.removeStorage({
								key:"searchRecords"
							});
							this.searchRecords = [];
						}
						
					}
				})
				
			},
			startSearch(value){
				uni.navigateTo({
					url:`/pages/search-list/search-list?keyword=${value}`
				});
				uni.hideKeyboard();
				this.addSearchRecord();
			}
		}
	}
</script>

<style>
.search-item{
	padding: 20rpx;
}
.search-title {
	display: flex;
	justify-content: space-between;
}
.search-name {
	padding: 4rpx 24rpx;
	background-color: #e1e1e1;
	display: inline-block;
	border-radius: 26rpx;
	margin: 10rpx;
}
.no-records {
	text-align: center;
}
</style>
