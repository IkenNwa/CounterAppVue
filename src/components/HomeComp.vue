<script setup> 

</script>
<template>
    <div class="home">
        <img src="../../public/favicon.svg" alt="Img">
        <h2>Vuex Counter App</h2>
        <ul class="list">
            <RouterLink to="/" >Home</RouterLink>
            <RouterLink to="/about" >About</RouterLink>
            <RouterLink to="/counter">Counter</RouterLink>
        </ul>
    </div>
</template>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 40vw;
    padding: 3em;
    border: 0.5px solid transparent;
    border-right-color: #1efc1e;
}

img {
    width: 70%;
    padding: 20px;
}
@media (width < 770px) {
    .home{
        height: 30vh;
        border-bottom-color: #1efc1e;
        border-right-color: transparent;
        width: 100%;
    }
    img{
        width: 30%;
    }
}

.list{
    display: flex;
    list-style: none;
    margin-block: 10px;
}
li {
    padding: 10px;
    background-color: #08090875;
    margin-inline: 5px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: lighter;
}
</style>