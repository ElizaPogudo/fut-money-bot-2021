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
                Любой новый пользователь может один раз воспользоваться бесплатной подпиской на день. Чтобы это сделать:
                <br>
            </h3>
        </v-row>
        <v-row no-gutters >
            <v-col class="featurewidget">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="users" />
                </v-row>
                <v-row no-gutters >
                <h3>Шаг 1. Зарегистрируйтесь</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Чтобы работать с трансферным ботом вам потребуется зарегистрироваться на нашем сайте. Займет не более минуты.</p>
                </v-row>
            </v-col>
            <v-col class="featurewidget">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="user-shield" />
                </v-row>
                <v-row no-gutters >
                <h3>Шаг 2. Привяжите аккаунт VK</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Это необходимо для проверки подлинности вашего аккаунта. Также вы получите возможность получать информацию о торговле и уведомления об ошибках не садясь за компьютер.</p>
                </v-row>
            </v-col>
            <v-col class="featurewidget">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="cogs" />
                </v-row>
                <v-row no-gutters >
                <h3>Шаг 3. Активируйте подписку</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Все готово, можно активировать подписку в личном кабинете, после чего у вас будет 24 часа чтобы оценить возможности нашего трансферного бота.</p>
                </v-row>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters >
            <h3>
                Режим работы с трансферным списком
            </h3>
        </v-row>
        <v-row>
            <p style="margin-top: 10px">Расширение может вместо вас выставить на рынок нужные вам карточки, которые находятся в трансферном списке. Это особенно удобно после большого пак-опенинга или при очистке клуба, когда в трансферном списке набирается под 100 предметов и выставлять их вручную было бы очень долго. Доступно несколько режимов работы - выставление по актуальной рыночной цене, по заданной пользователем цене, а также быстрое перевыставление непроданных карточек с корректировкой цены. Подробное описание всех режимов можно найти в разделе "Инструкция". Данная функция доступна всем без подписки абсолютно бесплатно.</p>
        </v-row>
        <v-divider ></v-divider>
        <v-row no-gutters >
            <h3>
                Приводите друзей
            </h3>
        </v-row>
        <v-row>
            <p style="margin-top: 10px">Если вы уже пользуетесь ботом и привели друга - можете получить три дня бесплатной подписки, когда он совершит покупку.
Для получения подписки напишите нам на email или в сообщения группы VK и укажите email, который ваш друг указал при регистрации.</p>
        </v-row>
    </v-container>
    <!-- <v-row no-gutters align="center" justify="center" class="d-flex flex-column fill-height text-h4 font-weight-medium">
        Главный экран
    </v-row> -->

</template>

<script>
    export default {
        name: "About",
        components: {},
        data: () => ({}),
        methods: {redirect() {this.$router.push({name: 'howitworks'})}},
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
    margin-bottom: 100px;
    height: max-content;
    padding: 25px 40px;
    text-align: center;
    color: #383c42;
    font-family: Oswald,sans-serif;
}
h1 {
    margin: 0 auto;
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

</style>