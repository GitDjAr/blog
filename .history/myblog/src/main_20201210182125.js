import Vue from 'vue'
import App from './App.vue'
import { DatePicker } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
Vue.use(DatePicker)

new Vue({
  el: '#app',
  render: h => h(App)
})
