import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import store from '@/store'
import { setToken, getToken } from '@/lib/utils'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  // to.meta && setTitle(to.meta.title)
  const token = getToken()
  if (token) {
    store.dispatch('authorization', token).then(() => {
      if (to.name === 'login') next({ name: 'home' })
      else next()
    }).catch(() => {
      setToken('')
      next({ name: 'login' })
    })
  } else {
    if (to.name === 'login') next()
    else next({ name: 'login' })
  }
})

export default router
