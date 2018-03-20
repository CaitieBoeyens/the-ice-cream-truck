<template>
    <div class="app-container">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
    components: {
        Navbar
    }
};
</script>

<style lang="sass">
@import './assets/styles/main.scss'
</style>
