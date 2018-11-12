<template>
    <div id="app">
        <div class="hero is-fullheight" id="intro-hero">
            <div class="hero-head">
                <Navbar/>
            </div>
            <div class="hero-body is-paddingless" id="intro-hero-body">
                <section class="section is-paddingless" id="welcome">
                    <div class="container welcome-message">
                        <img class="column is-one-quarter is-offset-1" src="../assets/header-ice-cream.png" alt="ice-cream">
                        <h1 class="has-text-centered huge-text">
                            The Ice Cream Truck
                        </h1>
                    </div>
                </section>
            </div>
            <div class="hero-foot">

            </div>
        </div>



        <section class="section is-paddingless ice-cream-truck-img">
            <IceCreamTruckImg/>
        </section>

        <section class="section" id="call-to-action">
            <div class="container" id="call-to-action-con">
                    <h3 class="column is-12 has-text-centered">
                            You've never had ice cream like this before!
                    </h3>
                    <p class="column is-10 is-offset-1 has-text-centered">
                        Our small batch ice cream is like no other. We take care in sourcing all our ingredients so
                        you can be assured you are getting the best quality, ethically produced ice cream you could
                        hope for. An added bonus: you dont need to leave the comfort of your home, we have a
                        24/7 dedicated delivery team to fulfill your cravings no matter the hour.
                    </p>
                    <div class="columns is-centered">
                        <router-link to="/order" class="button btn">
                            Order Now
                        </router-link>
                    </div>

            </div>

        </section>

        <section class="section" id="instagram">
            <div class="container">
                <h3 class="column is-12 has-text-centered">We love our followers!</h3>
                <h4 class="column is-10 is-offset-1 has-text-centered">Share your experience with the hashtags #TICT & #TruckLife</h4>
                <carousel
                :per-page = "3"
                :auto-play = true
                paginationActiveColor="#31d9c0"
                paginationColor="white"
                paginationSize="10"
                easing="linear"
                speed="300"
                class="instagram-carousel">
                    <slide class="instagram">
                        <img src="../assets/instagram/instagram03.jpg">
                    </slide>
                    <slide class="instagram">
                        <img src="../assets/instagram/instagram06.jpeg">
                    </slide>
                    <slide class="instagram">
                        <img src="../assets/instagram/instagram04.jpeg">
                    </slide>
                    <slide class="instagram">
                        <img src="../assets/instagram/instagram05.jpeg">
                    </slide>
                    <slide class="instagram">
                        <img src="../assets/instagram/instagram01.jpg">
                    </slide>
                </carousel>

            </div>
        </section>
        <Footer/>
    </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer';
import { Carousel, Slide } from 'vue-carousel';
import IceCreamTruckImg from './IceCreamTruckImg';
export default {
    components: {
        Navbar,
        Footer,
        Carousel,
        Slide,
        IceCreamTruckImg
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/styles/home.scss';
</style>
