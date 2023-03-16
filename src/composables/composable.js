import { ref } from "vue";

function useCount() {

    const count = ref()

    return {
        count
    }
}

export default useCount