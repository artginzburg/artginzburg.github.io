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
            <p>{localization.projects.moviesExplorer}</p>
          </li>
          <li>
            <a
              href="https://artginzburg-learning.github.io/react-mesto-auth/"
              target="_blank"
              rel="noreferrer"
            >
              Mesto, 2021, React + MongoDB (Webpack, Babel, Express)
            </a>
            <p>{localization.projects.mesto}</p>
          </li>
          <li>
            <a
              href="https://artginzburg-learning.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
            >
              Travelling in Russia, 2020, CSS + БЭМ
            </a>
            <p>{localization.projects.russianTravel}</p>
          </li>
          <li>
            <a
              href="https://artginzburg-learning.github.io/how-to-learn/"
              target="_blank"
              rel="noreferrer"
            >
              How to Learn, 2020, CSS + БЭМ
            </a>
            <p>{localization.projects.howToLearn}</p>
          </li>
          <li>
            <a href="https://artginzburg.github.io/CASProject/" target="_blank" rel="noreferrer">
              3D School Map, 2019, Raw JS
            </a>
            <p>{localization.projects.casProject}</p>
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
            <p>{localization.projects.sudoTouchid}</p>
          </li>
          <li>
            <a href="https://git.io/barhide" target="_blank" rel="noreferrer">
              barhide, 2019
            </a>
            <p>{localization.projects.barhide}</p>
          </li>
          <li>
            <a href="https://git.io/nochime" target="_blank" rel="noreferrer">
              powerchime, 2019
            </a>
            <p>{localization.projects.powerchime}</p>
          </li>
          <li>
            <a href="http://git.io/wifi-pass" target="_blank" rel="noreferrer">
              wifi-pass, 2019
            </a>
            <p>{localization.projects.wifiPass}</p>
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
            <p>{localization.projects['2faToTray']}</p>
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
            <p>{localization.projects.flightNotifier}</p>
          </li>
          <li>
            <a href="https://github.com/artginzburg/sigcheck" target="_blank" rel="noreferrer">
              sigcheck, 2021, Express + Puppeteer
            </a>
            <p>{localization.projects.sigcheck}</p>
          </li>
        </ul>
      </article>
    </section>
  );
}
