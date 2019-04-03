import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/argu/:name', // 动态路由
    name: 'argu',
    component: () => import('@/views/Argu.vue')
  },
  {
    path: '/parent', // 嵌套路由
    name: 'parent',
    component: () => import('@/views/Parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/Child.vue')
      }
    ]
  },
  {
    path: '/name_view',
    components: {
      default: () => import('@/views/Child.vue'),
      email: () => import('@/views/Email.vue'),
      tel: () => import('@/views/Tel.vue')
    }
  },
  {
    path: '/main',
    redirect: '/'
  },
  {
    path: '/func',
    redirect: to => {
      return {
        name: 'home'
      }
    }
  }
]

export default routes
