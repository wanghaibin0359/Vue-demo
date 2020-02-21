import Vue from 'vue'
import '@/icon/index'
import App from './App.vue'
import './plugins/element.js'
import create from './utils/create'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'

import router from './router'
import'./permission'

//import router from './krouter'

import store from './store'
//import store from './kstore'
import svgicon from '@/components/svgicon'
import axios from "@/utils/request"




Vue.component("icon-svg", svgicon)
Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()
// Vue.prototype.$create = create
Vue.use(create)
Vue.use((Vue) => {
  Vue.prototype.$ajax = axios
})

// 3.挂载router实例，why？
let app=new Vue({
  // Vue.prototype.$router = router
  router,
  store,
  render: h => h(App)
}).$mount('#app')