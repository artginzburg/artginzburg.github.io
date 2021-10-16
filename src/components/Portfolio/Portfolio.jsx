import { useLanguage } from '../../contexts/LanguageContext';

import './Portfolio.scss';

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section className="portfolio">
      <article>
        <h2 className="portfolio__subtitle">{t('portfolio', 'frontend')}</h2>
        <ul>
          <li>
            <a href="https://artginzburg.github.io/CASProject/" target="_blank" rel="noreferrer">
              {t('portfolio', 'casProject')}
            </a>
          </li>
          <li>
            <a href="https://deeplomka.nomoredomains.club" target="_blank" rel="noreferrer">
              {t('portfolio', 'moviesExplorer')}
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
