<template>
    <div @click="notifyOfSelection" v-bind:class="option_css">
        <img v-bind:src="icon_path">
    </div>
</template>

<script>
export default {
    props: {
        iconName: {
            required: true,
            type: String
        },
        value: {
            required: true,
            type: String
        },
        currentlySelected: {
            required: false,
            type: String,
            default: null
        }
    },
    computed: {
        is_currently_selected() {
            return this.value === this.currentlySelected;
        },
        icon_path() {
            return require(`../assets/icons/${this.iconName}.svg`);
        },
        option_css() {
            return {
                option: true,
                "is-selected": this.is_currently_selected
            };
        }
    },
    methods: {
        notifyOfSelection() {
            this.$emit("selected", this.value);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.option {
    background-color: $light-pink;
    width: 90%;
    margin: 0.5em 5%;
    border-radius: 20px;
    cursor: pointer;

    & img {
        padding: 5px 20% 0px;
    }
}
.is-selected {
    background-color: $dark-pink;
}
</style>
