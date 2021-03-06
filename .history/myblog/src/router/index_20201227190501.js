import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 暴露router
const router = new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/index',
    },
    {
      path:'/index',
      meat:{title:'hello,欢迎来到我博客',foter:false},
      name:'index',
      component:()=>import('@/views/index')
    },
    {
      path:'/about',
      meat:{title:'关于我',foter:true},
      name:'about',
      component:()=>import('@/views/about/about')
    },
    {
      path:'/notes',
      meat:{title:'笔记',foter:true},
      name:'notes',
      component:()=>import('@views/notes/notes')
    }
  ]
})

export default router