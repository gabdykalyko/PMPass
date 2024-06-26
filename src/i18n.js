import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    main: {
      begin: 'Начать',
      quests: 'Квесты',
      main: 'Главная',
      shop: 'Магазин',
      enter: 'Вход',
      to_enter: 'Войти',
      register: 'Регистрация',
      to_register: 'Зарегистрироваться',
      take: 'Забрать',
      begin_quest: 'Начать квест',
      license: 'Лицензия на осуществление деятельности букмекерской конторы №20019733 от 31.12.2020г. (действительна до 17.07.2028г.) выдана РГУ «Комитет индустрии туризма Министерства культуры и спорта Республики Казахстан»',
      pm_pass: 'PM-Pass',
      trade_link: 'Trade Link',
      back: 'Назад',
      link: 'Ссылка',
      skip: 'Пропустить',
      steam_login: 'Steam Login',
      settings: 'Настройки',
      community: 'Сообщество',
      public_match_history: 'Общедоступная история матчей',
      help: 'Поддержка',
      password: 'Пароль',
      phone: 'Номер телефона',
      enter_help: 'Помощь при входе',
      clear: 'Понятно',
      next: 'Дальше',
      attach: 'Прикрепить',
      product_filter: 'Сортировка',
      game_dota: 'Dota 2',
      game_cs: 'CS 2',
      reset_filters:"Сбросить все",
      quest_filter: 'Фильтр квестов',
      nothing_here: 'Здесь пока ничего нет',
      try_another_filters: 'Попробуйте другие настройки фильтра или заходите в PM Hero на сайте <a class="yellow" href="https://parimatch.kz/" target="_blank">parimatch.kz</a>',
      more: 'Больше',
      make_bets: 'Делайте ставки в Parimatch',
      go: 'Перейти',
      loading: 'Загрузка Страницы...',
      reward_received: 'Получена награда',
      ended: 'Завершенные',
      active: 'Активные',
      new: 'Новые',
      end: 'Завершён',
      soon: 'Доступно',
      activated: 'Активен',
      account: 'Номер счета',
      cancel: 'Отмена',
      quit: 'Выйти',
      quit_from_profile: 'Выйти из Профиля',
      confirm_quite: 'Вы уверены, что хотите выйти?',
      main_info: 'Основная Информация',
      profile_settings: 'Настройки Профиля',
      attach_trade_link: 'Прикрепите вашу ссылку на обмен из Steam',
      attach_steam: 'Привяжите свой Steam аккаунт.'
    },
    banner: {
      title: 'Фармите с Parimatch',
      subtitle: 'Выполняйте квесты, получайте PM баллы и обменивайте на крутые призы',
      btn: 'Фармить призы'
    },
    rules: {
      title: 'Как это работает',
      connect: 'Подключите аккаунты',
      register: 'Зарегистрируйтесь или войдите в аккаунт Parimatch и добавьте аккаунт Steam',
      quests: 'Выполняйте квесты',
      finish: 'Выполняйте квесты в PM Hero на сайте Parimatch, чтобы получать сундуки с призами. За выполнение заданий, вы также будете получать PM баллы на сайте PM Pass.',
      chest: 'Открывайте сундуки',
      bonuses: 'В сундуках вас ждут бонусы от Parimatch и другие призы. Чем сложнее квест, тем ценнее лут!',
      store: 'Магазин призов',
      change: 'Копите PM баллы и меняйте на бонусы и другие крутые призы на сайте PM Pass'
    },
    prizes: {
      title: 'Призы на любой вкус',
      text1: 'PM Hero и PM Pass - это ваш источник бесконечных призов. Получайте награды и PM баллы за каждый выполненный квест на сайте Parimatch.',
      text2: 'Покупайте на PM баллы все, что приглянется в магазине PM Pass: скины для CS2, Dota 2, фрибеты, мерч и многое другое. Выбор за вами!'
    },
    quests: {
      text1: 'Выполняйте квесты, делая ставки на спорт или играя в Dota 2 через Steam. Чтобы посмотреть весь список заданий зайдите на сайт Parimatch и найдите раздел PM Hero.',
      text2: 'Квесты обновляются каждый день — фармите призы бесконечно!'
    },
    faq: {
      question1: 'Как связать аккаунты Parimatch и Steam?',
      answer1_text1: 'Убедитесь, что вы выставили настройки приватности в Dota 2 следующим образом, чтобы была открыта ваша история игр.',
      answer1_text2: 'Также вам необходимо быть зарегистрированным клиентом на сайте или в приложении <a class="yellow" href="https://parimatch.kz/" target="_blank">parimatch.kz</a>',
      answer1_text3: 'Если вы не зарегистрированы, перейдите по этой ссылке <a class="yellow" href="https://parimatch.kz/ru/regtel/3" target="_blank">https://parimatch.kz/ru/regtel/3</a> и создайте учетную запись в Parimatch.',
      answer1_text4: 'Далее вам необходимо на этой странице нажать на кнопку “Участвовать”. Введите в форму ваш ID Parimatch и пароль, с которым вы зарегистрировались.',
      answer1_text5: 'Скопировать свой ID можно в разделе “Мой аккаунт” - <a class="yellow" href="https://parimatch.kz/ru/my-account" target="_blank">https://parimatch.kz/ru/my-account</a>',
      question2: 'Зачем привязывать аккаунт Steam?',
      answer2: 'Квесты можно выполнять не только на сайте Parimatch, но и в Dota 2. Если вы привяжете аккаунт Steam, вы сможете наслаждаться любимой игрой и получать за это призы!',
      question3: 'Могу ли я принять участие без аккаунта Steam?',
      answer3_text1: 'Да, вы можете участвовать, выполняя квесты, не связанные с Dota 2. Для этого вам нужен только аккаунт Parimatch.',
      answer3_text2: 'Переходите в раздел геймификации PM Hero и начинайте играть прямо сейчас.',
      question4: 'Как принять участие?',
      answer4_text1: 'Чтобы принять участие:',
      answer4_text2: 'Быть зарегистрированным в Parimatch;',
      answer4_text3: 'Авторизуйтесь;',
      answer4_text4: 'Выполняйте квесты каждый день и получайте гарантированные PM баллы;',
      answer4_text5: 'Обменивайте PM баллы на предметы в магазине PM Pass;',
      question5: 'Кто может участвовать?',
      answer5: 'Могут участвовать лица, достигшие 21 года на момент начала акции, являющиеся гражданами Республики Казахстан, проживающие на территории Республики Казахстан и имеющие действительное удостоверение личности гражданина Республики Казахстан.',
      question6: 'Как открыть инвентарь в Стиме для получения предметов?',
      answer6_text1: 'Чтобы получить предметы из Магазина, ваш инвентарь должен быть открыт для видимости.',
      answer6_text2: 'Для этого вы должны:',
      answer6_text3: 'Откройте Стим-клиент;',
      answer6_text4: 'Наведите курсор на свой логин в правом верхнем углу. В выпадающем меню нажмите «Инвентарь»;',
      answer6_text5: 'Нажмите на вкладку «Еще», и выберите «Настройки приватности»;',
      answer6_text6: 'Поставьте галочки напротив слова «Открытый» в рубриках «Статус профиля» и «Инвентарь»;',
      answer6_text7: 'Нажмите «Сохранить изменения».',
      answer7: 'Если у вас возникли проблемы обратитесь в поддержку 24/7'
    },
    profile: {
      title: 'Профиль',
      info: 'Информация об Аккаунте',
      received_points: 'Получено очков',
      current_balance: 'Текущий баланс',
      dota_history_closed: 'История матчей закрыта, проверьте настройки',
      go_to_settings: 'Зайдите в Dota 2  и перейдите в раздел Настройки.',
      in_chapter: 'В разделе Сообщество вы увидите Общедоступная история матчей, нажмите на него и история будет открыта.',
      match_history: 'История Матчей',
      match_history_closed: 'История матчей закрыта, проверьте настройки',
      go_to_dota2: 'Зайдите в Dota 2 и перейдите в раздел Настройки.',
      go_to_community: 'В разделе Сообщество вы увидите Общедоступная история матчей, нажмите на него и история будет открыта.',
      history_open: 'Ваша история матчей открыта',
      steam_attached: 'Ваша ссылка на обмен из Steam прикреплена',
      steam_is_not_attached: 'Ваш Steam aккаунт не привязан'
    },
    welcome: {
      intro_title: '- ваш пропуск в мир крутых призов',
      intro_text1: 'Это официальный продукт компании Париматч.', //перевести
      intro_text2: 'Выполняйте задания на сайте <a class="yellow" href="https://parimatch.kz/" target="_blank">parimatch.kz</a> и в ваших любимых играх таких как Dota 2, зарабатывайте бонусные баллы и обменивайте их на скины и другие предметы в магазине.',
      shop_and_quests_shop: 'Квесты и ',
      shop_and_quests_quests: 'Магазины',
      shop_and_quests_text1: 'Все очень просто. Следите за доступными вам заданиями на странице Квесты.',
      shop_and_quests_text2: 'На каждом задании указано, сколько PM баллов вы получите. После выполнения, ваши баллы будут начислены в профиль pm-pass.',
      shop_and_quests_text3: 'Вы сможете обменять их на странице Магазин.',
      trade_link_text1: 'Прикрепите свою ссылку на обмен из Steam, чтобы получать скины и игровые предметы в магазине PM Pass',
      trade_link_text2: 'Как получить ссылку?',
      steam_text: 'Чтобы выполнять квесты в Dota 2, вам нужно прикрепить учетную запись Steam',
      skip_step: 'Вы можете пропустить этот шаг и прикрепить ссылку позже'
    },
    reg: {
      more_than_21: 'Мне больше 21 года',
      accept_offer: 'Я соглашаюсь с договором оферты',
      activate_bonus: 'Активировать бонус на первый депозит',
      bonus_offer: 'Условия бонусного предложения',
      have_account: 'Есть аккаунт?',
      no_account: 'Нет аккаунта?'
    },
    help: {
      have_trouble: 'Похоже, что у вас возникли проблемы со входом.',
      ask_help: 'Попробуйте обратиться в службу поддержки.',
      find_trade_link: 'Чтобы найти свой трейд URL в Steam, выполните следующие действия:',
      find_nickname: 'Наведите на свой никнейм, чтоб выпало меню профиля;',
      go_to: 'Перейдите в Инвентарь',
      click_button: 'Кликните кнопку: “Предложения обмена”',
      open: 'Откройте: "Кто может отправлять мне предложения обмена?"',
      trade_text1: 'В графе "Сторонние сайты" есть поле "Ссылка на обмен"',
      down_here: 'Тут внизу и находится трейд ссылка Steam.'
    },
    errors: {
      min_6_symbols: 'Минимум 6 символов',
      min_1_number: 'Минимум 1 цифра (0-9)',
      number_registered: 'Номер телефона уже зарегистрирован',
      not_supported: 'Номер телефона не поддерживается',
      error_data: 'Ошибка в обработке данных',
      no_account: 'Похоже, данные введены некорректно или у вас еще нет аккаунта'
    },
    notifications: {
      steam_attached: 'Steam аккаунт прикреплен',
      dota_history_opened: 'История матчей открыта',
      trade_link_attached: 'Ссылка на обмен прикреплена',
      trade_link_edited: 'Ссылка на обмен изменена',
      steam_edited: 'Steam аккаунт изменен',
      present_send: 'Подарок уже в Steam. Спешите забрать!',
      not_enough_cash: 'У вас недостаточно PM баллов для обмена',
      add_trade_link: 'Добавьте в Профиль ссылку на обмен в Steam ',
      technical_issues: 'Идут технические работы. Обмен недоступен.',
      account_copied: 'Account ID скопирован',
      steam_copied: 'Steam ID скопирован',
      wrong_trade_link: 'Неверный формат ссылки на обмен'
    }
  },
  kz: {
    main: {
      begin: 'Бастау',
      quests: 'Квесттер',
      main: 'Басты бет',
      shop: 'Дүкен',
      enter: 'Кіру',
      to_enter: 'Кіру',
      register: 'Тіркелу',
      to_register: 'Тіркелу',
      take: 'Алу',
      begin_quest: 'Квестті бастау',
      license: '"Қазақстан Республикасының Мәдениет және спорт министрлігінің Туризм индустриясының комитеті" РММ берген 31.12.2020ж. №20019733 букмеркерлік кеңсе қызметін жүзеге асыруға лицензия (17.07.2028ж. дейін жарамды)',
      pm_pass: 'PM-Pass',
      trade_link: 'Trade Link',
      back: 'Кері қарай',
      link: 'Сілтеме',
      skip: 'Өткізіп жіберу',
      steam_login: 'Steam Login',
      settings: 'Баптаулар',
      community: 'Қауымдастық',
      public_match_history: 'Матчтардың көпшілікке қолжетімді тарихын',
      help: 'Қолдау қызметі',
      password: 'Құпиясөз',
      phone: 'Телефон нөмірі',
      enter_help: 'Кіру кезінде көмек',
      clear: 'Түсінікті',
      next: 'Ары қарай',
      attach: 'Қосу',
      product_filter: 'Товарлар сүзгісі',
      quest_filter: 'Квесттер сүзгісі',
      nothing_here: 'Әзірге бұл жерде ешнәрсе жоқ',
      try_another_filters: 'Сүзгінің басқа баптауларын байқап көріңіз немесе <a class="yellow" href="https://parimatch.kz/" target="_blank">parimatch.kz</a> сайтында PM Hero-ға кіріңіз',
      more: 'Тағы да',
      make_bets: 'Parimatch-та ұтысты тік',
      go: 'Көшу',
      loading: 'Парақша жүктелуде...',
      reward_received: 'Марапат алынды',
      ended: 'Аяқталғандар',
      active: 'Белсенді',
      new: 'Жаңа',
      end: 'Аяқталды',
      soon: 'Жақында',
      activated: 'Белсенді',
      account: 'Шот нөмірі',
      cancel: 'Болдырмау',
      quit: 'Шығу',
      quit_from_profile: 'Профильден шығу',
      confirm_quite: 'Шығу туралы шешім ақырғы ма?',
      main_info: 'Негізгі Ақпарат',
      profile_settings: 'Профиль баптауы',
      attach_trade_link: 'Сіздің Steam-дегі айырбастау сілтемеңізді қосыңыз',
      attach_steam: 'Өз Steam aккаунтыңызды байлаңыз.'
    },
    banner: {
      title: 'Parimatch-пен фармдаңыз',
      subtitle: 'Квесттерді орындаңыз, PM балдарын алыңыз және керемет жүлделерге айырбастаңыз',
      btn: 'Жүлделерді фармдаңыз'
    },
    rules: {
      title: 'Бұл қалай жұмыс істейді',
      connect: 'Аккаунттарды қосыңыз',
      register: 'Тіркеліңіз немесе Parimatch аккаунтына кіріңіз және Steam аккаунтын қосыңыз',
      quests: 'Квесттерді орындаңыз',
      finish: 'Жүлделері бар сандықтарды алу үшін Parimatch сайтында PM Hero-да квесттерді орындаңыз. Тапсырмаларды орындау үшін сіз оған қоса PM Pass сайтында PM балдарын аласыз.',
      chest: 'Сандықтарды ашыңыз',
      bonuses: 'Сандықтарда сізді Parimatch-тан бонустар және басқа жүлделер күтіп тұр. Квест неғұрлым қиынрақ болса, соғұрлым лут та құндырақ болады!',
      store: 'Жүлделер дүкені',
      change: 'PM балдарды жинаңыз және PM Pass сайтында бонустарға және басқа керемет жүлделерге айырбастаңыз'
    },
    prizes: {
      title: 'Кез келген талғамға арналған жүлделер',
      text1: 'PM Hero мен PM Pass - бұл шексіз жүлделердің көзі. Parimatch сайтында әр орындалған квест үшін марапттарды және  PM балдарын алыңыз',
      text2: 'PM Pass дүкенінде ұнағанның барлығын: CS2, Dota 2 үшін скиндер, фрибеттер, мерч және тағы басқаларды PM балдарға сатып алыңыз. Таңдау өзіңізде!'
    },
    quests: {
      text1: 'Спортқа ұтыстарды тігу немесе Steam арқылы Dota 2 ойнау арқылы квесттерді орындаңыз. Тапсырмалардың толық тізімін көру үшін Parimatch сайтына кіріңіз және PM Hero бөлімін табыңыз.',
      text2: 'Квесттер күн сайын жаңартылып тұрады - жүлделерді шексіз фармдаңыз!'
    },
    faq: {
      question1: 'Parimatch және Steam аккаунттарын қалай байлауға болады?',
      answer1_text1: 'Dota 2-де бейресмилік баптауын сіздің ойындар тарихы ашық болатындай түрде қойғаныңызға көзіңізді жеткізіңіз.',
      answer1_text2: 'Сонымен қатар сіз <a class="yellow" href="https://parimatch.kz/" target="_blank">parimatch.kz</a> сайтында немесе қосымшасында тіркелген клиент болуыңыз қажет. ',
      answer1_text3: 'Егер сіз тіркелмеген болсаңыз, <a class="yellow" href="https://parimatch.kz/ru/regtel/3" target="_blank">https://parimatch.kz/ru/regtel/3</a> сілтемесі бойынша өтіңіз және Parimatch-та тіркеулік жазбасын жасаңыз.',
      answer1_text4: 'Содан кейін сізге осы парақшада "Қатысу" батырмасын басу керек. Үлгіге сіз тіркелгенде пайдаланған өз ID Parimatch-ты және құпия сөзді енгізіңіз.',
      answer1_text5: 'Өз ID-ді "Менің аккаунтым" бөлімінен көшіре аласыз - <a class="yellow" href="https://parimatch.kz/ru/my-account" target="_blank">https://parimatch.kz/ru/my-account</a>',
      question2: 'Не үшін Steam аккаунтын байлау керек?',
      answer2: 'Квесттер тек Parimatch сайтында ғана емес, сонымен қатар Dota 2-де де орындауға болады. Егер сіз Steam, аккаунтын байласаңыз, сіз өз сүйікті ойыныңыздан ләззат атумен қатар, ол үшін жүлделерді де ала аласыз!',
      question3: 'Менде Steam аккаунты жоқ болса, мен қатыса алам ба?',
      answer3_text1: 'Ия, сіз Dota 2-ге қатысы жоқ квесттерді орындау арқылы қатыса аласыз. Ол үшін сізге тек Parimatch аккаунты ғана қажет.',
      answer3_text2: 'PM Hero геймификациясы бөліміне өтіңіз және ойнауды дәл қазір бастаңыз.',
      question4: 'Қалай қатысуға болады?',
      answer4_text1: 'Қатысу үшін:',
      answer4_text2: 'Авторизациядан өтіңіз және парақшаға көшіңіз; ',
      answer4_text3: 'Қатысуды растау үшін "Шақыруды қабылдау" батырманы басыңыз;',
      answer4_text4: 'Күнде квесттерді орындаңыз және жүлделері мен кристалдары бар кепілдендірілген андықтарды алыңыз;',
      answer4_text5: 'Сандықтардағы кристалдарды жинаңыз және ойыншылар рейтингісінде көтеріліңіз; ',
      question5: 'Кім қатыса алады?',
      answer5: 'Акция басталу сәтінде 21 жасқа толған, Қазақстан Республикасының азаматтары болып табылатын, Қазақстан Республикасының аумағында тұратын және Қазақстан Республикасы азаматының жарамды жеке куәлігі бар тұлғалар қатыса алады.',
      question6: 'Заттарды алу үшін Стимде құрал-жабдықтарды қалай ашуға болады?',
      answer6_text1: 'Дүкеннен заттарды алу үшін сіздің құрал-жабдықтарыңыз көрінетіндей ашық болуы тиіс.',
      answer6_text2: 'Ол үшін сізге келесі әрекеттерді жасау керек:',
      answer6_text3: 'Стим-клиентті ашыңыз;',
      answer6_text4: 'Меңзерді жоғарғы оң жақтағы өз логиніңізге апарыңыз. Ашылма мәзірде «Құрал-жабдықтарды» басыңыз;',
      answer6_text5: '«Тағы» қосымша бетін басыңыз және «Бейресмилік баптауын» таңдаңыз;',
      answer6_text6: '«Профиль мәртебесі» және «Құрал-жабдықтар» тарауларында «Ашық» сөзіне қарсы қанат белгісін қойыңыз;',
      answer6_text7: '«Өзгертулерді сақтауды» басыңыз.',
      answer7: 'Мәселе туындаса, 24/7 бойы жұмыс істейтін қолдау қызметіне хабарласыңыз'
    },
    profile: {
      title: 'Профиль',
      info: 'Аккаунт туралы ақпарат',
      received_points: 'Алынған ұпайлар',
      current_balance: 'Ағымдағы теңгерім',
      dota_history_closed: 'Матчтар тарихы жабық, баптауларды тексеріңіз',
      go_to_settings: 'Dota 2-ға кіріңіз және Баптаулар бөліміне өтіңіз.',
      in_chapter: 'Сіз Қауымдастық бөлімінде Матчтардың көпшілікке қолжетімді тарихын көре аласыз, оны басыңыз және тарих ашық болады.',
      match_history: 'Матчтар тарихы',
      match_history_closed: 'Матчтар тарихы жабық, баптауларды тексеріңіз',
      go_to_dota2: 'Dota 2-ге кіріңіз және Баптаулар бөліміне өтіңіз.',
      go_to_community: 'Сіз Қауымдастық бөлімінде Матчтардың көпшілікке қолжетімді тарихын көре аласыз, оны басыңыз және тарих ашық болады.',
      history_open: 'Сіздің матчтар тарихыңыз ашық',
      steam_attached: 'Сіздің Steam-дегі айырбастау сілтемеңіз қосылды',
      steam_is_not_attached: 'Сіздің Steam aккаунт байланбаған'
    },
    welcome: {
      intro_title: '- сіздің үздік жүлделер әлеміне жолдама',
      intro_text1: 'Бұл Париматч компаниясының ресми өнімі.', // перевести
      intro_text2: '<a class="yellow" href="https://parimatch.kz/" target="_blank">parimatch.kz</a> сайтында және сіздің Dota 2 сияқты сүйікті ойындарыңызда тапсырмаларды орындаңыз, бонустық баллдарды жинаңыз және оларды дүкендегі скиндерге және басқа заттарға айырбастаңыз.',
      shop_and_quests_shop: 'Квесттер мен',
      shop_and_quests_quests: 'Дүкен',
      shop_and_quests_text1: 'Бәрі өте оңай. Квесттер парақшасында сізге қолжетімді тапсырмаларды бақылап отырыңыз.',
      shop_and_quests_text2: 'Әр тапсырмада сіз қанша PM балл ала алатыныңыз көрсетілген. Орындағаннан кейін сіздің баллдарыңыз pm-pass профиліңізге есептеледі.',
      shop_and_quests_text3: 'Сіз оларды Дүкен парақшасында айырбастай аласыз. ',
      trade_link_text1: 'PM Pass дүкенінде скиндерді және ойын заттарын алу үшін Steam-нен өз айырбастауға сілтемеңізді қосыңыз',
      trade_link_text2: 'Сілтемені қалай алуға болады?',
      steam_text: 'Dota 2-де квесттерді орындау үшін сізге Steam-дегі тіркеулік жазбаңызды қосу керек',
      skip_step: 'Сіз осы қадамды өткізіп жіберіп, сілтемені кейінірек қоса аласыз'
    },
    reg: {
      more_than_21: 'Мен 21 жастан асқанмын',
      accept_offer: 'Мен оферта шартымен келісемін',
      activate_bonus: 'Бірінші депозитке бонусты іске қосыңыз',
      bonus_offer: 'Бонустық ұсыныс шарттары',
      have_account: 'Аккаунтыңыз бар ма?',
      no_account: 'Аккаунтыңыз жоқ па?'
    },
    help: {
      have_trouble: 'Сізде кіру кезінде қиындықтар туындаған сияқты.',
      ask_help: 'Қолдау қызметіне хабарласып көріңіз.',
      find_trade_link: 'Steam-де өз трейд URL-ды табу үшін келесі әрекеттерді жасаңыз:',
      find_nickname: 'Профиль мәзірі шығу үшін өз никнейміңізге меңзерді апарыңыз;',
      go_to: 'Құрал-жабдықтарға өтіңіз',
      click_button: 'Келесі батырманы басыңыз: "Айырбастау ұсыныстары";',
      open: 'Келесіні ашыңыз: "Кім маған айырбастау ұсыныстарын жібере алады?";',
      trade_text1: '"Бөгде сайттар" бағанында "Айырбастауға сілтеме" жолағы бар. ',
      down_here: 'Осы жерде төменде Steam трейд сілтемесі орналасқан.'
    },
    errors: {
      min_6_symbols: 'Кемінде 6 таңба',
      min_1_number: 'Кемінде 1 сан (0-9)',
      number_registered: 'Телефон нөмірі әлдеқашан тіркеліп қойған',
      not_supported: 'Телефон нөмірі бойынша қолдау көрсетілмейді',
      error_data: 'Деректерді өңдеу кезінде қате орын алды',
      no_account: 'Деректер дұрыс енгізілмеген сияқты немесе сізде әлі аккаунт жоқ'
    },
    notifications: {
      steam_attached: 'Steam аккаунт қосылды',
      dota_history_opened: 'Матчтар тарихы ашық',
      trade_link_attached: 'Айырбастауға сілтеме қосылды',
      trade_link_edited: 'Айырбастауға сілтеме өзгертілді',
      steam_edited: 'Steam аккаунт өзгертілді',
      present_send: 'Сыйлық сізді Steam-де күтуде. Алуға асығыңыз!',
      not_enough_cash: 'Сізде айырбастау үшін баллдар жеткіліксіз',
      add_trade_link: 'Профильге Steam-де айырбастауға сілтемені қосыңыз',
      technical_issues: 'Техникалық жұмыстар жүргізіліп жатыр. Айырбастау қолжетімсіз.',
      account_copied: 'Account ID көшірілді',
      steam_copied: 'Steam ID көшірілді',
      wrong_trade_link: 'Айырбастауға сілтеменің пішімі қате'
    }
  }
};

const currentLanguage = localStorage.getItem('language') || 'ru'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: currentLanguage,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
