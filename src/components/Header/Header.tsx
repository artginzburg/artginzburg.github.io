import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import { useLanguage } from '../../contexts/LanguageContext';

import HeaderLanguage from './HeaderLanguage/HeaderLanguage';

import './Header.scss';

function CustomNavLink({ children, to, className, activeClassName, ...props }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} className={`${className}${match ? ` ${activeClassName}` : ''}`} {...props}>
      {children}
    </Link>
  );
}

export default function Header() {
  const { localization } = useLanguage();

  const openInNewTabProps: JSX.IntrinsicElements['a'] = {
    rel: 'noreferrer',
    target: '_blank',
  };

  return (
    <header className="header">
      <nav className="header__links">
        <CustomNavLink to="/" className="header__logo" activeClassName="header__logo_active">
          {localization.routes.main}
        </CustomNavLink>

        <ul className="header__navigation">
          {/* <CustomNavLink to="/portfolio" className="header__link" activeClassName="header__link_active">
            {localization.routes.portfolio}
          </CustomNavLink> */}
          <a
            href="https://www.linkedin.com/in/artginzburg/"
            {...openInNewTabProps}
            className="header__link"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/artginzburg"
            {...openInNewTabProps}
            className="header__link"
          >
            <FaGithubAlt />
          </a>
        </ul>

      </nav>

      <HeaderLanguage />
    </header>
  );
}
