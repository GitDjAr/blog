import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

import './style-ant/style.scss'

import './icons'
// // 导入markdown 
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// Vue.use(mavonEditor)

import Antd from 'ant-design-vue';


// 主题
import 'style-ant/zhuti';


Vue.use(Antd);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
