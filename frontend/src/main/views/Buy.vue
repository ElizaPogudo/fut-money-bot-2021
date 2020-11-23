<template>
    <v-container class="grey lighten-5 hyh">
        <v-row no-gutters >
            <h1>FUT MONEY BOT</h1>
        </v-row>
        <v-row no-gutters >
            <h2>Трансферный бот, встроенный в расширение для браузера, который полностью имитирует работу человека в официальном приложении FIFA WEB APP</h2>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters >
            <h3>
                Для использования нашего бота вам потребуется подписка. Актуальные варианты подписки на данный момент:
            </h3>
        </v-row>
        <v-row no-gutters >
            <v-col class="featurewidget">
                <v-row no-gutters >
                <font-awesome-icon class = "featurewidgeticon" icon="coffee" />
                </v-row>
                <v-row no-gutters >
                <h3>Простота использования</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Для запуска торговли достаточно настроить поисковые фильтры в оф. приложении FIFA, после чего нажать кнопку "Запуск" на панели расширений вашего браузера. Все, можете заняться своими делами, пока бот делает свое дело.</p>
                </v-row>
            </v-col>
            <v-col class="featurewidget">
                <v-row no-gutters >
                <font-awesome-icon class = "featurewidgeticon" icon="user-shield" />
                </v-row>
                <v-row no-gutters >
                <h3>Безопасность</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Бот действительно физически кликает на все кнопки вместо вас. Таким образом, сервер EA видит, что вы работаете руками. Единственное как они могут понять, что работает бот - это большая скорость и продолжительность торговли. Если же торговать с перерывами и на адекватной скорости, то получить бан будет ну очень сложно.</p>
                </v-row>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters >
            <h3>
                Также, рекомендуем посмотреть видеообзор базовых принципов работы нашего расширения, в котором мы в реальном времени за 5 минут заработаем небольшую кучку монеток:
            </h3>
        </v-row>
        <v-row>
            <v-btn
              color="error"
              dark
              large
            >
              Как это работает
            </v-btn>
        </v-row>
    </v-container>
    <!-- <v-row no-gutters align="center" justify="center" class="d-flex flex-column fill-height text-h4 font-weight-medium">
        Главный экран
    </v-row> -->

</template>

<script>
    export default {
        name: "Buy",
        components: {},
        data: () => ({}),
        methods: {redirect() {this.$router.push({name: 'buy'})}},
        computed: {}
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
.hyh{
    width: 90%;
    max-width: 1175px;
    margin: 0 auto;
    background: rgba(255,255,255,.93);
    box-shadow: 4px 0 9px -6px #222,-4px 0 9px -6px #222;
    margin-top: 100px;
    height: max-content;
    padding: 25px 40px;
    text-align: center;
    color: #383c42;
    font-family: Oswald,sans-serif;
}
h1 {
    margin: 0 auto;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 5px 20px;
    border: 3px solid #383c42;
    background: #f9f9f9;
    text-shadow: 0 .01em .03em #111;
}
h2 {
    margin: 15px 0;
    font-weight: 400;
}
h3 {
    margin: 15px auto 0;
    font-weight: 100;
}
.featurewidget {
    width: 300px;
    padding-bottom: 25px;
    padding-top: 25px;
    margin: 0 30px;
    text-align: center;
    display: inline-block;
    position: relative;
    vertical-align: top;
}
.featurewidgeticon{
    color: rgba(252,69,84,.9);
    display: block;
    width: 75px;
    height: 75px;
    font-size: 30px;
    text-align: center;
    line-height: 76px;
}

</style>