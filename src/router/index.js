import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/counter',
    name: 'home',
    component: () => 
        import("../views/CounterApp.vue")
  }
]

export const router = new VueRouter({
  modes: 'history',
  routes
})


