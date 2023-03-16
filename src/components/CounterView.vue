<script setup>
import { useCount } from '../composables/composable';

const {
    count,
    warning
} = useCount()

</script>
<template>
    <h1>{{ count }}</h1>
    <p v-if="warning">{{ warning }}</p>
</template>

<style scoped>
h1 {
    font-size: 100px;
    color: white;
    padding: 10px;
}

p {
    font-size: 10px;
    padding: 10px;
    color: #ff0000;
    text-align: center;
}
</style>