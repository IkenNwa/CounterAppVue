import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
// import router from "./router"

const store = createStore({
  state: {
    count: 0,
    warning: null,
    lastInput: null,
    lastOperand: null,
  },
  mutations: {
    increment(state) {
      state.count++
      state.lastInput = state.count
      state.lastOperand = "Increment"
    },
    decrement(state) {
      if(state.count === 0) {
        state.warning = "You can't go below the Default Value '0'."
        state.lastInput = state.count
        setTimeout(() => {
            state.warning = null
        }, 5000);
      }else{
        state.count--
        state.lastInput = state.count
        state.lastOperand = 'Decrement'
      }
    },
    reset(state) {
      state.count = 0
      state.lastInput = state.count
      state.lastOperand = 'Reset'
    },
    change(state,inputVal) {
        state.count = inputVal
        state.lastInput = state.count
        state.lastOperand = 'Set Value'
    }

  }
})

import './assets/main.css'
const app = createApp(App)

app.use(store);
// app.use(router)

app.mount('#app')
