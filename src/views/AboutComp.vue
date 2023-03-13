<script></script>
<template>
    <section>
        <h1>About Page</h1>
        <article>
            This is a VueJs Project that uses Vuex to manage Global State that will be avaiilable to all the components in
            the
            project.<br>
            Your last Operation was <span>{{ $store.state.lastOperand }}</span> with a Value of <span>{{
                $store.state.lastInput }}</span><br>
            The Home Page Shows a Welcome Screen<br>
            The About Page is this Page<br>
            The Counter Page is the Main aim of this Project with Increment, Decrement, Reset, and an Input to Automatically
            change the count number<br>
            As you can see on this page the Global state is reflected as the Button clicked is updated by it.
        </article>
    </section>
</template>
<style scoped>
span {
    color: #1cfe1c;
    font-style: italic;
}

h1 {
    margin-block: 15px;
}
</style>