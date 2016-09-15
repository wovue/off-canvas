import Vue from 'vue'
import VueRouter from 'vue-router'

import {routes} from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: false,
  linkActiveClass: 'is-active',
  transitionOnLoad: true
})

router.map(routes)

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
