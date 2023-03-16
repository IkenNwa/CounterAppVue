import { computed } from 'vue'
import { useStore } from 'vuex'

export function useCount() {
  const store = useStore()

  return {
    count: computed(() => store.state.count),
    warning: computed(() => store.state.warning)
  }
}

export function useOperation() {
  const store = useStore()

  return {
    increment: () => store.commit('increment'),
    decrement: () => store.commit('decrement'),
    reset: () => store.commit('reset'),
    change: (e) => store.commit('change', e.target.value)
  }
}
