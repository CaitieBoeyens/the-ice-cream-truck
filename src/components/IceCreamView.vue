<template>
  <div class="icecream-view">
      <div class="icecream-render"></div>
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
export default {
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
    height: 320px;
}
</style>
