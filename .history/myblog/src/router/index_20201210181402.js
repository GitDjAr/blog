import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 暴露router
export default new Router({
  mode:'history',
  routes:[
    {
      paht:'/',
      redirect:'/index',
    },

    {
      path:'/index',
      meat:{title:'hello,欢迎来到我博客'},
      name:'index',
    }
  ]
})