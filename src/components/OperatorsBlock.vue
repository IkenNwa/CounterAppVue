<script setup>
// import { operators } from '../assets/operators';



</script>
<template>
    <!-- <input v-for="operand in operators" :key="operand.id" :value="operand.operation" :type="operand.type"
        :class="operand.operation" @click="$store.commit(operand.operate)" /> -->
        <input type="button" value="Increment" @click="$store.commit('increment')" />
        <input type="button" value="Decrement" @click="$store.commit('decrement')" />
        <input type="button" value="Reset" @click="$store.commit('reset')" />
        <input type="number" @change="(e) => {
            $store.commit('change', e.target.value)
        }" />
        
</template>

<style scoped>
    input{
        padding: 10px;
        width: 100%;
    }
</style>