import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const useTitle = (title) => {
  const { localization } = useLanguage();

  useEffect(() => {
    document.title = `${localization.routes.main} · ${title}`;
  }, [localization.routes.main, title]);
};
