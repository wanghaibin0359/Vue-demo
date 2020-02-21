<template>
    <div style="width:800px" class="container">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名：">
                <el-input v-model="form.user"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
                <el-input v-model="form.psd"></el-input>
            </el-form-item>
            <el-button type="primary" @click="onSubmit">立即登录</el-button>
            <el-button type="primary" @click="testClick">test</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                user: "",
                psd: ""
            }
        };
    },
    methods: {
        testClick() {
            console.log(this.$route.query.redirect);
        },
        onSubmit() {
            this.$store
                .dispatch("user/login", { ...this.form })
                .then(() => {
                    this.$router.push({
                        path: this.$route.query.redirect || "/"
                    });
                })
                .catch(error => {
                    alert(error);
                });
        }
    }
};
</script>

<style>
</style>