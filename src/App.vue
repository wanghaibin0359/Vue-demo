<template>
    <div id="app">
          <button class="btn btn-primary" @click="layout">登出</button>
            <div id="nav">
                <router-link to="/">Home</router-link>|
                <router-link to="/about">About</router-link>|
                <router-link to="/other">other</router-link>
            </div>
            <router-view />
        <!-- <svg>
            <use xlink:href="#icon-wx" />
        </svg>-->
        <!-- <icon-svg iconClass="wx" className="wx" @click="yess"></icon-svg> -->
        <!-- 路由出口 -->
    </div>
</template>
<script>
import Login from "./views/Login.vue";
export default {
    components: {
        Login
    },
    created(){
    },
    methods: {
        yess() {},
        layout(){
          this.$store.commit("user/setToken","")
          this.$store.commit("user/setRole",[])
          // this.$router.push({path:"Login",replace:true})
            window.location.reload()
        }
    },

};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
