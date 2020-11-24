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
        <template v-if="type === 'standart'">
            <v-row no-gutters class = "center">
            <v-col class="featurewidget widg30">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="battery-half" />
                </v-row>
                <v-row no-gutters >
                <h3>7 Дней</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Цена подписки - 650р. В течении семи дней с момента оплаты можно пользоваться любыми функциями расширения на 2 ПК и 10 аккаунтах одновременно.</p>
                </v-row>
            </v-col>
            <v-col class="featurewidget widg30">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="battery-full" />
                </v-row>
                <v-row no-gutters >
                <h3>30 Дней</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Цена подписки - 1500р. В течении 30 дней с момента оплаты можно пользоваться любыми функциями расширения на 2 ПК и 10 аккаунтах одновременно.</p>
                </v-row>
            </v-col>
        </v-row>
        </template>
        <template v-if="type === 'premium'">
            <v-row no-gutters class = "center">
            <v-col class="featurewidget widg30">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="battery-half" />
                </v-row>
                <v-row no-gutters >
                <h3>7 Дней</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Цена подписки - 890р. В течении семи дней с момента оплаты можно пользоваться любыми функциями расширения на 3 ПК и любом числе аккаунтов одновременно.</p>
                </v-row>
            </v-col>
            <v-col class="featurewidget widg30">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="battery-full" />
                </v-row>
                <v-row no-gutters >
                <h3>30 Дней</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Цена подписки - 2000р. В течении 30 дней с момента оплаты можно пользоваться любыми функциями расширения на 3 ПК и любом числе аккаунтов одновременно.</p>
                </v-row>
            </v-col>
        </v-row>
        </template>

        <div align="center" justify-content="center">
                <v-btn class="subscriptionTypeBlock" color="error" dark large @click="changeTarif('standart')">
                    Standart
                </v-btn>
                <v-btn class="subscriptionTypeBlock" color="error" dark large @click="changeTarif('premium')">
                    Premium
                </v-btn>
        </div>
    </v-container>

</template>

<script>
    export default {
        name: "Buy",
        components: {},
        data: () => ({
            type: 'standart'
        }),
        methods: {
            redirect() {this.$router.push({name: 'buy'})},
            changeTarif(tarif) {this.type = tarif}
        },
        computed: {}
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,300,600');

.hyh{
    width: 90%;
    max-width: 1175px;
    margin: 0 auto;
    background: rgba(255,255,255,.93);
    box-shadow: 4px 0 9px -6px #222,-4px 0 9px -6px #222;
    margin-top: 100px;
    margin-bottom: 100px;
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
    width: 30px;
    height: 30px;
    font-size: 30px;
    text-align: center;
    line-height: 76px;
}
.center{
    justify-content: center;
}
.button-container{
    padding: 30px 0 10px;
}
:root {
  font-size: 16px;
}

* {
  box-sizing: border-box;
}
.subscriptionTypeBlock {
    display: inline-block;
    margin: 30px 25px;
    width: 90px;
    height: 90px;
    border-radius: 20px;
    box-shadow: 4px 0 9px -6px #222,-4px 0 9px -6px #222;
    transition: all ease-in-out .2s;
    position: relative;
    padding: 0;
    cursor: pointer;
    border: 2px solid #e84452;
}

.widg30{
    flex: .3;
}

</style>