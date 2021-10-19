import { FaGithub, FaTelegramPlane } from 'react-icons/fa';

import { author } from '../../../package.json';
import { useLanguage } from '../../contexts/LanguageContext';

import avatar from '../../images/avatar.jpg';
import { linkColor } from '../../utils/styles';

import HiddenWords from '../HiddenWords/HiddenWords';

import './Home.scss';

const customStyles = {
  github: linkColor('#83278f'), // 6e5494
  telegram: linkColor('#28aaea'), // 0088cc
};

const hiddenWords = ['develop', 'software', author.name];

export default function Home() {
  const { localization } = useLanguage();

  return (
    <section className="home">
      <HiddenWords words={hiddenWords} />

      <img src={avatar} className="home__logo" alt="avatar" />
      <p className="home__text">{localization.home_text}</p>
      <nav className="home__buttons">
        <a
          className="home__button"
          href="https://github.com/artginzburg"
          target="_blank"
          rel="noopener noreferrer"
          style={customStyles.github}
        >
          <span className="home__button-icon">
            <FaGithub />
          </span>
          <p className="home__button-text">{localization.links.github}</p>
        </a>
        <a
          className="home__button"
          href="https://t.me/ginzart"
          target="_blank"
          rel="noopener noreferrer"
          style={customStyles.telegram}
        >
          <span className="home__button-icon">
            <FaTelegramPlane />
          </span>
          <p className="home__button-text">{localization.links.telegram}</p>
        </a>
      </nav>
    </section>
  );
}