import { createContext, useContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import { languages } from '../languages';

const defaultLanguage = 'en';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const languageState = useLocalStorage(
    'language',
    navigator.language.includes('ru') ? 'ru' : defaultLanguage,
  );

  const [currentLanguage] = languageState;

  const context = {
    localization: languages[currentLanguage],
    state: languageState,
  };

  return <LanguageContext.Provider value={context}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
