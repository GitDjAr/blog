import Vue from 'vue'
import App from './App.vue'
import router from 'vue-router'
import { DatePicker } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
Vue.use(DatePicker)
import { Button } from 'ant-design-vue';
Vue.use(Button);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
