import { useCallback, useState } from 'react';

import { useTimeoutLimitedEffect } from '../../hooks/useTimeoutLimitedEffect';
import { useWindowSize } from '../../hooks/useWindowSize';

function makeId(length) {
  let result = [];
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result;
}

function makeBoard(length, quantity) {
  let result = [];
  for (let i = 0; i < quantity; i++) {
    result.push(makeId(length));
  }
  return result;
}

function makeHiddenWords(words, width, height) {
  const longestWordLength = [...words].sort((a, b) => b.length - a.length)[0].length;
  const length = longestWordLength > width ? longestWordLength : width;
  const quantity = longestWordLength > height ? longestWordLength : height;
  var randomGrid = makeBoard(length, quantity);

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

export default function HiddenWords({ words }) {
  const [width, height] = useWindowSize();

  const [hiddenWords, setHiddenWords] = useState(makeBoard(29, 13));

  const recalculateHiddenWords = useCallback(() => {
    setHiddenWords(null);
    setHiddenWords(makeHiddenWords(words, width / 50, height / 50));
  }, [height, width, words]);

  useTimeoutLimitedEffect(recalculateHiddenWords);

  return (
    <div className="hiddenWords">
      {hiddenWords &&
        hiddenWords.map((row, rowIndex) => (
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
        ))}
    </div>
  );
}
