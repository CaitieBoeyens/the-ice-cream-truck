<template>
    <div :class="slideoutClasses">
        <div class="tab" @click="toggleOpen">{{ tabText }}</div>
        <div :class="slideoutInnerClasses">
            <span class="close" @click="toggleOpen">
                <p>X</p>
            </span>
            <h2>Order Summary</h2>
            <div v-for="(i, idx) in Order.currentOrder.iceCreams" v-bind:key="idx" class="order-item">
                <div class="media">
                    <div class="media-content">
                        <div class="content">
                                <h2>{{i.getName()}}</h2>
                                <h2>Total: {{i.getPrice() | currency}}</h2>
                        </div>
                    </div>
                </div>
            </div> <!-- ORDER ITEM -->

            <div class="order-total">
                <h2>Total: {{orderTotal | currency}}</h2>
            </div>
            <div>

                <div class="button btn order-btn" @click="toggleEmployeeOrder">Toggle Employee Order</div>
                <div class="button btn order-btn">Checkout</div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
    computed: {
        ...mapState({ Order: state => state.Store.Order }),
        ...mapGetters(["Order/orderTotal"]),
        orderTotal() {
            return this["Order/orderTotal"];
        },
        tabText() {
            return this.open ? "Hide Order" : "Show Order";
        },
        slideoutClasses() {
            return {
                slideout: true,
                "slideout-active": this.open
            };
        },
        slideoutInnerClasses() {
            return {
                "slideout-inner": true,
                "slideout-inner-active": this.open
            };
        }
    },
    created() {
        this.$store.commit("Order/SET_UP_ORDER");
    },
    data() {
        return {
            open: false
        };
    },
    methods: {
        toggleOpen() {
            this.open = !this.open;
        },
        toggleEmployeeOrder() {
            this.$store.commit("Order/TOGGLE_EMPLOYEE_ORDER");
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
@import "../assets/styles/variables.scss";

.order-btn {
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

/* some slideout css from http://usabilitypost.com/2011/04/19/pure-css-slideout-interface/ */

.slideout {
    position: fixed;
    top: 40px;
    right: 0;
    -webkit-transition-duration: 0.3s;
    -moz-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.slideout-inner {
    position: fixed;
    top: 40px;
    right: -500px;
    -webkit-transition-duration: 0.3s;
    -moz-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    background-color: $dark-pink;
    width: 500px;
    padding-left: 20px;
    min-height: 170px;
    max-height: 90vh;
    overflow-y: scroll;
}

.slideout-active {
    right: 500px;
}

.slideout-inner-active {
    right: 0px;
}

.tab {
    position: relative;
    top: 43px;
    right: -48px;
    transform: rotate(-90deg);
    font-family: $oswald;
    text-transform: uppercase;
    font-size: 1.5em;
    font-weight: 600;
    cursor: pointer;
    background: white;
    border: solid $dark-pink 4px;
    color: $dark-pink;
    border-bottom: 0;
    padding: 20px;
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

.slideout-inner h2 {
    font-size: 1.4em;
    margin-top: 20px;
}

.content {
    overflow: hidden;
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
}

.order-total h2 {
    margin: 0;
    font-size: 1.2em;
}

.order-total {
    background-color: $light-pink;
    padding: 10px;
    width: fit-content;
    margin: 20px;
}
</style>
