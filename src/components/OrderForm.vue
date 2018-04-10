<template>
    <div class="order-form">
        <div class="columns">
            <div class="column is-one-fifth has-text-centered">
                <ingredient-section
                v-bind:ingredient-list="containers"
                ingredient-name="Container"
                @selected = "setSelectedContainerType"
                />
            </div>
            <div class="column is-one-fifth has-text-centered">
                <ingredient-section
                v-bind:ingredient-list="scoopOptions"
                ingredient-name="Size"
                @selected = "setSelectedContainerSize"
                />
            </div>
            <div class="column is-one-fifth has-text-centered">
                <ingredient-section
                v-bind:ingredient-list="Store.ingredients.flavours"
                ingredient-name="Flavour"
                @selected = "setSelectedFlavour"
                />
            </div>
            <div class="column is-one-fifth has-text-centered">
                <ingredient-section
                v-bind:ingredient-list="Store.ingredients.sauces"
                ingredient-name="Sauce"
                @selected = "setSelectedSauce"
                />
            </div>
            <div class="column is-one-fifth has-text-centered">
                <ingredient-section
                v-bind:ingredient-list="Store.ingredients.toppings"
                ingredient-name="Toppings"
                @selected = "setSelectedTopping"
                can-select-multiple
                />
            </div>
        </div>
        <div class="button btn order-btn" @click="resetCurrentSelections">Clear</div>
        <div class="button btn order-btn" v-bind:disabled="!this.Store.currentIceCream" @click="addIceCreamToOrder">Add to Order</div>

    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
            containers,
            flavours,
            isEmployeeOrderModalActive: false
        };
    },
    methods: {
        ...mapActions([
            "setSelectedContainerType",
            "setSelectedContainerSize",
            "setSelectedFlavour",
            "setSelectedSauce",
            "setSelectedTopping",
            "resetCurrentSelections",
            "addIceCreamToOrder"
        ])
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

.card {
    background-color: $dark-pink;
}

.card h2 {
    color: white;
    font-weight: 600;
}

.card .order-btn {
    border: solid white 4px;
    color: white;
}
</style>
