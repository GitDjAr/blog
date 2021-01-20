import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 暴露router
const router = new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/setting:2',
    },
    {
      path:'/index',
      // meat:{title:'hello,欢迎来到我博客',foter:false},
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
      component:()=>import('@/views/notes/notes')
    },
    {
      path:'/video',
      meat:{title:'video',foter:true},
      name:'video',
      component:()=>import('@/views/videodev/index')
    },
    {
      path:'/test',
      meat:{title:'test',foter:true},
      name:'test',
      component:()=>import('@/views/videodev/test')
    }
  ]
})

export default router