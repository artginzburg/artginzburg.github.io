import { useState } from 'react';

import { useLanguage } from '../../../contexts/LanguageContext';
import { classNames } from '../../../functions/toClassNames';

import './HeaderLanguage.scss';

export default function HeaderLanguage() {
  // Logic
  const {
    state: [language, setLanguage],
  } = useLanguage();

  function handleLanguageClick(e) {
    setLanguage(e.target.innerText.toLowerCase());
  }

  // Cosmetics
  const defaultLanguageSecondState = language === 'ru';

  const [isLanguageSecond, setLanguageSecond] = useState(defaultLanguageSecondState);

  function handleHoverEnter(e) {
    if (language !== e.target.innerText.toLowerCase()) {
      setLanguageSecond(!defaultLanguageSecondState);
    }
  }

  function handleHoverLeave(e) {
    if (language !== e.target.innerText.toLowerCase()) {
      setLanguageSecond(defaultLanguageSecondState);
    }
  }

  // Mixed
  const languageButtonProps = {
    onClick: handleLanguageClick,
    onMouseEnter: handleHoverEnter,
    onMouseLeave: handleHoverLeave,
    type: 'button' as const,
  };

  return (
    <div {...classNames(['header__language', isLanguageSecond && 'header__language_moved'])}>
      {/* This button has type, which is defined in `languageButtonProps` */}
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        {...classNames([
          'header__language-button',
          language === 'en' && 'header__language-button_selected',
        ])}
        {...languageButtonProps}
      >
        EN
      </button>
      {/* This button has type, which is defined in `languageButtonProps` */}
      {/* eslint-disable-next-line react/button-has-type */}
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
  );
}
