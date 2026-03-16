const newsList = [
    {
        title: "Minecraft 1.21.5: Релиз весеннего патча",
        description: "Mojang выпустили исправление для медных ламп и оптимизировали чанки.",
        image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/TrickyTrials_Standard_Vertical.jpg",
        date: "15.03.2026",
        category: "Обновления"
    },
    {
        title: "Топ 5 шейдеров для слабых ПК 2026",
        description: "Лучшие подборки для тех, кто хочет красивую картинку без лагов.",
        image: "https://files.poggit.pmmp.io/res/9431/icon.png",
        date: "14.03.2026",
        category: "Моды"
    },
    {
        title: "Как найти Дворец Испытаний?",
        description: "Полный гайд по навигации в новой структуре и поиску ключей.",
        image: "https://www.minecraft.net/content/dam/games/minecraft/screenshots/trial-chambers-hero.jpg",
        date: "13.03.2026",
        category: "Гайды"
    },
    {
        title: "Новый моб: Медный Голем возвращается?",
        description: "Слухи от разработчиков о добавлении старого кандидата из голосования.",
        image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/MC_MobVote_2021_CopperGolem_1080x1080.jpg",
        date: "12.03.2026",
        category: "Слухи"
    },
    {
        title: "Сборка модов 'Весенний Крафт'",
        description: "15 модов на цветы, фермерство и уютную атмосферу в лесу.",
        image: "https://www.minecraft.net/content/dam/games/minecraft/screenshots/pollen-hero.jpg",
        date: "11.03.2026",
        category: "Сборки"
    },
    {
        title: "Команда /attribute: Как стать гигантом?",
        description: "Разбираем параметры роста и силы игрока через консоль.",
        image: "https://www.minecraft.net/content/dam/games/minecraft/screenshots/giant-update.jpg",
        date: "10.03.2026",
        category: "Команды"
    },
    {
        title: "Лучшие сервера для выживания 1.21",
        description: "Рейтинг честных серверов без доната и креатива.",
        image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/survival-servers.jpg",
        date: "09.03.2026",
        category: "Сервера"
    },
    {
        title: "Авто-ферма железа 2026",
        description: "Самая компактная схема, работающая на всех новых версиях.",
        image: "https://www.minecraft.net/content/dam/games/minecraft/screenshots/iron-farm.jpg",
        date: "08.03.2026",
        category: "Редстоун"
    },
    {
        title: "Секреты командного блока",
        description: "Как сделать кастомный магазин прямо в игре за 5 минут.",
        image: "https://www.minecraft.net/content/dam/games/minecraft/screenshots/command-block-gui.jpg",
        date: "07.03.2026",
        category: "Команды"
    },
    {
        title: "Minecraft Movie: Новый трейлер",
        description: "Обсуждаем внешность Джека Блэка в роли Стива.",
        image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/A_Minecraft_Movie_Horizontal.jpg",
        date: "06.03.2026",
        category: "Кино"
    }
];

// Для примера я продублировал записи, чтобы было 25+ для теста поиска
for (let i = 0; i < 15; i++) {
    newsList.push({
        title: `Архивная новость #${i + 1}`,
        description: "Старая, но полезная информация для игроков на версиях 1.12 - 1.20.",
        image: "https://www.minecraft.net/content/dam/games/minecraft/screenshots/old-mc.jpg",
        date: "01.03.2026",
        category: "Архив"
    });
}
