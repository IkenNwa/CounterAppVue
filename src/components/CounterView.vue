<script>
</script>
<template>
    <h1>{{ $store.state.count }}</h1>
    <p v-if="$store.state.warning">{{ $store.state.warning }}</p>
</template>

<style>
    h1{
        font-size: 100px;
        color: white;
        padding: 10px;
    }
    p{
        font-size: 10px;
        padding: 10px;
        color: #ff0000;
        text-align: center;
    }
</style>