<script setup>
import CounterView from './components/CounterView.vue'
import OperatorsBlock from './components/OperatorsBlock.vue';
</script>

<template>
  <div class="template">
    <CounterView />
    <OperatorsBlock /></div>
</template>

<style scoped>
  .template{
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
</style>
