import { createStore } from 'vuex'

const store = createStore({
  state: {
    count: 0,
    warning: null
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      if (state.count === 0) {
        state.warning = "You can't go below the Default Value '0'."
        setTimeout(() => {
          state.warning = null
        }, 5000)
      } else {
        state.count--
      }
    },
    reset(state) {
      state.count = 0
    },
    change(state, inputVal) {
      state.count = inputVal
    }
  }
})

export default store
