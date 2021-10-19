import sudotouchid from '../images/projects/sudotouchid.png';
import powerchime from '../images/projects/powerchime.png';

export const projects = [
  {
    title: '2FA to Tray',
    subtitle: 'Swift & JS',
    image:
      'https://raw.githubusercontent.com/artginzburg/2FAtoTray/main/res/screenshot_full_res.png',
    year: 2020,
    link: 'https://2fatotray.unicornplatform.page',
    category: 'apps',
    description: {
      en: 'One-time password manager for mac OS, which, despite its simplicity, has almost passed into the daily top of Product Hunt',
      ru: 'Менеджер одноразовых паролей для macOS, который, несмотря на свою простоту, почти прошёл в ежедневный топ Product Hunt',
    },
    downloads: 'https://img.shields.io/github/downloads/artginzburg/2fatotray/total',
    stars: 'https://img.shields.io/github/stars/artginzburg/2fatotray',
  },
  {
    title: 'MiddleClick',
    subtitle: 'Objective-C',
    image: 'https://github.com/artginzburg/MiddleClick-Catalina/raw/master/demo.png',
    year: 2019,
    link: 'https://github.com/artginzburg/MiddleClick-Catalina',
    category: 'apps',
    description: {
      en: ' Middleclick with three-finger click/tap for MacBook trackpad and Magic Mouse.',
      ru: ' "Клик колёсиком" тремя пальцами для трекпада и Magic Mouse',
    },
    downloads: 'https://img.shields.io/github/downloads/artginzburg/middleclick-catalina/total',
    stars: 'https://img.shields.io/github/stars/artginzburg/middleclick-catalina',
  },

  {
    title: 'Movies Explorer',
    subtitle: 'React Hooks & MongoDB',
    year: 2021,
    link: 'https://deeplomka.nomoredomains.club',
    category: 'frontend',
    description: {
      en: 'Diploma for 100/100 points while studying at Yandex.Practicum',
      ru: 'Диплом на 100/100 баллов во время обучения в Yandex.Practicum',
    },
  },
  {
    title: 'Mesto',
    subtitle: 'React Hooks & MongoDB (Webpack, Babel, Express)',
    year: 2021,
    link: 'https://artginzburg-learning.github.io/react-mesto-auth/',
    category: 'frontend',
    description: {
      en: 'The first full-fledged educational React project with authorization (6th course of Yandex.Practicum)',
      ru: 'Первый полноценный учебный React-проект с авторизацией (6-й курс Яндекс.Практикума)',
    },
  },
  {
    title: 'Travelling in Russia',
    subtitle: 'CSS & BEM',
    year: 2020,
    link: 'https://artginzburg-learning.github.io/russian-travel/',
    category: 'frontend',
    description: {
      en: 'Educational project, 2nd course of Yandex.Practicum',
      ru: 'Учебный проект, 2-й курс Яндекс.Практикума',
    },
  },
  {
    title: 'How to Learn',
    subtitle: 'CSS & BEM',
    year: 2020,
    link: 'https://artginzburg-learning.github.io/how-to-learn/',
    category: 'frontend',
    description: {
      en: 'Educational project, 1st course of Yandex.Practicum',
      ru: 'Учебный проект, 1-й курс Яндекс.Практикума',
    },
  },
  {
    title: '3D School Map',
    subtitle: 'Raw JS',
    year: 2019,
    link: 'https://artginzburg.github.io/CASProject/',
    category: 'frontend',
    description: {
      en: 'Interactive map of the school building, the first independent frontend project',
      ru: 'Интерактивная карта школьного здания, первый самостоятельный фронтенд-проект',
    },
  },

  {
    title: 'sudo-touchid',
    subtitle: 'Raw Shellscript',
    image: sudotouchid,
    year: 2021,
    link: 'https://git.io/sudotouchid',
    category: 'cli',
    description: {
      en: 'Script for automating the use of Touch ID instead of a password on the command line',
      ru: 'Скрипт для автоматизации использования TouchID вместо пароля в командной строке',
    },
    downloads: 'https://img.shields.io/github/downloads/artginzburg/sudo-touchid/total',
    stars: 'https://img.shields.io/github/stars/artginzburg/sudo-touchid',
  },
  {
    title: 'barhide',
    subtitle: 'Raw Shellscript',
    year: 2019,
    link: 'https://git.io/barhide',
    category: 'cli',
    description: {
      en: 'Hiding extra icons from the Menu Bar',
      ru: 'Скрытие лишних иконок из Menu Bar',
    },
    downloads: 'https://img.shields.io/github/downloads/artginzburg/barhide/total',
    stars: 'https://img.shields.io/github/stars/artginzburg/barhide',
  },
  {
    title: 'powerchime',
    subtitle: 'Raw Shellscript',
    image: powerchime,
    year: 2019,
    link: 'https://git.io/nochime',
    category: 'cli',
    description: {
      en: 'Switching the sound of the charging cable connection',
      ru: ' Тот самый переключатель звука зарядки для MacBook 🔊',
    },
    downloads: 'https://img.shields.io/github/downloads/artginzburg/powerchime/total',
    stars: 'https://img.shields.io/github/stars/artginzburg/powerchime',
  },
  {
    title: 'wifi-pass',
    subtitle: 'Raw Shellscript',
    year: 2019,
    link: 'https://git.io/wifi-pass',
    category: 'cli',
    description: {
      en: 'Fast sharing of Wi-Fi passwords',
      ru: 'Быстрый шеринг паролей Wi-Fi',
    },
    stars: 'https://img.shields.io/github/stars/artginzburg/wifi-pass',
  },

  {
    title: 'Flight Notifier',
    subtitle: 'Node.JS & Telegraf',
    year: 2021,
    link: 'https://github.com/artginzburg/flightnotifier',
    category: 'backend',
    description: {
      en: 'Telegram bot for notifications about takeoffs and landings of private planes',
      ru: 'Телеграм-бот для уведомлений о взлётах и посадках частных самолётов',
    },
  },
  {
    title: 'sigcheck',
    subtitle: 'Express & Puppeteer',
    year: 2021,
    link: 'https://github.com/artginzburg/sigcheck',
    category: 'backend',
    description: {
      en: 'Backend of electronic signature verification for NBKI',
      ru: 'Бэкенд проверки электронных подписей для НБКИ',
    },
  },
];

// export const testimonials = [
//   {
//     quote: 'Powerchime for the win! Thanks mate.',
//     image: 'http://soflyy.com/wp-content/uploads/2020/02/Louis-Cropped2.png',
//     name: 'Louis Reingold',
//     company: 'Soflyy',
//   },
// ];

// export const skills = ['JavaScript', 'React', 'Express', 'Node', 'Rest API', 'MongoDB'];

// export const contacts = {
//   email: 'art.ginzburg@ya.ru',
//   phone: '+7 (977) 605-93-28',
// };
