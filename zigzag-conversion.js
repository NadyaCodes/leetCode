/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let endLoop = numRows * 2 - 2;

  if (endLoop < 1) {
    endLoop = 1;
  }

  let wordsArray = Array.from({ length: numRows }, () => "");

  for (let i = 0; i < s.length; i += endLoop) {
    let midValue = endLoop / 2;

    if (s[midValue + i]) {
      wordsArray[numRows - 1] += s[midValue + i];
    }

    let leftIndex = midValue - 1;
    let rightIndex = midValue + 1;

    while (leftIndex >= 0) {
      if (s[leftIndex + i]) {
        wordsArray[leftIndex] += s[leftIndex + i];
      }
      if (s[rightIndex + i] && rightIndex < endLoop) {
        wordsArray[leftIndex] += s[rightIndex + i];
      }
      leftIndex--;
      rightIndex++;
    }

    if (numRows >= s.length) {
      wordsArray = [s];
    }

    if (numRows === 1) {
      wordsArray = [s];
    }
  }

  return wordsArray.join("");
};
