import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import Login from '../views/layout/Login'
import UserInfo from '@/components/UserInfo'
import Home from '@/components/Home'
import Tos from '@/components/Tos'
import Test from '@/components/Test'

export const constantRouterMap = [
  { path: '/login', component: Login },
  {
    path: '/',
    name: 'Index',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        props: true
      },
      {
        path: '/user_info',
        name: 'UserInfo',
        component: UserInfo,
        props: true
      },
      {
        path: '/tos',
        name: 'Tos',
        component: Tos,
        props: true
      },
      {
        path: '/test',
        name: 'Test',
        component: Test,
        props: true
      }
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

