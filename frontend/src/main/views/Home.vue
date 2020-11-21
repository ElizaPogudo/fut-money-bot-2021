<template>
    <v-col class="pa-0 fill-height background" v-bind:style="image">
        <drawer></drawer>

        <v-app-bar app clipped-left>
            <v-btn icon @click="$store.state.drawer = !$store.state.drawer">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <router-link :to="{name: 'about'}">
                <div class="mx-3 black--text font-weight-medium">FUT MONEY BOT - Трансферный бот для комфортной торговли в FIFA 21</div>
            </router-link>
            <v-spacer></v-spacer>
            <div class="mr-3">{{$store.getters.currentUser.username}}</div>
            <v-btn @click="logout" icon>
                <v-icon size="20">mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
        <router-view></router-view>
    </v-col>
</template>

<script>
    import Drawer from '../components/Drawer'

    export default {
        name: 'Home',
        components: {
            Drawer
        },
        data: () => ({}),
        methods: {
            logout() {
                this.$router.push({name: 'login'})
                this.$store.dispatch('logout')

            }
        },
        computed: {
            image() {
                return {background : `url(${require('../../../static/images/main.jpg')})` }

            }
        },
        watch: {}
    }
</script>
<style scoped>
    .background {
        background-attachment: scroll;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-attachment: initial;
}
</style>