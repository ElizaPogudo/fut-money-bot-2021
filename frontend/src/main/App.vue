<template>
    <v-app>
        <div class="rt" v-bind:style="image"></div>
        <v-main>
            <router-view></router-view>
        </v-main>
        <snackbar/>
    </v-app>
</template>

<script>
    import Snackbar from "../components/template/Snackbar";

    export default {
        name: 'App',
        components: {
            Snackbar
        },

        data: () => ({}),
        created() {
           this.$store.dispatch('me')
        },
        computed:{
            image() {
                return {background : `url(${require('../../static/images/main.jpg')})` }

            }
        },
        methods: {}
    };
</script>

<style>
    a {
        text-decoration: none;
    }
.rt{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    }
</style>
