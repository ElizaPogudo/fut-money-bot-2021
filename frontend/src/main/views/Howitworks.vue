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
                Чтобы начать пользоваться нашим трансферным ботом:
            </h3>
        </v-row>
        <v-row no-gutters > 
            <v-col class="featurewidget">
                <v-row class = "center">
                <font-awesome-icon class ="featurewidgeticon" icon="download" />
                </v-row>
                <v-row no-gutters >
                <h3>Шаг 1. Скачайте и установите расширение</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Ссылку и описание процесса установки можно найти в разделе "Инструкция". Расширение можно установить в любой браузер на основе Chromium (Google Chrome, Opera, Яндекс браузер и другие).</p>
                </v-row>
            </v-col>
            <v-col class="featurewidget">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="cart-plus" />
                </v-row>
                <v-row no-gutters >
                <h3>Шаг 2. Активируйте подписку</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Новые пользователи могут воспользоваться бесплатной пробной подпиской, срок ее действия - 24 часа. Без подписки расширение работать не будет.</p>
                </v-row>
            </v-col>
            <v-col class="featurewidget">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="plane" />
                </v-row>
                <v-row no-gutters >
                <h3>Шаг 3. Запустите торговлю</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Теперь можно открыть приложение FUT WEB APP, настроить в нем желаемые фильтры на трансферном рынке и запустить бота. Он начнет поиск карточек в соотвествии с вашими настройками. Все о настройке расширения можно найти в разделе "Инструкция" личного кабинета</p>
                </v-row>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters > 
            <h3>
                Основные полезные функции нашего бота, которые могут вам пригодиться:
            </h3>
        </v-row>
        <v-row no-gutters > 
            <v-col class="featurewidget">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="info" />
                </v-row>
                <v-row no-gutters >
                <h3>Настройка скорости торговли</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Несмотря на то, что бот полностью имитирует ручные действия, не стоит злоупотреблять "долбежкой" на большой скорости по серверам EA SPORTS. В противном случае вы будете получать капчу, а если продолжите и дальше - вам не дадут работать на рынке на срок до нескольких часов. Чтобы такого не произошло - можно настроить время задержки между поисками, а также частоту и длительность перерывов в работе. Также возможго добавление случайных задержек, чтобы торговля казалась более "человекоподобной".</p>
                </v-row>
            </v-col>
            <v-col class="featurewidget">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="info" />
                </v-row>
                <v-row no-gutters >
                <h3>Менеджер купленных карточек</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">В настройках бота можно указать, что делать с купленной карточкой. Есть 5 вариантов: отправить в трансферный список, отправить в клуб, оставить в нераспределенных (при этом снимается ограничение на 5 нераспределенных предметов), выставить на рынок по вашей цене, а также выставить на рынок по актуальной цене. При этом бот сам посмотрит текущие цены, найдет минимальную, по которой карточка будет быстро продана, и выставит по ней на рынок. Все эти варианты могут быть настроены как угодно в соответствии с вашими целями.</p>
                </v-row>
            </v-col>
            <v-col class="featurewidget">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="info" />
                </v-row>
                <v-row no-gutters >
                <h3>Уведомления и управление торговлей через VK-бота</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">В настройках вашего аккаунта вы можете привязать ваш аккаунт VK, тогда вы получите возможность просматривать состояние текущей торговли, запускать и останавливавть торговлю, менять фильтры, а также получать уведомления об ошибках (например о капче) не садясь за компьютер.</p>
                </v-row>
            </v-col>
        </v-row>
        <v-row no-gutters style="justify-content: center"> 
            <v-col class="featurewidget widg30">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="info" />
                </v-row>
                <v-row no-gutters >
                <h3>Работа с трансферным списком</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Расширение может вместо вас выставить на рынок нужные вам карточки, которые находятся в трансферном списке. Это особенно удобно после большого пак-опенинга или при очистке клуба, когда в трансферном списке набирается под 100 предметов и выставлять их вручную было бы очень долго. Доступно несколько режимов работы - выставление по актуальной рыночной цене, по заданной пользователем цене, а также быстрое перевыставление непроданных карточек с корректировкой цены. Подробное описание всех режимов можно найти в разделе "Инструкция". Данная функция доступна всем без подписки абсолютно бесплатно.</p>
                </v-row>
            </v-col>
            <v-col class="featurewidget widg30">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="info" />
                </v-row>
                <v-row no-gutters >
                <h3>Режим сборки СБЧ</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Вы можете импортировать сборку с сайта futbin.com в список фильтров, и бот автоматически добавит в сборку тех игроков, которые уже есть в вашем клубе, а также докупит недостающих. Это удобно в том случае, если вы не фанат сборки СБЧ, либо когда предстоит собрать множество сборок (например целую лигу) и у вас не хватает на это времени.</p>
                </v-row>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters >
            <h3>
                Не можете определиться, нужно ли вам это расширение?<br>
                Давайте рассмотрим ситуации, когда он может помочь вам сэкономить время и заработать монеты:
            </h3>
        </v-row>
        <v-row no-gutters >
            <v-col class="featurewidget">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="info" />
                </v-row>
                <v-row no-gutters >
                <h3>Быстрый заработок во время ивентов</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Как известно, на старте ивентов на рынке творится ажиотаж. Многие массово сливают все что у них есть по низким ценам, чтобы скорее поиграть за новые карточки. Этим можно легко воспользоваться и дешево купить игроков себе в состав или тут же перепродать на 20-70% дороже.</p>
                </v-row>
            </v-col>
            <v-col class="featurewidget">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="info" />
                </v-row>
                <v-row no-gutters >
                <h3>Выгодная сборка СБЧ</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Поверьте, с таким ботом собирать СБЧ одно удовольствие. Просто импортируйте сборку с futbin.com либо составьте свой список недостающих в сборке игроков, затем запускайте бота и он заснайпит все нужные карточки вместо вас. Кроме того, что так собрать СБЧ будет намного быстрее, так и в моменты ажиотажа расширение может выловить ключевые карточки по цене в 2-3 раза дешевле.</p>
                </v-row>
            </v-col>
            <v-col class="featurewidget">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="info" />
                </v-row>
                <v-row no-gutters >
                <h3>Закупка большого числа карточек</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Если вы знаете, что сейчас какие-то карточки продаются по низкой цене (либо если вы считаете, что они скоро вырастут в цене) - закупите их побольше и отправьте в трансферный список либо оставьте в нераспределенных (расширение умеет обходить ограничение на 5 карточек и оставлять там любое число предметов). При этом можете указать цену закупки еще ниже рыночной и сделать свой профит еще больше.</p>
                </v-row>
            </v-col>
        </v-row>
        <v-row no-gutters style="justify-content: center">
            <v-col class="featurewidget widg30">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="info" />
                </v-row>
                <v-row no-gutters >
                <h3>Долгосрочная торговля</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Пусть кликер заработает вам немного монет пока вы не играете! Просто включите закупку какого-нибудь серебра или расходников по низкой цене и настройте их продажу по рыночной. Все, можете идти по своим делам. По сути, это основной вариант пассивного заработка монет, а его размер будет зависеть от выбранных вами фильтров.</p>
                </v-row>
            </v-col>
            <v-col class="featurewidget widg30">
                <v-row no-gutters class = "center">
                <font-awesome-icon class = "featurewidgeticon" icon="info" />
                </v-row>
                <v-row no-gutters >
                <h3>Снайп нужного игрока в свой состав</h3>
                </v-row>
                <v-row no-gutters >
                <p style= "margin-top: 10px;">Не секрет, что часто некоторые люди по ошибке или незнанию выставляют дорогие карточки по низкой цене. При этом все равно довольно глупо сидеть самому сутками и пытаться выловить такую. А вот поручить это делать боту - почему бы и нет?</p>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "About",
        components: {},
        data: () => ({}),
        methods: {},
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
.widg30{
    flex: .3;
}

</style>