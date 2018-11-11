<template>
  <parallax>
    <img src="../assets/ice-cream-truck-full.jpg" alt="ice-cream-truck">
  </parallax>
</template>

<script>
import Parallax from "vue-parallaxy";
export default {
    components: {
        Parallax
    },
    props: {
        speedFactor: 5
    }
};
</script>
