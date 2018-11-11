<template>
<div>
    <Navbar/>
    <section class="container">
		<div id="order-container" class="has-text-centered">
            <h3 class="blue-text">
				What'll it be?
			</h3>
			<div class="columns">
				<div class="column is-one-third" id="icecream-view">
                    <!-- <loading-progress
                    :progress="progress"
                    :indeterminate="indeterminate"
                    :counter-clockwise="counterClockwise"
                    :hide-background="hideBackground"
                    size="180"
                    fill-duration="2"
                    /> -->
                    <IceCreamView v-bind:icecream-price="showPrice" v-bind:icecream-name="showName"/>
                </div>
                <div class="column is-two-thirds" id="icecream-form">
                    <OrderForm v-if="Store.ingredients.sauces.length > 0"/>
                </div>
            </div>
        </div>
	</section>
    <side-bar/>
    <Footer/>
</div>

</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer';
import OrderForm from './OrderForm';
import IceCreamView from './IceCreamView';
import SideBar from './SideBar';
import { mapState } from 'vuex';

export default {
    components: {
        Navbar,
        Footer,
        OrderForm,
        IceCreamView,
        SideBar
    },

    computed: {
        ...mapState(['Store']),

        showPrice() {
            const ic = this.Store.currentIceCream;
            return ic ? ic.getPrice() : null;
        },
        showName() {
            const ic = this.Store.currentIceCream;
            return ic ? ic.getName() : null;
        }
    },
    methods: {}
};
</script>

<style lang="scss">
@import '../assets/styles/order.scss';

.vue-progress-path path {
    stroke-width: 12;
}

.vue-progress-path .progress {
    stroke: $light-pink;
}

.vue-progress-path .background {
    stroke: #edd;
}
</style>
