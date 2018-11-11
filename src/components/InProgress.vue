<template>
    <div id="app">
        <div class="hero is-fullheight">
            <div class="hero-head">
            </div>
            <div class="hero-body has-text-centered" >

                <div class="container has-text-centered">

                    <div class="loader-container">
                        <div class="columns is-centered">
                            <div class="column is-4">
                                    <IceCreamLoaderWhite/>
                            </div>
                        </div>
                            <h2>We're on our way!</h2>

                    </div>

                    <router-link to="/">
                        <div class="button btn checkout-btn">Go home</div>

                    </router-link>

                </div>



            </div>
            <div class="hero-foot">

            </div>
        </div>
    </div>
</template>

<script>
import IceCreamLoaderWhite from './IceCreamLoaderWhite';
export default {
    components: {
        IceCreamLoaderWhite
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/styles/home.scss';
body {
    background-color: $light-pink;
    background-image: url('../assets/backgrounds/orange-sprinkles.svg');
    background-repeat: repeat-x;
}
</style>
