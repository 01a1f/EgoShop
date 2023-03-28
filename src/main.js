import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/common.css'

import './utils/init'
import api from './api/index.js'
import eventbus from './utils/eventbus'

import './router/permission'

Vue.use(ElementUI)
Vue.prototype.$api = api;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
