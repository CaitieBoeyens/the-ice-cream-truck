<template>
  <div class="icecream-view">
      <div v-if = "!currentIceCream" class="loader-container">
          <div class="columns is-centered">
              <div class="column is-6">
                    <IceCreamLoader/>
              </div>
          </div>
          <div class="columns is-centered">
              <div class="column is-6">
                    <h5>You need to select a container, size and flavour</h5>
              </div>
          </div>
      </div>
      <div v-else class="icecream-render">
          <img id="container" v-bind:src="containerPath" alt="container">
          <img id="scoops" v-bind:src="scoopsPath" alt="scoops">
          <img id="sauce" v-if="this.Store.currentlyselected.sauce" v-bind:src="saucePath" alt="sauce">
          <img id="almonds" v-if="currentToppings.includes('almonds')" v-bind:src="nutPath" alt="toppings">
          <img id="sprinkles" v-if="currentToppings.includes('sprinkles')" v-bind:src="sprinklePath" alt="toppings">
          <img id="flake" v-if="currentToppings.includes('flake')" v-bind:src="flakePath" alt="toppings">
      </div>
      <div class="icecream-info">
        <div class="icecream-name">
            <h2 class="icecream-text">{{icecreamName}}</h2>
        </div>
        <div v-if="icecreamPrice" class="icecream-price">
            <h2>{{icecreamPrice | currency}}</h2>
        </div>
      </div>
  </div>
</template>

<script>
import IceCreamLoader from "./IceCreamLoader";
import { mapState } from "vuex";
export default {
    components: {
        IceCreamLoader
    },
    props: {
        icecreamName: {
            required: false,
            type: String,
            default: ""
        },
        icecreamPrice: {
            required: false,
            type: [Number, String],
            default: 0
        }
    },
    computed: {
        ...mapState(["Store"]),
        currentIceCream() {
            return this.Store.currentIceCream;
        },
        currentToppings() {
            return this.Store.currentlyselected.toppings.map(t => t.topping);
        },
        containerPath() {
            const cs = this.Store.currentlyselected;
            return require(`../assets/icecream_ingredients/containers/${
                cs.container.name
            }.svg`);
        },
        scoopsPath() {
            const cs = this.Store.currentlyselected;
            return require(`../assets/icecream_ingredients/flavours/${
                cs.container.numScoops
            }_${cs.flavour.name}.svg`);
        },
        saucePath() {
            return require(`../assets/icecream_ingredients/sauces/${
                this.Store.currentlyselected.container.numScoops
            }_${this.Store.currentlyselected.sauce.name}.svg`);
        },
        nutPath() {
            return require(`../assets/icecream_ingredients/toppings/${
                this.Store.currentlyselected.container.numScoops
            }_almonds.svg`);
        },
        sprinklePath() {
            return require(`../assets/icecream_ingredients/toppings/${
                this.Store.currentlyselected.container.numScoops
            }_sprinkles.svg`);
        },
        flakePath() {
            return require(`../assets/icecream_ingredients/toppings/flake.svg`);
        }
    },
    filters: {
        currency(value) {
            return `R ${Number(value).toFixed(2)}`;
        }
    }
};
</script>

<style lang="scss">
@import "../assets/styles/order.scss";
@import "../assets/styles/variables.scss";
$top-offset: 150px;
.icecream-text {
    font-size: 1.5em;
    color: $dark-pink;
}

.icecream-price h2 {
    background: $blue;
}
.icecream-render {
    width: 100%;
    height: 320px;
}

.icecream-render img {
    width: 150px;
}

#container {
    position: absolute;
    width: 135px;
    left: 132px;
    top: 375px;
    z-index: 1;
}

#scoops {
    position: absolute;
    left: 125px;
    top: $top-offset;
    z-index: 2;
}

#sauce {
    position: absolute;
    left: 125px;
    top: $top-offset;
    z-index: 3;
}

#almonds {
    position: absolute;
    left: 125px;
    top: $top-offset;
    z-index: 4;
}

#sprinkles {
    position: absolute;
    left: 125px;
    top: $top-offset;
    z-index: 4;
}

#flake {
    position: absolute;
    left: 180px;
    top: $top-offset - 25px;
    z-index: 0;
}
</style>
