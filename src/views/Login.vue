<template>
    <div class="login_page fillcontain">
        <transition name="form-fade" mode="in-out">
            <section class="form_contianer" v-show="showLogin">
                <div class="manage_tip">
                    <p>elm后台管理系统</p>
                </div>
                <el-form :model="loginForm"  ref="loginForm">
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username" placeholder="用户名">
                            <span>dsfsf</span>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            type="primary"
                            @click="submitForm()"
                            class="submit_btn"
                        >登陆</el-button>
                    </el-form-item>
                </el-form>
                <p class="tip">温馨提示：</p>
                <p class="tip">直接点击登录即可</p>
                <!-- <p class="tip">注册过的用户可凭账号密码登录</p> -->
            </section>
        </transition>
    </div>
</template>

<script>
export default {
	    data(){
			return {
				loginForm: {
					username: '',
					password: '',
				},
				showLogin: false,
			}
		},
		mounted(){
			this.showLogin = true;
		},
		
		methods: {
			
			submitForm(formName) {
				this.$router.push({path:"/manage"})
			},
		},
	}
</script>
<style lang="less" scoped>
@import "../style/mixin";
.login_page {
    background-color: #324057;
}
.manage_tip {
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;
    p {
        font-size: 34px;
        color: #fff;
    }
}
.form_contianer {
    .wh(320px, 210px);
    .ctp(320px, 210px);
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
    .submit_btn {
        width: 100%;
        font-size: 16px;
    }
}
.tip {
    font-size: 12px;
    color: red;
}
.form-fade-enter-active,
.form-fade-leave-active {
    transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
}
</style>