import type { Language } from './schema';

export const ru: Language = {
  titles: {
    main: 'Разработчик из Москвы',
    portfolio: 'Портфолио Разработчика',
  },
  home_text:
    'Привет! Я Артур. Я создаю всё, что улучшает Web для пользователей и разработчиков',
  notFound: {
    subtitle: 'Страница не найдена',
    back: 'Назад',
  },
  links: {
    github: 'Код',
    telegram: 'Поработаем?',
    npm: 'Библиотеки',
  },
  routes: {
    main: 'Арт Гинзбург',
    portfolio: 'Портфолио',
    life: 'Лайф',
  },
  portfolio: {
    all: 'Все',
    frontend: 'Фронтенд',
    cli: 'Консольные утилиты',
    apps: 'Приложения',
    games: 'Игры',
    backend: 'Бэкенд',
  },
  badges: {
    npm: 'Загрузки с NPM',
    github: {
      stars: 'Звёзды на GitHub',
      downloads: 'Загрузки с GitHub',
    },
  },
  randomFacts: {
    title: 'Случайный факт',
    texts: {
      countries: (humanizedCountries) =>
        `Я посетил ${humanizedCountries}, чтобы привезти вам пользовательский опыт, почерпнутый из архитектуры, культуры и урбанистики множества городов`,
      coding: ['Я провёл за программированием ', 'ч.',
        'с 29-го августа 2021'],
      gaming: ['Я играл в более чем', '. Это заняло около', 'моей жизни'],
      watchingFilms: ['моей жизни были посвящены просмотру этих замечательных'],
      photos: ['У меня странный стиль обработки'],
    },
  },
  countries: [
    'Болгарию',
    'Финляндию',
    'Испанию',
    'Францию',
    'Украину',
    'Кипр',
    'Италию',
    'Грузию',
    'Армению',
    'Тайланд',
    'Израиль',
    'Хорватию',
    'Россию',
  ],
  life: {
    story: 'История',
    education: 'Образование',
    texts: {
      links: {
        steam: 'Компьютерных игр',
        instagram: 'Снимков',
        mustapp: 'Фильмов',
        practicum: 'Яндекс.Практикум',
        ibdp: 'Дипломная Программа Международного Бакалавриата® (IB DP)',
      },
      education: {
        practicum: {
          dates: ' | янв. 2021 - окт. 2021',
          faculty: 'Веб-разработчик ',
          project: 'Портфолио',
          diploma: 'Диплом',
        },
        ibdp: {
          dates: ' | сен. 2018 - янв. 2020',
          faculty: 'Фильм · Компьютерная Наука · Бизнес & Менеджмент ',
          project: 'CAS Проект',
        },
      },
    },
  },
  listLastWord: ' и',
};
