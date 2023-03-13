<script setup>
// import { operators } from '../assets/operators';



</script>
<template>
    <div class="grid">
        <button @click="$store.commit('increment')" >Increment</button>
        <button @click="$store.commit('decrement')" >Decrement</button>
        <button @click="$store.commit('reset')" class="double" >Reset</button>
        <input type="number" @change="(e) => {
            $store.commit('change', e.target.value)
            e.target.value = null
        }" class="double" placeholder="setValue" />
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}
.double{
    grid-column: 1/-1;
}

input, button {
    padding: 10px;
    width: 100%;
    border: 3px solid #1efc1e;
    border-radius: 5px;
    color: white;
}
button:hover{
    background-color: #1efc1e;
    color: #151615;
}
</style>