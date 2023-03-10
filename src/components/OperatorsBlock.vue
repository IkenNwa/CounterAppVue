<script setup>
// import { operators } from '../assets/operators';



</script>
<template>
    <div class="grid">
        <input type="button" value="Increment" @click="$store.commit('increment')" />
        <input type="button" value="Decrement" @click="$store.commit('decrement')" />
        <input type="button" value="Reset" @click="$store.commit('reset')" class="double" />
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
    width: 40vw;
    gap: 4px;
}
.double{
    grid-column: 1/-1;
}

input {
    padding: 10px;
    width: 100%;
    border: 3px solid #1efc1e;
    border-radius: 5px;
    color: white;
}
</style>