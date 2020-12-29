import Vue from 'vue'
import App from './App.vue'
import { DatePicker } from 'ant-design-vue'

Vue.use(DatePicker)

new Vue({
  el: '#app',
  render: h => h(App)
})
