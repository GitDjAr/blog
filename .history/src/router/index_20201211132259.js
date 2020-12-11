import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// const index = ()=>import('v/views/index')
// 暴露router
export default new Router({
  mode:'history',
  routes:[
    // {
    //   path:'/',
    //   redirect:'/index',
    // },

    {
      path:'/index',
      meat:{title:'hello,欢迎来到我博客',foter:false},
      name:'index',
      // component:index
    },
    {
      path:'/about',
      meat:{title:'关于我',foter:true},
      name:'about',
      // component:()=>import('v/views/index'),
      component:()=>import('@/components/help/help_cmp/problem3')
    }
  ]
})