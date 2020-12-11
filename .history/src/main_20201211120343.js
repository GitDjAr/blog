import Vue from 'vue'
import App from './App.vue'
import Router from '/vue-router'
import router from './router/index'
import store from './store/index'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'


import Antd from 'ant-design-vue';
Vue.use(Router)
Vue.use(Antd);

new Vue({
  el: '#app',
  Router,
  store,
  render: h => h(App)
})
