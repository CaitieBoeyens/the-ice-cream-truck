<template>
  <div class="icecream-view">
      <div v-if = "!current_ice_cream" class="loader-container">
          <div class="columns is-centered">
              <div class="column is-6">
                    <IceCreamLoader/>
              </div>
          </div>
          <div class="columns is-centered">
              <div class="column is-6">
                    <h5>Please add more to your order</h5>
              </div>
          </div>
      </div>
      <div v-else class="icecream-render">
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
        current_ice_cream() {
            return this.Store.currentIceCream;
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
</style>
