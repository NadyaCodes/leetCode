/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let stringArray = x.toString().split("");
  let negative = false;

  if (stringArray[0] === "-") {
    negative = true;
    stringArray.shift();
  }

  const newString = stringArray.reverse().join("");
  let finalNumber = negative ? Number(newString) * -1 : Number(newString);

  if (finalNumber < Math.pow(-2, 31) || finalNumber > Math.pow(2, 31) - 1) {
    finalNumber = 0;
  }

  return finalNumber;
};
