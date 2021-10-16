import { useCallback, useState } from 'react';

import { makeIdMatrix } from '../../functions/makeId';
import { makeEmptyMatrix } from '../../functions/makeEmpty';
import { findLongestString } from '../../functions/findLongestString';
import { randomInt } from '../../functions/randomInt';

import { useCooldownEffect } from '../../hooks/useCooldownEffect';
import { useWindowSize } from '../../hooks/useWindowSize';

import './HiddenWords.scss';

const WORD_INDEX_SEPARATOR = '禕';
const MAXIMUM_BOARD_SIZE = 30;

const initialBoard = makeIdMatrix(MAXIMUM_BOARD_SIZE, MAXIMUM_BOARD_SIZE);

function insertHiddenWord(word, wordIndex, grid, longestWordLength, length, quantity) {
  const shouldMoveRight = Math.random() > 0.5;
  const shouldMoveDown = !shouldMoveRight || Math.random() > 0.5;

  const randomStartingWidth = shouldMoveRight
    ? randomInt(length - longestWordLength + 1)
    : randomInt(length - 1);

  const randomStartingHeight = shouldMoveDown
    ? randomInt(quantity - longestWordLength + 1)
    : randomInt(quantity - 1);

  const wordCharacters = word.split('');

  const result = [];

  const initialVerticalCell = randomStartingHeight;

  let currentHorizontalCell = randomStartingWidth;
  let currentVerticalCell = initialVerticalCell;

  for (let i = 0; i < quantity; i++) {
    const char = wordCharacters[i - initialVerticalCell];

    const currentGridLine = grid[i];

    if (!currentGridLine) {
      // TODO: currentGridLine sometimes gets `undefined` here on small screens — and last character of a long word gets clipped. Really strange, shouldn't happen.
      continue;
    }

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

      result.push(currentGridLine);

      if (shouldMoveRight) {
        currentHorizontalCell++;
      }
      if (shouldMoveDown) {
        currentVerticalCell++;
      }
    } else {
      result.push(currentGridLine);
    }
  }

  return result;
}

function makeHiddenWords(words, width, height) {
  const longestWordLength = findLongestString(words).length;

  const length = longestWordLength > width ? longestWordLength : width;
  const quantity = longestWordLength > height ? longestWordLength : height;

  let randomGrid = makeEmptyMatrix(length, quantity);
  words.forEach((word, wordIndex) => {
    randomGrid = insertHiddenWord(word, wordIndex, randomGrid, longestWordLength, length, quantity);
  });
  return randomGrid;
}

function replaceArrayCenter(mainArray, insertedArray) {
  const arrayToReturn = [...mainArray];
  if (!insertedArray) {
    return arrayToReturn;
  }
  const middleIndex = Math.floor(arrayToReturn.length / 2) - Math.floor(insertedArray.length / 2);
  let currentIndexOfInsertedArray = 0;
  for (let i = middleIndex; i < middleIndex + insertedArray.length; i++) {
    const currentElementOfInsertedArray = insertedArray[currentIndexOfInsertedArray];

    if (
      currentElementOfInsertedArray &&
      currentElementOfInsertedArray.split(WORD_INDEX_SEPARATOR)[1].trim()
    ) {
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
  for (let i = middleIndex; i < middleIndex + insertedMatrix.length; i++) {
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

  useCooldownEffect(recalculateHiddenWords);

  return (
    <div className="hiddenWords" onDoubleClick={recalculateHiddenWords}>
      {hiddenWords.map((row, rowIndex) => (
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
