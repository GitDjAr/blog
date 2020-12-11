import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

import 'style-ant/style.scss'


import Antd from 'ant-design-vue';
Vue.use(Antd);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
