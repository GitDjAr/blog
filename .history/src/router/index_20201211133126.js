import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// const index = ()=>import('v/views/index')
// 暴露router
const router = new Router({
  mode:'history',
  routes:[

    {
      path:'/about',
      meat:{title:'关于我',foter:true},
      name:'about',
      component:reslove =>{require(['@/views/index'], reslove)},
      // component:()=>import('@/components/help/help_cmp/problem3')
    }
  ]
})

export default router