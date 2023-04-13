import { Link } from 'react-router-dom';
import { FaGithub, FaTelegramPlane } from 'react-icons/fa';
import type { IconType } from 'react-icons';

import { useLanguage } from '../../contexts/LanguageContext';
import avatar from '../../images/avatar.jpg';
import { useTitle } from '../../hooks/useTitle';

import HiddenWords from '../HiddenWords/HiddenWords';

import './Home.scss';
import Portfolio from '../Portfolio/Portfolio';
import Life from '../Life/Life';

const hiddenWords = ['develop', 'software', 'ginzburg'];

export default function Home() {
  const { localization } = useLanguage();

  useTitle(localization.titles.main);

  const description = 'Express.js, MongoDB, React.';

  return (
    <>
      <section className="home">
        <HiddenWords words={hiddenWords} />

        <img src={avatar} className="home__logo" alt="avatar" />
        <p className="home__text">{localization.home_text}</p>
        <nav className="home__buttons">
          <HomeButton href="https://github.com/artginzburg" Icon={FaGithub}>
            {localization.links.github}
          </HomeButton>
          <HomeButton href="https://t.me/ginzart" Icon={FaTelegramPlane}>
            {localization.links.telegram}
          </HomeButton>
        </nav>
        <Link
          to="/portfolio"
          className="home__description"
          style={{
            // @ts-expect-error valid CSS variable
            '--typewriter-characters-length': description.length,
          }}
        >
          {description}
        </Link>
        <a href="#life" className="home__next">
          <span className="home__next-text">{localization.routes.portfolio}</span>
        </a>
      </section>
      <Life />
      <Portfolio />
    </>
  );
}

function HomeButton({ children, href, Icon }: { children: string; href: string; Icon: IconType }) {
  return (
    <a
      className="home__button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="home__button-icon">
        <Icon />
      </span>
      <p className="home__button-text">{children}</p>
    </a>
  );
}
