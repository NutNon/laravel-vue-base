import Vue from 'vue'
import VueRouter from 'vue-router'

import MainLayout from './components/MainLayout.component'
import Login from './views/Login.page'
import Logout from './views/Logout.page'
import Home from './views/Home'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          component: Home,
        }
      ]
    },
  ]
})

export default router
