// import Vue from 'vue'   //引入Vue
import { createRouter } from 'vue-router'
import Home from '@/components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '@/views/test.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
