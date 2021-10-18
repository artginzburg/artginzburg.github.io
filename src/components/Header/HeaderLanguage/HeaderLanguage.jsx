import { useState } from 'react';

import { useLanguage } from '../../../contexts/LanguageContext';

import { classNames } from '../../../functions/toClassNames';

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
  );
}
