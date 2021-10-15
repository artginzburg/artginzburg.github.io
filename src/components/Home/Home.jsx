import { useCallback, useState } from 'react';
import { FaGithub, FaTelegramPlane } from 'react-icons/fa';
import { useTimeoutLimitedEffect } from '../../hooks/useTimeoutLimitedEffect';
import { useWindowSize } from '../../hooks/useWindowSize';

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

function makeHiddenWords(words, width = 29, height = 13) {
  const longestWordLength = [...words].sort((a, b) => b.length - a.length)[0].length;
  const length = longestWordLength > width ? longestWordLength : width; // 29
  const quantity = longestWordLength > height ? longestWordLength : height; // 13
  var randomGrid = makeIdMultiple(length, quantity).map((row) => row.split('')); // Ideally, length should be longestWord + 21 and quantity should be longestWord + 5

  words.forEach((word, wordIndex) => {
    const wordCharacters = word.split('');

    const shouldMoveRight = Math.random() > 0.5;
    const shouldMoveDown = !shouldMoveRight || Math.random() > 0.5;

    const randomStartingWidth = shouldMoveRight
      ? Math.floor(Math.random() * (length - longestWordLength + 1))
      : Math.floor(Math.random() * (length - 1));

    const randomStartingHeight = shouldMoveDown
      ? Math.floor(Math.random() * (quantity - longestWordLength + 1))
      : Math.floor(Math.random() * (quantity - 1));

    const randomGridReplaced = [];

    const initialVerticalCell = randomStartingHeight;

    let currentHorizontalCell = randomStartingWidth;
    let currentVerticalCell = initialVerticalCell;

    for (let i = 0; i < quantity; i++) {
      const char = wordCharacters[i - initialVerticalCell];

      let currentGridLine = randomGrid[i];

      if (char && currentVerticalCell === i) {
        if (shouldMoveDown) {
          currentGridLine[currentHorizontalCell] = `${wordIndex} ${char}`;
        } else {
          for (let index = 0; index < wordCharacters.length; index++) {
            const character = wordCharacters[index];
            currentGridLine[currentHorizontalCell++] = `${wordIndex} ${character}`;
          }
        }

        randomGridReplaced.push(currentGridLine);

        if (shouldMoveRight) {
          currentHorizontalCell++;
        }
        if (shouldMoveDown) {
          currentVerticalCell++;
        }
      } else {
        randomGridReplaced.push(currentGridLine);
      }
    }

    randomGrid = randomGridReplaced;
  });
  return randomGrid;
}

function insertHiddenWords(width = 29, height = 13) {
  return makeHiddenWords(['develop', 'software', 'ginzburg'], width, height).map(
    (row, rowIndex) => (
      <p className="hiddenWords__char" key={rowIndex}>
        {row.map((column, columnIndex) => {
          if (column.length === 1) {
            return column;
          }

          const [wordIndex, char] = column.split(' ');

          return (
            <span
              id={`char-${wordIndex}`}
              className="hiddenWords__char-active"
              key={`${rowIndex}${columnIndex}`}
            >
              {char}
            </span>
          );
        })}
      </p>
    ),
  );
}

export default function Home() {
  const [width, height] = useWindowSize();

  const [hiddenWords, setHiddenWords] = useState(insertHiddenWords());

  const recalculateHiddenWords = useCallback(() => {
    setHiddenWords(null);
    setHiddenWords(insertHiddenWords(width / 50, height / 50));
  }, [height, width]);

  useTimeoutLimitedEffect(recalculateHiddenWords);

  return (
    <section className="home">
      <div className="hiddenWords">{hiddenWords}</div>

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
