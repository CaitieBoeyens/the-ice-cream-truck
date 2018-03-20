<template>
   <footer class="footer is-dark">
        <div class="container">
            <div class="columns">
                <div class="column is-one-fifth"></div>
                <div class="column is-three-fifths has-text-centered">
                    <p>The Ice Cream Truck   <i class="fas fa-copyright"></i> </p>
                </div>
                <div class="column is-one-fifth" id="social-media">
                    <span class="level">
                        <i class="fab fa-facebook fa-2x level-item"></i>
                        <i class="fab fa-instagram fa-2x level-item"></i>
                        <i class="fab fa-twitter fa-2x level-item"></i>
                    </span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.footer {
    background-color: $light-pink;
}
</style>
