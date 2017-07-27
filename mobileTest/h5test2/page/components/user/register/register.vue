<template>
<div class="register">
	<div class="input-box top-thin-line-t">
		<div class="tel-box bottom-thin-line-t">
			<i></i>
			手机号
			<input type="tel" v-model="tel" @keyup="inputCheck" class="input-tel" placeholder="请输入手机号" maxlength="11"></input>
			<div class="get-code" :class="{active: activeStatus, disabled: disabledStatus}" @click="getCode">
				{{getCodeText}}
			</div>
		</div>
		<div class="code-box bottom-thin-line-t">
			<i></i>
			验证码
			<input type="text" v-model="code" class="input-code" placeholder="请输入验证码"></input>
		</div>
		<div class="password-box">
			<i></i>
			密 &nbsp 码
			<input type="password" v-model="password" class="input-password" placeholder="请输入密码"></input>
		</div>
	</div>
	<a href="javascript:;" class="btn-login" @click="registerHandle">完成注册</a>
	<div class="social-account">
		<div class="social-acc-title">
			<div class="social-line"></div>
			<div class="social-acc-title-text">社交账号快速登录</div>
		</div>
		<ul class="social-choose">
			<li>
				<a href="javascript:;">
					<i></i>
					<p>微信登录</p>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<i></i>
					<p>QQ登录</p>
				</a>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
	import './register.scss';
	import Bus from '../../../common/widget/bus';
	import Util from '../../../common/widget/util';
	export default {
		data: function(){
			return {
				tel: '',
				password: '',
				code: '',
				getCodeText: '获取验证码',
				activeStatus: false,
				disabledStatus: false,
				sendCodeStatus: false
			};
		},
		methods: {
			initPage: function () {

			},
			getCode: function () {
				var self = this;
				var second = 59;
				if(self.activeStatus){
					self.activeStatus = false;
					self.disabledStatus = true;
					self.getCodeText = '发送中...';
					//发送手机号获取验证码
					//...

					//成功后回调
						self.activeStatus = false;
						self.disabledStatus = true;
						self.sendCodeStatus = true;
						//self.getCodeText = second-- + 's 后重新获取';
						var timer = setInterval(function(){
							if(second < 0){
								self.disabledStatus = false;
								self.activeStatus = true;
								self.getCodeText = '再次获取验证码'
								clearInterval(timer);
							}else{
								self.getCodeText = second-- + 's 后重新获取';
							}
						}, 1000);

				}else if(self.disabledStatus){
					Util.toast('请等待');
				}else{
					Util.toast('请填写正确的手机号');
				}
			},
			inputCheck: function () {
				var self = this;
				if(self.tel.length===11 && Util.validateMobile(self.tel)){
					self.disabledStatus = false;
					self.activeStatus = true;
				}
			},
			registerHandle: function () {
				//单独发送请求验证验证码是否有效 || 在注册请求里面验证
				//...

				if(this.tel.trim()==='' || !Util.validateMobile(this.tel)){
					return Util.toast('请填写正确的手机号');
				}else if(!this.sendCodeStatus){
					return Util.toast('请先获取验证码');
				}else if(this.code.trim()===''){
					return Util.toast('请填写验证码');
				}else if(this.password.trim()===''){
					return Util.toast('请填写密码');
				}

				Bus.$emit('show-loading', true);
				//发送注册请求
				//...

			}
		},
		created: function(){
			this.initPage();
		}
	};
</script>