import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Introduction from '@/pages/introduction'
import Team from '@/pages/team'
import Fund  from '@/pages/fund'
import Active  from '@/pages/active'
import Funda from '@/pages/fund-1'
import Fundb from '@/pages/fund-2'
import Main from '@/pages/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/team',
      name: 'team',
      component: Team 
    },
    {
      path: '/fund/:id?',
      name: 'fund',
      component: Fund  
    },
    {
      path: '/active/:id?',
      name: 'active',
      component: Active   
    },
    {
      path: '/fund-1',
      name: 'fund-1',
      component: Funda 
    },
    {
      path: '/fund-2',
      name: 'fund-2',
      component: Fundb
    },
    {
      path: '/main',
      name: 'main',
      component: Main 
    }

  ]
})
