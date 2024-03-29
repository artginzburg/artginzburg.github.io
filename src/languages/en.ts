import type { Language } from './schema';

export const en: Language = {
  titles: {
    main: 'Web Enthusiast',
    portfolio: "Developer's portfolio",
  },
  home_text: "Hi! I'm Arthur. I build anything that improves the Web for users and developers",
  notFound: {
    subtitle: 'Page not found',
    back: 'Back',
  },
  links: {
    github: 'Code',
    telegram: "Let's work",
    npm: 'Libraries',
  },
  routes: {
    main: 'Art Ginzburg',
    portfolio: 'Portfolio',
    life: 'Life',
  },
  portfolio: {
    all: 'All',
    frontend: 'Front-end',
    cli: 'CLI',
    apps: 'Apps',
    games: 'Games',
    backend: 'Back-end',
  },
  badges: {
    npm: 'NPM downloads',
    github: {
      stars: 'GitHub stars',
      downloads: 'GitHub downloads',
    },
  },
  randomFacts: {
    title: 'Random fact',
    texts: {
      countries: (humanizedCountries) =>
        `I've been to ${humanizedCountries} to bring you the user experience learned from the architecture, culture, and urban planning of many cities`,
      coding: [
        'I spent ',
        'h',
        'coding since August 29 2021',
      ],
      gaming: [
        'I played more than',
        '. This took about',
        'of my life',
      ],
      watchingFilms: ['of my life was dedicated to watching these delightful'],
      photos: ['I\'ve got a weird style of processing'],
    },
  },
  countries: [
    'Bulgaria',
    'Finland', // Helsinki
    'Spain', // Barcelona
    'France',
    'Ukraine',
    'Cyprus',
    'Italy', // Sicily: Taormina, Castelbuono, Cefalù. Italy: Praiano
    'Georgia',
    'Armenia',
    'Thailand',
    'Israel',
    'Croatia', // Korčula
    'Russia', // Saint-Petersburg, Moscow, Nizhny Novgorod, Veliky Novgorod; to be extended (I don't remember that much right now)...
    'the Netherlands', // Amsterdam, Leeuwarden, Haarlem, Utrecht
    'the United Arab Emirates', // Dubai, Abu Dhabi
    'Turkey', // Istanbul
  ],
  life: {
    story: 'Story',
    education: 'Education',
    texts: {
      links: {
        steam: 'Computer games',
        instagram: 'Photos',
        mustapp: 'Movies',
        practicum: 'Yandex.Praсtiсum',
        ibdp: 'International Baccalaureate® (IB) Diploma Programme (DP)',
      },
      education: {
        practicum: {
          dates: ' | Jan, 2021 - Oct, 2021',
          faculty: 'Web-Developer ',
          project: 'Portfolio',
          diploma: 'Diploma',
        },
        ibdp: {
          dates: ' | Sep, 2018 - Jun, 2020',
          faculty: 'Film · Computer Science · Business & Management ',
          project: 'CAS Project',
        },
      },
    },
  },
  listLastWord: ', and',
};
