<template>
    <v-navigation-drawer app v-model="$store.state.drawer" 
      right>
        <v-list dense>
            <v-subheader>Навигация</v-subheader>
            <v-list-item-group
                    color="primary"
            >
                <v-list-item :to="{name: el.name}" v-for="(el, index) in list" :key="index">
                    <v-list-item-content>
                        <v-list-item-title>{{el.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Drawer",
        components: {},
        data: () => ({
            list: [
                {name: 'about', title: 'Главная'},
                {name: 'howitworks', title: 'Как это работает?'}
            ]
        }),
        methods: {},
        computed: {}
    }
</script>

<style scoped>

</style>