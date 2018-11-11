<template>
    <div :class="modalClasses">

        <div class="modal-background"></div>
        <div class="modal-content checkout-block">
            <span class="close" @click="close">
                <p>X</p>
            </span>
            <div class="form">

                <h2>Review your order</h2>

                <div v-for="(i, idx) in Order.currentOrder.iceCreams" v-bind:key="idx" class="order-item">
                    <div class="media">
                        <div class="media-content">
                            <span class="close" @click="removeIceCream(idx)">
                                <p>X</p>
                            </span>
                            <div class="content">
                                    <h2>{{i.getName()}}</h2>
                                    <h2>{{i.getPrice() | currency}}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order-total">
                <h2>Total: {{orderTotal | currency}}</h2>
                </div>

                <h2>Tell us where to find you</h2>

                <input class="input is-large" type="text" placeholder="Your address" v-model="address">

                <div class="has-text-centered">
                    <router-link to="/progress">
                        <div class="button btn checkout-btn has-text-centered" v-bind:disabled="this.address ===''">Place Order</div>

                    </router-link>
                </div>
                <p class="has-text-centered"><small >*Please note payment will be recieved on delivery</small></p>
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
            address: ''
        };
    },

    methods: {
        close() {
            this.$emit('close');
        },
        removeIceCream(index) {
            this.$store.commit('Order/REMOVE_ICE_CREAM', index);
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

.checkout-block {
    background-color: $dark-pink;
    width: 50%;
    min-height: 30vh;
}

.checkout-btn {
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

.checkout-btn[disabled] {
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
    margin: 1em 12.5% 1.5em;
}

.order-item {
    background-color: white;
    width: 80%;
    margin: 20px auto;
    padding: 20px;
}

.order-item h2 {
    font-size: 1.2em;
    text-transform: none;
    text-align: left;
}

.order-total h2 {
    margin: 0;
    font-size: 1.2em;
    text-align: center;
}

.order-total {
    background-color: $light-pink;
    padding: 10px;
    width: fit-content;
    margin: 20px auto;
}
</style>
