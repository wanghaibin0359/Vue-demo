import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> console.log(error))
}

// 1.应用插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    component: ()=>import( /* webpackChunkName: "about" */ "@/views/404.vue")
  }
]
export const asyncRouts = [
  {
    path: '/about',
    component: () => import( /* webpackChunkName: "about" */ "@/views/About.vue"),
    meta: {
      title: "yes",
      role:["a"]
    }
  },
  {
    path: '/other',
    component: () => import( /* webpackChunkName: "other" */ "@/views/other.vue"),
    meta: {
      title: "yes",
      role:["a","b"]
    }
  },
]
// 2.创建实例
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
