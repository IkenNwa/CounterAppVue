import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import AboutComp from '../views/AboutComp.vue'

const routes = [
  { path: '/', name:"home", component: WelcomePage },
  { path: '/about', name: 'about', component: AboutComp },
  { path: '/counter', name: 'counter', component: () => import('../views/CounterApp.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
