<template>
    <div class="fillcontain">
        <el-row style="height: 100%;" type="flex">
            <el-menu
                :default-active="defaultActive"
                class="manage-siderbar-bg border-0 el-menu-vertical-demo position-relative"
                @open="handleOpen"
                @close="handleClose"
                background-color="#324057"
                text-color="#fff"
                active-text-color="#ffd04b"
                :collapse="!!isCollapse"
                router
            >
                <el-menu-item index="/manage">
                    <i class="el-icon-menu"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航二</span>
                    </template>
                    <el-menu-item index="/manage/table">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </template>
                    <el-menu-item index="/manage/table">选项1</el-menu-item>
                </el-submenu>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
                <el-menu-item
                    class="pointer position-absolute w-100"
                    @click="isCollapse^=true"
                    style="color:#fff;bottom:0px;"
                >
                    <i :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"></i>
                    <span slot="title">{{isCollapse?'展开':'折叠'}}</span>
                </el-menu-item>
            </el-menu>
            <div class="d-flex flex-column w-100 " style="height: 100%">
                <head-top></head-top>
                <el-main class="flex-full w-100 bg-white">
                    <router-view></router-view>
                </el-main>
            </div>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isCollapse: false
        };
    },
    computed: {
        defaultActive: function() {
            return this.$route.path;
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 17rem;
}
</style>
