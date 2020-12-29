import Vue from 'vue'
import App from './App.vue'
import { DatePicker } from 'ant-design-vue'
Vue.use(DatePicker)
import { Button } from 'ant-design-vue';
Vue.use(Button);
new Vue({
  el: '#app',
  render: h => h(App)
})
