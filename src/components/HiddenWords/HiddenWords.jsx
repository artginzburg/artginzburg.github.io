import { useCallback, useState } from 'react';

import { useTimeoutLimitedEffect } from '../../hooks/useTimeoutLimitedEffect';
import { useWindowSize } from '../../hooks/useWindowSize';

import './HiddenWords.scss';

const WORD_INDEX_SEPARATOR = '禕';
const MAXIMUM_BOARD_SIZE = 30;
const initialBoard = makeBoard(MAXIMUM_BOARD_SIZE, MAXIMUM_BOARD_SIZE);

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

function makeEmptyMatrix(length, quantity) {
  return Array(Math.trunc(quantity))
    .fill()
    .map(() => Array(Math.trunc(length)).fill());
}

function makeHiddenWords(words, width, height) {
  const longestWordLength = [...words].sort((a, b) => b.length - a.length)[0].length;

  const length = longestWordLength > width ? longestWordLength : width;
  const quantity = longestWordLength > height ? longestWordLength : height;

  let randomGrid = makeEmptyMatrix(length, quantity);

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

    for (let i = 0; i < quantity - 1; i++) {
      const char = wordCharacters[i - initialVerticalCell];

      let currentGridLine = randomGrid[i];

      if (char && currentVerticalCell === i) {
        if (shouldMoveDown) {
          currentGridLine[currentHorizontalCell] = `${wordIndex}${WORD_INDEX_SEPARATOR}${char}`;
        } else {
          for (let index = 0; index < wordCharacters.length; index++) {
            const character = wordCharacters[index];
            currentGridLine[
              currentHorizontalCell++
            ] = `${wordIndex}${WORD_INDEX_SEPARATOR}${character}`;
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

function replaceArrayCenter(mainArray, insertedArray) {
  const arrayToReturn = [...mainArray];
  const middleIndex = Math.floor(arrayToReturn.length / 2) - Math.floor(insertedArray.length / 2);
  let currentIndexOfInsertedArray = 0;
  for (let i = middleIndex; i < middleIndex + insertedArray.length; i++) {
    const currentElementOfInsertedArray = insertedArray[currentIndexOfInsertedArray];

    if (
      currentElementOfInsertedArray &&
      currentElementOfInsertedArray.split(WORD_INDEX_SEPARATOR)[1].trim()
    ) {
      console.log(currentElementOfInsertedArray);
      arrayToReturn[i] = currentElementOfInsertedArray;
    }
    currentIndexOfInsertedArray++;
  }
  return arrayToReturn;
}

function replaceMatrixCenter(mainMatrix, insertedMatrix) {
  const matrixToReturn = [...mainMatrix];
  const middleIndex = Math.floor(matrixToReturn.length / 2) - Math.floor(insertedMatrix.length / 2);
  let currentIndexOfInsertedMatrix = 0;
  for (let i = middleIndex; i < middleIndex + insertedMatrix.length - 1; i++) {
    const currentArrayOfMainMatrix = matrixToReturn[i];
    const currentArrayOfInsertedMatrix = insertedMatrix[currentIndexOfInsertedMatrix];
    matrixToReturn[i] = replaceArrayCenter(currentArrayOfMainMatrix, currentArrayOfInsertedMatrix);
    currentIndexOfInsertedMatrix++;
  }
  return matrixToReturn;
}

export default function HiddenWords({ words }) {
  const [width, height] = useWindowSize();

  const [hiddenWords, setHiddenWords] = useState(initialBoard);

  const recalculateHiddenWords = useCallback(() => {
    const isMobile = height > width;
    const newWidth = isMobile ? width / 40 : width / 60;
    const newHeight = isMobile ? height / 52 : height / 85;

    const controlledWidth = newWidth > MAXIMUM_BOARD_SIZE ? MAXIMUM_BOARD_SIZE : newWidth;
    const controlledHeight = newHeight > MAXIMUM_BOARD_SIZE ? MAXIMUM_BOARD_SIZE : newHeight;

    setHiddenWords(
      replaceMatrixCenter(initialBoard, makeHiddenWords(words, controlledWidth, controlledHeight)),
    );
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

              const [wordIndex, char] = column.split(WORD_INDEX_SEPARATOR);

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
