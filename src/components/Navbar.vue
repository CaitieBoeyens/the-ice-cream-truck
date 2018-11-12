<template>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                    <a class="navbar-item" href="/index.html">
                        <h1>The Ice Cream Truck</h1>
                    </a>

                    <div class="navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
            </div>
            <div class="navbar-menu">

                <div class="navbar-start column is-4" id="logo-con">
                    <a href="/index.html">
                        <img src="../assets/logo.svg" alt="logo">
                    </a>
                </div>

                <div class="navbar-end">
                    <router-link to="/" class="navbar-item">
                        <h2>Home</h2>
                    </router-link>
                    <router-link to="/order" class="navbar-item">
                        <h2>Order Now</h2>
                    </router-link>

                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

@import "../assets/styles/variables.scss"

.navbar
    background-color: rgba(0, 0, 0, 0)
    & a
        &:hover
            text-shadow: 1px 1px 2px #31d9c0
        & img:hover
            filter: drop-shadow( 1px 1px 2px $hot-pink)
</style>
