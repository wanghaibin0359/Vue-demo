import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Manage from '../views/manage.vue'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => console.log(error))
}

// 1.应用插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LOGIN',
    component: Login
  },
  {
    path: '/manage',
    name: '',
    component: Manage,
    children: [
      {
        path: '',
        name: 'Home',
        component: ()=>import(/* webpackChunkName: "Manage" */ "@/views/Home.vue")
      },
      {
        path: '/manage/table',
        name: 'table',
        component: ()=>import(/* webpackChunkName: "table" */ "@/views/table.vue")
      },
    ]
  },
  {
    path: '*',
    component: () => import( /* webpackChunkName: "about" */ "@/views/404.vue")
  },
]

// 2.创建实例
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
