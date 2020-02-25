import Vue from 'vue'
import '@/icon/index'
import App from './App.vue'

import router from './router'
import store from './store'

import './plugins/element.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'


import axios from "@/utils/request"
import "@/components/index"
Vue.config.devtools = true;


Vue.config.productionTip = false

Vue.use((Vue) => {
  Vue.prototype.$ajax = axios
})

let app=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')