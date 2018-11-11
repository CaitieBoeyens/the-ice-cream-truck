<template>
    <div class="app-container">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { containers, flavours, toppings, sauces } from "./data";
import Store from "./vuex/Store.js";
import StoreHelpers from "./utils/StoreHelpers";

export default {
    components: {
        Navbar,
        Store,
        StoreHelpers
    },
    mounted() {
        this.$store.dispatch("makeIngredients", {
            containers: StoreHelpers.transformContainersList(containers),
            flavours: flavours,
            toppings: toppings,
            sauces: sauces
        });
    }
};
</script>

<style lang="sass">
@import './assets/styles/main.scss'
</style>
