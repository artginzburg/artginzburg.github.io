import { NavLink } from 'react-router-dom';

import { useLanguage } from '../../contexts/LanguageContext';

import { classNames } from '../../functions/toClassNames';

import './Header.scss';

export default function Header() {
  const {
    localization,
    state: [language, setLanguage],
  } = useLanguage();

  function handleLanguageClick(e) {
    setLanguage(e.target.innerText.toLowerCase());
  }

  return (
    <header className="header">
      <nav className="header__links">
        <NavLink exact to="/" className="header__logo" activeClassName="header__logo_active">
          {localization.routes.main}
        </NavLink>

        <ul className="header__navigation">
          <NavLink to="/portfolio" className="header__link" activeClassName="header__link_active">
            {localization.routes.portfolio}
          </NavLink>
        </ul>
      </nav>

      <div className="header__language">
        <button
          {...classNames([
            'header__language-button',
            language === 'en' && 'header__language-button_selected',
          ])}
          onClick={handleLanguageClick}
          type="button"
        >
          EN
        </button>
        <button
          {...classNames([
            'header__language-button',
            language === 'ru' && 'header__language-button_selected',
          ])}
          onClick={handleLanguageClick}
          type="button"
        >
          RU
        </button>
      </div>
    </header>
  );
}
