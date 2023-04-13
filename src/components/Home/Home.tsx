import { Link } from 'react-router-dom';
import { FaArrowDown, FaGithub, FaNpm, FaStar } from 'react-icons/fa';

import { useLanguage } from '../../contexts/LanguageContext';
import avatar from '../../images/avatar.jpg';
import { useTitle } from '../../hooks/useTitle';

import HiddenWords from '../HiddenWords/HiddenWords';

import './Home.scss';
import Portfolio from '../Portfolio/Portfolio';
import Life from '../Life/Life';
import { useStatsFetcherData } from '../../queries/statsFetcher';
import { useStargazers } from '../../queries/stargazers';

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
          <HomeGithubButton />
          {/* <HomeButton href="https://t.me/ginzart" Icon={FaTelegramPlane}>
            {localization.links.telegram}
          </HomeButton> */}
          <HomeNpmButton />
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

// TODO localizations
function HomeGithubButton() {
  const statsFetcherData = useStatsFetcherData();

  const stargazers = useStargazers('artginzburg', { fallbackData: '<title>stars: 1.2k</title>' });

  return (
    <a
      className="home__button"
      href="https://github.com/artginzburg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="home__button-layer">
        <FaStar />
        <p className="home__button-text">{stargazers}</p>
      </span>

      <span className="home__button-icon">
        <FaGithub />
      </span>
      <p className="home__button-text">Code</p>

      <span className="home__button-layer">
        <p className="home__button-text">{statsFetcherData?.githubDownloads}</p>
        <FaArrowDown />
      </span>
    </a>
  );
}

function HomeNpmButton() {
  const statsFetcherData = useStatsFetcherData();

  return (
    <a
      className="home__button"
      href="https://www.npmjs.com/~artginzburg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="home__button-icon">
        <FaNpm size={30} />
      </span>
      <p className="home__button-text">Libraries</p>

      <span className="home__button-layer">
        <p className="home__button-text">{statsFetcherData?.npmDownloads}</p>
        <FaArrowDown />
      </span>
    </a>
  );
}
