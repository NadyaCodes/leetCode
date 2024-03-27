/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let i = 0;
  let positive = true;
  let finalString = "";

  while (s[i] === " ") {
    i++;
  }

  if (s[i] === "-" || s[i] === "+") {
    if (s[i] === "-") {
      positive = false;
    }
    i++;
  }

  while (parseInt(s[i]) >= 0) {
    finalString += s[i];
    i++;
  }

  if (!finalString) {
    finalString = "0";
  }

  let finalNumber = positive ? Number(finalString) : Number(finalString) * -1;

  if (finalNumber > Math.pow(2, 31) - 1) {
    finalNumber = Math.pow(2, 31) - 1;
  }

  if (finalNumber < Math.pow(-2, 31)) {
    finalNumber = Math.pow(-2, 31);
  }

  return finalNumber;
};
