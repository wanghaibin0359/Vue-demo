<template>
    <el-header style="text-align: right; font-size: 12px;" class="w-100 header_container">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown @command="handleCommand" menu-align="start">
            <i class="el-icon-setting" style="margin-right: 15px;cursor:pointer">个人中心</i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="home">首页</el-dropdown-item>
                <el-dropdown-item command="signout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-header>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: true
        };
    },
    created() {},
    computed: {},
    methods: {
        handleCommand(command) {
            console.log(command);
        },
        home() {
            console.log("home");
        },
        signout() {
            console.log("signout");
        }
    }
};
</script>

<style lang="less">
@import "../style/mixin";
.header_container {
    background-color: #eff2f7;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
}
.avator {
    .wh(36px, 36px);
    border-radius: 50%;
    margin-right: 37px;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
