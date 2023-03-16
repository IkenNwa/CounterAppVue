<script setup>


import HomeComp from "./components/HomeComp.vue"
</script>

<template>
  <div class="main">
    <HomeComp />
    <div class="routes">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
}

.routes {
  padding: 3em;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60vw;
}

@media (width< 770px) {
  .main {
    flex-direction: column;
    align-items: center;
  }

  .routes {
    height: 70vh;
    width: 100%;
    padding: 2em;
  }
}
</style>
