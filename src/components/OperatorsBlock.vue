<script setup>
import { useOperation } from '../composables/composable';

const {
    increment,
    decrement,
    reset,
    change
} = useOperation()
</script>
<template>
    <div class="grid">
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="reset" class="double">Reset</button>
        <input type="number" @change="change" class="double" placeholder="setValue" />
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.double {
    grid-column: 1/-1;
}

input,
button {
    padding: 10px;
    width: 100%;
    border: 3px solid transparent;
    border-radius: 5px;
    color: white;
    transition: 700ms;
    background-color: #0c0d0c92;
}

button:hover {
    border: 3px solid #1efc1e;
}

button:active {
    background-color: #1efc1e;
}
</style>