<template>
    <div :class="slideoutClasses">
        <div class="tab" @click="toggleOpen">{{ tabText }}</div>
        <div :class="slideoutInnerClasses">
            <span class="close" @click="toggleOpen">
                <p>X</p>
            </span>
            <h2>Order Summary</h2>
            <div class="order-item">
                <div class="media">
                    <figure class="media-left">
                        <p class="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/128x128.png">
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                                <h2>Large nutty rainbow choclate salted caramel waffle-cone</h2>
                                <h2>Total: R00.00</h2>
                        </div>
                    </div>
                    <div class="media-right">
                        <button class="delete"></button>
                    </div>
                </div>
            </div> <!-- ORDER ITEM -->
            <div class="order-total">
                <h2>Total: R00.00</h2>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    computed: {
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
    data() {
        return {
            open: false
        };
    },
    methods: {
        toggleOpen() {
            this.open = !this.open;
        }
    }
};
</script>

<style lang=scss scoped>
@import "../assets/styles/variables.scss";

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

.prices li {
    list-style: none;
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
    border: solid white 4px;
    padding: 10px;
    width: fit-content;
    margin: 20px;
    float: right;
}
</style>
