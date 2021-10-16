import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <nav className="header__links">
        <Link to="/" className="header__logo">
          Арт Гинзбург
        </Link>

        <ul className="header__navigation">
          <Link to="/portfolio" className="header__link">
            Портфолио
          </Link>
        </ul>
      </nav>
    </header>
  );
}
