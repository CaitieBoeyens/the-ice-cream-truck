<template>

    <div>
        <h5>{{ingredientName}}</h5>
        <ingredient-option
        v-for="i in ingredientList"
        v-bind:key="i.name"
        v-bind:icon-name="i.name"
        v-bind:value="i.name"
        v-bind:currently-selected="getCurrentSelected(i.name)"
        @selected="setCurrentSelected"/>
    </div>
</template>

<script>
import IngredientOption from "./IngredientOption";
export default {
    props: {
        ingredientName: {
            required: true,
            type: String
        },
        ingredientList: {
            required: true,
            type: Array
        },
        canSelectMultiple: {
            required: false,
            type: Boolean,
            default: false
        }
    },
    components: {
        IngredientOption
    },
    data() {
        return {
            selection_tracker: null
        };
    },
    methods: {
        setCurrentSelected(selected_option) {
            if (this.canSelectMultiple) {
                this.selection_tracker[selected_option] = !this
                    .selection_tracker[selected_option];
            } else {
                this.selection_tracker = selected_option;
            }
        },
        getCurrentSelected(name) {
            if (this.canSelectMultiple) {
                return this.selection_tracker[name] ? name : null;
            } else {
                return this.selection_tracker;
            }
        }
    },
    created() {
        console.log(this.ingredientList)
        if (this.canSelectMultiple) {
            this.selection_tracker = this.ingredientList
                .map(i => ({ [i.name]: false }))
                .reduce((obj, curr) => ({ ...obj, ...curr }));
        }
    }
};
</script>

<style>
</style>
