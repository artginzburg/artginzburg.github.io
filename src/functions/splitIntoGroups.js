export function splitIntoGroups(inputArray, groupProperty) {
  return inputArray.reduce((resultArray, item) => {
    const chunkIndex = item[groupProperty];

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, {});
}
