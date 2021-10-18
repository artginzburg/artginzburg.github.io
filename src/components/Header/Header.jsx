import { NavLink } from 'react-router-dom';

import { useLanguage } from '../../contexts/LanguageContext';

import HeaderLanguage from './HeaderLanguage/HeaderLanguage';

import './Header.scss';

export default function Header() {
  const { localization } = useLanguage();

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

      <HeaderLanguage />
    </header>
  );
}
