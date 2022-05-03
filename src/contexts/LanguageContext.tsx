import { createContext, useContext, useMemo } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

import { languages, LanguageKey } from '../languages';
import type { Language } from '../languages/schema';

const defaultLanguage: LanguageKey = 'en';

type LanguageContextType = {
  localization: Language;
  state: [LanguageKey, React.Dispatch<React.SetStateAction<LanguageKey>>];
}

const LanguageContext = createContext<LanguageContextType>(null as unknown as LanguageContextType);

export function LanguageProvider({ children }: { children: React.ReactFragment }) {
  const languageState = useLocalStorage(
    'language',
    navigator.language.includes('ru') ? 'ru' : defaultLanguage as LanguageKey,
  ) as LanguageContextType['state'];

  const [currentLanguage] = languageState;

  const context = useMemo(() => ({
    localization: languages[currentLanguage],
    state: languageState,
  }), [currentLanguage, languageState]);

  return <LanguageContext.Provider value={context}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
