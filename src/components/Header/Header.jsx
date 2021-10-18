import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useLanguage } from '../../contexts/LanguageContext';

import { classNames } from '../../functions/toClassNames';

import './Header.scss';

export default function Header() {
  // Logic
  const {
    localization,
    state: [language, setLanguage],
  } = useLanguage();

  function handleLanguageClick(e) {
    setLanguage(e.target.innerText.toLowerCase());
  }

  // Cosmetics
  const defaultLanguageSecondState = language === 'ru';

  const [isLanguageSecond, setLanguageSecond] = useState();

  useEffect(() => {
    setLanguageSecond(defaultLanguageSecondState);
  }, [defaultLanguageSecondState, language]);

  function handleHoverEnter(e) {
    language !== e.target.innerText.toLowerCase() && setLanguageSecond(!defaultLanguageSecondState);
  }

  function handleHoverLeave(e) {
    language !== e.target.innerText.toLowerCase() && setLanguageSecond(defaultLanguageSecondState);
  }

  // Mixed
  const languageButtonProps = {
    onClick: handleLanguageClick,
    onMouseEnter: handleHoverEnter,
    onMouseLeave: handleHoverLeave,
    type: 'button',
  };

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

      <div {...classNames(['header__language', isLanguageSecond && 'header__language_moved'])}>
        <button
          {...classNames([
            'header__language-button',
            language === 'en' && 'header__language-button_selected',
          ])}
          {...languageButtonProps}
        >
          EN
        </button>
        <button
          {...classNames([
            'header__language-button',
            language === 'ru' && 'header__language-button_selected',
          ])}
          {...languageButtonProps}
        >
          RU
        </button>
      </div>
    </header>
  );
}
