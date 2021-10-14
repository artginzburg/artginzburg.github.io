import { Fragment } from 'react';
import { FaGithub, FaTelegramPlane } from 'react-icons/fa';

import avatar from '../../images/avatar.jpg';

import './Home.scss';

function makeId(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function makeIdMultiple(length, quantity) {
  let result = [];
  for (let i = 0; i < quantity; i++) {
    result.push(makeId(length));
  }
  return result;
}

function makeHiddenWords(words) {
  const longestWordLength = words.sort((a, b) => b.length - a.length)[0].length;
  var randomGrid = makeIdMultiple(longestWordLength, longestWordLength);
  words.forEach((word) => {
    const wordCharacters = word.split('');
    // const displayMethod = Math.random > 0.8 ? 'diagonal' : Math.random() > 0.5 ? 'horizontal' : 'vertical';

    const randomGridReplaced = [];

    wordCharacters.forEach((char, i) => {
      let currentGridLine = randomGrid[i].split('');
      currentGridLine[i] = (
        <span key={i} className="hiddenWords__char-active">
          {char}
        </span>
      );
      randomGridReplaced.push(
        <p key={i} className="hiddenWords__char">
          {currentGridLine.map((gridElement, index) =>
            gridElement.length === 1 ? <Fragment key={index}>{gridElement}</Fragment> : gridElement,
          )}
        </p>,
      );
    });

    randomGrid = randomGridReplaced;
  });
  return randomGrid;
}

export default function Home() {
  return (
    <section className="home">
      {/* <svg className="svgFilter">
          <filter id="noise">
            <feTurbulence id="turbulence">
              <animate
                attributeName="baseFrequency"
                dur="1s"
                values="0.9 0.9; 0.8 0.8; 0.9 0.9;"
                repeatCount="indefinite"
              />
              <feDisplacementMap in="SourceGraphic" scale="60" />
            </feTurbulence>
          </filter>
        </svg>
        <div className="backgroundNoise" /> */}
      <div className="hiddenWords">{makeHiddenWords(['develop'])}</div>

      <img src={avatar} className="home__logo" alt="avatar" />
      <p>Я Арт, пишу код</p>
      <nav className="home__buttons">
        <a
          className="home__button"
          href="https://github.com/artginzburg"
          target="_blank"
          rel="noopener noreferrer"
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
