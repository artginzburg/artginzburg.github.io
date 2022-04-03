export function splitIntoGroups(inputArray, groupProperty) {
  return inputArray.reduce((resultArray, item) => {
    const chunkIndex = item[groupProperty];

    if (!resultArray[chunkIndex]) {
      // Reassigning `resultArray` here is not reassigning, but, rather, mutating, which is used here for creating an array of arrays.
      // eslint-disable-next-line no-param-reassign
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, {});
}
