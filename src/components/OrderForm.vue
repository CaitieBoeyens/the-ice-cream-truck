<template>
    <div class="order-form">
        <div class="columns">
            <div class="column is-one-fifth has-text-centered">
                <ingredient-section
                v-bind:ingredient-list="containers"
                ingredient-name="Container"
                />
            </div>
            <div class="column is-one-fifth has-text-centered">
                <ingredient-section
                v-bind:ingredient-list="scoopOptions"
                ingredient-name="Size"
                />
            </div>
            <div class="column is-one-fifth has-text-centered">
                <ingredient-section
                v-bind:ingredient-list="Store.ingredients.flavours"
                ingredient-name="Flavour"
                />
            </div>
            <div class="column is-one-fifth has-text-centered">
                <ingredient-section
                v-bind:ingredient-list="Store.ingredients.sauces"
                ingredient-name="Sauce"
                />
            </div>
            <div class="column is-one-fifth has-text-centered">
                <ingredient-section
                v-bind:ingredient-list="Store.ingredients.toppings"
                ingredient-name="Toppings"
                can-select-multiple
                />
            </div>
        </div>
        <div class="button btn order-btn">Clear</div>
        <div class="button btn order-btn">Add to Order</div>
        <div class="button btn order-btn">Employee Order</div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import IngredientSection from "./IngredientSection";
import { containers, flavours, toppings, sauces } from "../data";
export default {
    components: {
        IngredientSection
    },
    computed: {
        ...mapState(["Store"]),
        scoopOptions() {
            return containers
                ? containers[0].sizes.map(s => ({
                      name: s.size
                  }))
                : [];
        }
    },
    data() {
        return {
            containers
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.order-btn {
    border: solid $dark-pink 4px;
    color: $dark-pink;
    font-size: 1.2em;
    &:hover {
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.176);
        border: solid $dark-pink 4px;
        color: $dark-pink;
    }
}
</style>
