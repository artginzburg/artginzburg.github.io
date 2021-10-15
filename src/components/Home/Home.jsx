import { FaGithub, FaTelegramPlane } from 'react-icons/fa';

import { author } from '../../../package.json';

import avatar from '../../images/avatar.jpg';

import HiddenWords from '../HiddenWords/HiddenWords';

import './Home.scss';

const telegramStyle = { '--link-color': '#0088cc' };
const githubStyle = { '--link-color': '#6e5494' };

export default function Home() {
  return (
    <section className="home">
      <HiddenWords words={['develop', 'software', author.name]} />

      <img src={avatar} className="home__logo" alt="avatar" />
      <p>Я Арт, пишу код</p>
      <nav className="home__buttons">
        <a
          className="home__button"
          href="https://github.com/artginzburg"
          target="_blank"
          rel="noopener noreferrer"
          style={githubStyle}
        >
          <span className="home__button-icon">
            <FaGithub />
          </span>
          <p className="home__button-text">Код</p>
        </a>
        <a
          className="home__button"
          href="https://t.me/ginzart"
          target="_blank"
          rel="noopener noreferrer"
          style={telegramStyle}
        >
          <span className="home__button-icon">
            <FaTelegramPlane />
          </span>
          <p className="home__button-text">Телеграм</p>
        </a>
      </nav>
    </section>
  );
}
