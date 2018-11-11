<template>

    <div>
        <h5>{{ingredientName}}</h5>

            <ingredient-option
            v-for="i in ingredientList"
            v-bind:key="i.name"
            v-bind:icon-name="i.name"
            v-bind:value="i.name"
            v-bind:ingredient-name="i.name"
            v-bind:currently-selected="getCurrentSelected(i.name)"
            @selected="setCurrentSelected"/>

    </div>
</template>

<script>
import IngredientOption from './IngredientOption';
import { mapState } from 'vuex';
import StoreHelpers from '../utils/StoreHelpers';

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
    computed: {
        ...mapState(['Store']),
        selected_options() {
            if (!this.canSelectMultiple) return null;
            return this.Store.currentlyselected[
                this.ingredientName.toString().toLowerCase()
            ];
        },
        selected_option() {
            if (this.canSelectMultiple) return null;
            if (this.ingredientName === 'Size') {
                return { name: this.Store.currentlyselected.containerSize };
            } else if (this.ingredientName === 'Container') {
                return { name: this.Store.currentlyselected.containerType };
            } else {
                return this.Store.currentlyselected[
                    this.ingredientName.toString().toLowerCase()
                ];
            }
        }
    },
    data() {
        return {};
    },
    methods: {
        setCurrentSelected(selected_option) {
            // if (this.canSelectMultiple) {
            //     this.selection_tracker[selected_option] = !this
            //         .selection_tracker[selected_option];
            // } else {
            //     this.selection_tracker = selected_option;
            // }
            this.$emit('selected', selected_option);
        },
        getCurrentSelected(name) {
            if (this.canSelectMultiple) {
                return this.selected_options &&
                    this.selected_options.map(i => i.name).includes(name)
                    ? name
                    : null;
            } else {
                return this.selected_option ? this.selected_option.name : null;
            }
        }
    },
    mounted() {
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
