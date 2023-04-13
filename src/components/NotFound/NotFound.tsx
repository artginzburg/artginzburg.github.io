import { Link } from 'react-router-dom';

import { useLanguage } from '../../contexts/LanguageContext';

import './NotFound.scss';

export default function NotFound() {
  const { localization } = useLanguage();

  return (
    <main className="notfound">
      <h1 className="notfound__title">404</h1>
      <h2 className="notfound__subtitle">{localization.notFound.subtitle}</h2>
      <nav className="notfound__navigation">
        <Link to="/" className="notfound__link">
          {localization.notFound.back}
        </Link>
      </nav>
    </main>
  );
}
