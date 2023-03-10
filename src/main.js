import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
// import router from './router'

const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    reset(state) {
      state.count = 0
    },
    change(state,inputVal) {
        state.count = inputVal
    }

  }
})

import './assets/main.css'
const app = createApp(App)

app.use(store)

app.mount('#app')
