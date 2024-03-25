/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // const isPalendrome = (string) => {
  //     let i = 0
  //     let middleIndex = (string.length / 2)
  //     if (!middleIndex) {
  //         middleIndex = 1
  //     }
  //     let lastIndex = string.length - 1
  //     let isPalen = true
  //     if (!Number.isInteger(middleIndex)) {
  //         middleIndex += 0.5
  //     }

  //     while (i < middleIndex) {
  //         if (string[i] !== string[lastIndex]) {
  //             isPalen = false
  //         }
  //         i++
  //         lastIndex--
  //     }
  //     return isPalen
  // }

  // let longestPalendrome = ""

  // for (let i = 0; i < s.length; i++) {
  //     let currentString = s[i].toString()
  //     let j = i + 1
  //     while (j < s.length) {
  //         currentString += s[j].toString()
  //         if (isPalendrome(currentString)) {
  //             if (currentString.length > longestPalendrome.length)  {
  //                 longestPalendrome = currentString
  //             }
  //         }
  //         j++
  //     }
  // }

  // if (!longestPalendrome) {
  //     longestPalendrome = s[0]
  // }
  // return longestPalendrome
  const findLongestPal = (letter, index) => {
    let leftIndex = index - 1;
    let rightIndex = index + 1;

    while (s[leftIndex] === letter) {
      leftIndex--;
    }

    while (s[rightIndex] === letter) {
      rightIndex++;
    }
    while (
      leftIndex >= 0 &&
      rightIndex < s.length &&
      s[leftIndex] === s[rightIndex]
    ) {
      leftIndex--;
      rightIndex++;
    }
    return s.slice(leftIndex + 1, rightIndex);
  };

  let longestPalendrome = "";

  for (let i = 0; i < s.length; i++) {
    const longestPal = findLongestPal(s[i], i);
    if (longestPal.length > longestPalendrome.length) {
      longestPalendrome = longestPal;
    }
  }

  return longestPalendrome;
};
