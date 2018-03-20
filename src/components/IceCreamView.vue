<template>
  <div class="icecream-view">
      <div class="icecream-render"></div>
      <div class="icecream-info">
        <div class="icecream-name">
            <h2 class="icecream-text">large hot fudge nutty ninety-nine chocolate waffle cone</h2>
        </div>
        <div class="icecream-price">
            <h2>R37.25</h2>
        </div>
      </div>
  </div>
</template>

<script>
export default {};
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
