<template>
    <v-col class="pa-0" >

        <drawer v-if="$store.getters.currentUser"></drawer>

        <v-app-bar app clipped-left class="menu">
            <v-toolbar-title style="font-family: Oswald,sans-serif;">FUT SNIPER BOT - Трансферный бот для комфортной торговли в FIFA 21</v-toolbar-title>
            <v-spacer></v-spacer>
            <router-link :to="{name: 'about'}">
                <div class="mx-3 black--text font-weight-medium menuItem">Главная</div>
            </router-link>
            <router-link :to="{name: 'howitworks'}">
            <div class="mx-3 black--text font-weight-medium menuItem">Как это работает?</div>
            </router-link>
            <router-link :to="{name: 'advantages'}">
                <div class="mx-3 black--text font-weight-medium menuItem">Бесплатно</div>
            </router-link>
            <router-link :to="{name: 'buy'}">
                <div class="mx-3 black--text font-weight-medium menuItem">Наши тарифы</div>
            </router-link>
            <router-link :to="{name: 'instruction'}">
                <div class="mx-3 black--text font-weight-medium menuItem">Инструкция</div>
            </router-link>
            <div v-if="$store.getters.currentUser" class="huh">
            <div class="mr-3">{{$store.getters.currentUser.username}}</div>
            <v-btn @click="logout" icon>
                <v-icon size="20">mdi-exit-to-app</v-icon>
            </v-btn>
            <v-btn icon @click="$store.state.drawer = !$store.state.drawer">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            </div>
            <div v-else>
                <router-link :to="{name: 'login'}">
                <div class="mx-3 black--text font-weight-medium menuItem">Вход/Регистрация</div>
            </router-link>
            </div>
        </v-app-bar>
        <router-view></router-view>
        <v-footer class="font-weight-medium twh">
            <v-col class="text-center" cols="12">
                {{ new Date().getFullYear() }} — <strong>FUT MONEY BOT</strong>
            </v-col>
        </v-footer>
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
    position: relative;
    background-attachment: initial;
    overflow: auto;
    overflow-x: hidden;
    background-size: cover !important;
    background-repeat: no-repeat !important;
}
.menuItem{
    font-family: Oswald,sans-serif;
}
.menu{
    line-height: 80px;
    font-size: 1.2rem;
    align-items: stretch;
    justify-content: flex-end;
}
.huh{
    z-index: 1000;
    height: 100%;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.twh {
    position: absolute;
    bottom: 0;
    width: 100vW;
}

</style>