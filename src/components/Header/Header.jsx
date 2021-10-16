import { Link } from 'react-router-dom';

import { useLanguage } from '../../contexts/LanguageContext';

import './Header.scss';

export default function Header() {
  const {
    t,
    state: [language, setLanguage],
  } = useLanguage();

  console.log(language);

  function handleLanguageClick(e) {
    setLanguage(e.target.innerText.toLowerCase());
  }

  return (
    <header className="header">
      <nav className="header__links">
        <Link to="/" className="header__logo">
          {t('routes', 'main')}
        </Link>

        <ul className="header__navigation">
          <Link to="/portfolio" className="header__link">
            {t('routes', 'portfolio')}
          </Link>
        </ul>
      </nav>

      <div className="header__language">
        <button
          className={`header__language-button${
            language === 'en' ? ' header__language-button_selected' : ''
          }`}
          onClick={handleLanguageClick}
          type="button"
        >
          EN
        </button>
        <button
          className={`header__language-button${
            language === 'ru' ? ' header__language-button_selected' : ''
          }`}
          onClick={handleLanguageClick}
          type="button"
        >
          RU
        </button>
      </div>
    </header>
  );
}
