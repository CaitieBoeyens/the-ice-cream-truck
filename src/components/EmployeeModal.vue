<template>
    <div :class="modalClasses">

        <div class="modal-background"></div>
        <div class="modal-content employee-block">
            <span class="close" @click="close">
                <p>X</p>
            </span>
            <div class="form">

                <h2>Enter your Employee code to get 20% off</h2>
                <input class="input is-large" type="password" placeholder="Employee code" v-model="code">
                <div class="has-text-centered">
                    <div class="button btn employee-btn has-text-centered" v-bind:disabled="this.code!=='1234'" @click="toggleEmployeeOrder">Apply</div>
                </div>
                <div class="order-total">
                    <h2>Total: {{orderTotal | currency}}</h2>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    props: {
        isOpen: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        ...mapState({ Order: state => state.Store.Order }),
        ...mapGetters(['Order/orderTotal']),
        orderTotal() {
            return this['Order/orderTotal'];
        },
        modalClasses() {
            return {
                modal: true,
                'is-active': this.isOpen
            };
        }
    },
    data() {
        return {
            code: ''
        };
    },

    methods: {
        close() {
            this.$emit('close');
        },
        toggleEmployeeOrder() {
            this.$store.commit('Order/TOGGLE_EMPLOYEE_ORDER');
        }
    },
    filters: {
        currency(value) {
            return `R ${Number(value).toFixed(2)}`;
        }
    }
};
</script>

<style lang=scss scoped>
@import '../assets/styles/variables.scss';

.employee-block {
    background-color: $dark-pink;
    width: 50%;
    min-height: 30vh;
}

.employee-btn {
    border: solid white 4px;
    color: white;
    font-size: 1.2em;
    padding: 20px;
    &:hover {
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.176);
        border: solid white 4px;
        color: white;
    }
}

.employee-btn[disabled] {
    border: solid $light-pink 4px;
    color: $light-pink;
    font-size: 1.2em;
    padding: 20px;
    background-color: $dark-pink;
    opacity: 1;
    &:hover {
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.176);
        border: solid $light-pink 4px;
        color: $light-pink;
    }
}

.close {
    float: right;
    cursor: pointer;
    background: white;
    border-radius: 50%;
    margin: 20px;
    padding: 2.5px 10px;
}

.close p {
    color: $dark-pink;
    font-weight: bold;
}

.form {
    padding: 4em 50px 2em;
}
.form h2 {
    font-size: 1.6em;
    text-align: center;
}
.form input {
    text-align: center;
    width: 75%;
    margin: 2em 12.5% 1.5em;
}
</style>
