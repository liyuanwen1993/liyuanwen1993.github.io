<template>
	<div class="init">
		<div class="slider-box">
			<img :src="'./components/user/init/img/slider1.jpg'">
		</div>
		<p class="compay-try">企业试用：<a href="tel:4008101199">4008101199</a></p>
	</div>
</template>

<script>
	import './init.scss';
	module.exports = {
		data: function(){
			return {

			};
		},
		methods: {
			initPage: function(){

			}
		},
		created: function(){
			this.initPage();
		}
	};
</script>