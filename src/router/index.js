import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'home', redirect: '/counter' },
  { path: '/counter', name: 'counter', component: () => import('../views/CounterApp.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
