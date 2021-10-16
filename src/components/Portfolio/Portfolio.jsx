import { useLanguage } from '../../contexts/LanguageContext';

import './Portfolio.scss';

export default function Portfolio() {
  const { localization } = useLanguage();

  return (
    <section className="portfolio">
      <article>
        <h2 className="portfolio__subtitle">{localization.portfolio.frontend}</h2>
        <ul>
          <li>
            <a href="https://deeplomka.nomoredomains.club" target="_blank" rel="noreferrer">
              Movies Explorer, 2021, React + MongoDB
            </a>
            <p>Диплом на 100/100 баллов во время обучения в Yandex.Praktikum</p>
          </li>
          <li>
            <a
              href="https://artginzburg-learning.github.io/react-mesto-auth/"
              target="_blank"
              rel="noreferrer"
            >
              Mesto, 2021, React + MongoDB (Webpack, Babel, Express)
            </a>
            <p>
              Первый полноценный учебный React-проект с авторизацией (6-й курс Яндекс.Практикума)
            </p>
          </li>
          <li>
            <a
              href="https://artginzburg-learning.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
            >
              Travelling in Russia, 2020, CSS + БЭМ
            </a>
            <p>Учебный проект, 2-й курс Яндекс.Практикума</p>
          </li>
          <li>
            <a
              href="https://artginzburg-learning.github.io/how-to-learn/"
              target="_blank"
              rel="noreferrer"
            >
              How to Learn, 2020, CSS + БЭМ
            </a>
            <p>Учебный проект, 1-й курс Яндекс.Практикума</p>
          </li>
          <li>
            <a href="https://artginzburg.github.io/CASProject/" target="_blank" rel="noreferrer">
              3D School Map, 2019, Raw JS
            </a>
            <p>Интерактивная карта школьного здания, первый самостоятельный фронтенд-проект</p>
          </li>
        </ul>
      </article>
      <article>
        <h2 className="portfolio__subtitle">{localization.portfolio.cli}</h2>
        <ul>
          <li>
            <a href="https://git.io/sudotouchid" target="_blank" rel="noreferrer">
              sudo-touchid, 2021
            </a>
            <p>Скрипт для автоматизации использования TouchID вместо пароля в командной строке</p>
          </li>
          <li>
            <a href="https://git.io/barhide" target="_blank" rel="noreferrer">
              barhide, 2019
            </a>
            <p>скрытие лишних иконок из Menu Bar</p>
          </li>
          <li>
            <a href="https://git.io/nochime" target="_blank" rel="noreferrer">
              powerchime, 2019
            </a>
            <p>переключение звука подключения зарядного кабеля</p>
          </li>
          <li>
            <a href="http://git.io/wifi-pass" target="_blank" rel="noreferrer">
              wifi-pass, 2019
            </a>
            <p>быстрый шеринг паролей Wi-Fi</p>
          </li>
        </ul>
      </article>
      <article>
        <h2 className="portfolio__subtitle">{localization.portfolio.apps}</h2>
        <ul>
          <li>
            <a href="https://2fatotray.unicornplatform.page" target="_blank" rel="noreferrer">
              2FA to Tray, 2020, Swift
            </a>
            <p>
              Менеджер одноразовых паролей для macOS, который, несмотря на свою простоту, почти
              прошёл в ежедневный топ Product Hunt
            </p>
          </li>
        </ul>
      </article>
      <article>
        <h2 className="portfolio__subtitle">{localization.portfolio.backend}</h2>
        <ul>
          <li>
            <a
              href="https://github.com/artginzburg/flightnotifier"
              target="_blank"
              rel="noreferrer"
            >
              Flight Notifier, 2021, Node.JS + Telegraf
            </a>
            <p>Телеграм-бот для уведомлений о взлётах и посадках частных самолётов</p>
          </li>
          <li>
            <a href="https://github.com/artginzburg/sigcheck" target="_blank" rel="noreferrer">
              sigcheck, 2021, Express + Puppeteer
            </a>
            <p>Бэкенд проверки электронных подписей для НБКИ</p>
          </li>
        </ul>
      </article>
    </section>
  );
}
