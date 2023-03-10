<script setup>
import { operators } from '../assets/operators';



</script>
<template>
    <input v-for="operand in operators" :key="operand.id" :value="operand.operation" :type="operand.type"
        :class="operand.operation" @click="$store.commit(operand.operate)" />
</template>

<style scoped></style>