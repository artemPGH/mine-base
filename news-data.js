const newsList = [
    // ОБНОВЛЕНИЯ
    {
        title: "Хардкор в Bedrock: Теперь официально!",
        description: "Mojang добавили режим одной жизни на телефоны и консоли.",
        fullText: "Спустя годы ожиданий, владельцы Bedrock Edition получили режим Хардкор. Теперь у вас нет права на ошибку. После смерти мир навсегда переходит в режим зрителя. Будьте осторожны в Незере!",
        image: "https://placehold.co/800x400/8b0000/ffffff?text=HARDCORE+BEDROCK",
        date: "18.03.2026", category: "Обновления"
    },
    {
        title: "Нерф жителей 1.21: Конец халявы",
        description: "Библиотекари больше не продают Починку просто так.",
        fullText: "Теперь, чтобы получить Починку, вам нужно вырастить жителя именно в Болотном биоме. Mojang заставляют нас путешествовать!",
        image: "https://placehold.co/800x400/1b5e20/ffaa00?text=VILLAGER+NERF",
        date: "17.03.2026", category: "Обновления"
    },
    {
        title: "Броня для волков: Твой пес — танк!",
        description: "Как скрафтить и покрасить защиту для питомца.",
        fullText: "Используйте щитки броненосца, чтобы защитить друга. Броня выдерживает даже взрыв крипера!",
        image: "https://placehold.co/800x400/8b4513/ffffff?text=WOLF+ARMOR",
        date: "16.03.2026", category: "Обновления"
    },
    {
        title: "Слухи: Обновление Энда в 1.22?",
        description: "Что нашли датамайнеры в секретных файлах игры.",
        fullText: "Появились намеки на новые биомы в Крае. Возможно, мы увидим Кристальные леса и новых летучих мобов.",
        image: "https://placehold.co/800x400/1b5e20/55ff55?text=END+UPDATE+LEAK",
        date: "15.03.2026", category: "Обновления"
    },
    {
        title: "Патч 1.21.5: Оптимизация FPS",
        description: "Игра теперь работает плавнее на слабых ПК.",
        fullText: "Mojang переписали движок рендеринга чанков. Прирост FPS составил до 20%.",
        image: "https://placehold.co/800x400/1b5e20/55ff55?text=FPS+PATCH",
        date: "14.03.2026", category: "Обновления"
    },

    // МОДЫ
    {
        title: "Essential Mod: Мультиплеер без серверов",
        description: "Играй с друзьями в один клик без Хамачи.",
        fullText: "Мод добавляет систему друзей прямо в меню. Просто отправь инвайт другу и играйте вместе!",
        image: "https://placehold.co/800x400/222222/55ff55?text=ESSENTIAL+MOD",
        date: "18.03.2026", category: "Моды"
    },
    {
        title: "Create: Aeronautics — Летающие корабли",
        description: "Физика и инженерия на новом уровне.",
        fullText: "Теперь вы можете построить дирижабль, который реально летает. Лучший аддон для Create.",
        image: "https://placehold.co/800x400/4682b4/ffffff?text=CREATE+FLY",
        date: "17.03.2026", category: "Моды"
    },
    {
        title: "Terralith: Новая генерация без лагов",
        description: "100 биомов, которые не требуют новых блоков.",
        fullText: "Этот мод меняет генерацию мира, используя только ванильные блоки. Выглядит потрясающе!",
        image: "https://placehold.co/800x400/228b22/ffffff?text=TERRALITH",
        date: "16.03.2026", category: "Моды"
    },
    {
        title: "Litematica: Схемы для стройки",
        description: "Как перенести постройку из креатива в выживание.",
        fullText: "Создавайте голограммы зданий и стройте по ним. Незаменимо для мега-проектов.",
        image: "https://placehold.co/800x400/000080/00ffff?text=LITEMATICA",
        date: "15.03.2026", category: "Моды"
    },
    {
        title: "Farmer's Delight: Кухня в Майне",
        description: "Больше еды и полезных баффов.",
        fullText: "Готовьте рагу, режьте овощи на доске и создавайте уютные фермы.",
        image: "https://placehold.co/800x400/ff8c00/ffffff?text=FARMERS+DELIGHT",
        date: "14.03.2026", category: "Моды"
    },
    {
        title: "Sodium: Король производительности",
        description: "Почему он лучше, чем OptiFine в 2026 году.",
        fullText: "Sodium дает в 2 раза больше кадров в секунду на новых версиях игры. Ставь и забудь про лаги.",
        image: "https://placehold.co/800x400/222222/ffffff?text=SODIUM+MOD",
        date: "13.03.2026", category: "Моды"
    },
    {
        title: "Iron's Spells: Настоящая магия",
        description: "Книга заклинаний и посохи для битв.",
        fullText: "Добавляет десятки уникальных заклинаний: от огненных шаров до телепортации.",
        image: "https://placehold.co/800x400/222222/55ff55?text=MAGIC+SPELLS",
        date: "12.03.2026", category: "Моды"
    },

    // ГАЙДЫ
    {
        title: "Как ваншотнуть Вардена?",
        description: "Используем Булаву и новую механику падения.",
        fullText: "Прыгайте с высоты 30 блоков и бейте Булавой. Урон не имеет лимита — вы убьете даже босса!",
        image: "https://placehold.co/800x400/1b5e20/ffffff?text=MACE+GUIDE",
        date: "18.03.2026", category: "Гайды"
    },
    {
        title: "Автокрафтер: Твой первый завод",
        description: "Гайд по автоматизации крафта предметов.",
        fullText: "Используйте редстоун-сигнал, чтобы заставить Автокрафтер делать золотые слитки за вас.",
        image: "https://placehold.co/800x400/444444/ffaa00?text=AUTO+CRAFTER",
        date: "17.03.2026", category: "Гайды"
    },
    {
        title: "Высота для алмазов в 1.21",
        description: "Где теперь копать самые дорогие ресурсы.",
        fullText: "Лучшая высота — Y=-59. Копайте прямо над бедроком длинными туннелями.",
        image: "https://placehold.co/800x400/000000/00ffff?text=DIAMONDS+Y-59",
        date: "16.03.2026", category: "Гайды"
    },
    {
        title: "Ферма стержней Бриза",
        description: "Простая схема для фарма зарядов ветра.",
        fullText: "Найдите спавнер Бриза и выкопайте яму 5х5 под ним. Бриз не сможет улететь!",
        image: "https://placehold.co/800x400/b0e0e6/000000?text=BREEZE+FARM",
        date: "15.03.2026", category: "Гайды"
    },
    {
        title: "Бесконечный полет на Элитрах",
        description: "Секретные маневры для экономии ракет.",
        fullText: "Летите под углом 40 градусов вверх, а затем плавно вниз. Ракет хватит на тысячи блоков!",
        image: "https://placehold.co/800x400/87cefa/ffffff?text=ELYTRA+PRO",
        date: "14.03.2026", category: "Гайды"
    },
    {
        title: "Как найти Дворец Испытаний?",
        description: "Используем карты картографа и компас.",
        fullText: "Купите карту у жителя и ищите медные структуры под землей на высоте Y=-30.",
        image: "https://placehold.co/800x400/1b5e20/ffffff?text=TRIAL+CHAMBER",
        date: "13.03.2026", category: "Гайды"
    },
    {
        title: "Секрет быстрой прокачки брони",
        description: "Как получить защиту IV за 10 минут.",
        fullText: "Используйте стол зачарований вместе с книжными полками и торговлю с жителями.",
        image: "https://placehold.co/800x400/1b5e20/ffffff?text=ARMOR+ENCHANT",
        date: "12.03.2026", category: "Гайды"
    },
    {
        title: "Топ 3 ловушки для гриферов",
        description: "Защити свою базу с помощью редстоуна.",
        fullText: "Используйте датчики скалка и динамит в вагонетках. Никто не пройдет!",
        image: "https://placehold.co/800x400/1b5e20/ffffff?text=TRAPS+GUIDE",
        date: "11.03.2026", category: "Гайды"
    }
];
