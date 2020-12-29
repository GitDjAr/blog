import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'


import { Button } from 'ant-design-vue';
Vue.use(Button);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
