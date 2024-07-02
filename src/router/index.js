import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/pc/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/AboutUS',
    name: 'AboutUS',
    component: () => import(/* webpackChunkName: "about" */ '../views/pc/AboutUS.vue')
  },
  {
    path: '/ProductCenter',
    name: 'ProductCenter',
    component: () => import(/* webpackChunkName: "about" */ '../views/pc/ProductCenter.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }; // Always scroll to top
  },
})


export default router
