// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var maxSubarrayLength = function(nums, k) {

//   const findMaxArray = (index) => {
//       let arrayLength = 1
//       let bust = false
//       let testIndex = index + 1

//       if (arrayLength <= k) {
//           const testObject = {[nums[index]]: 1}
//           while (!bust && testIndex < nums.length) {
//               let currentKey = nums[testIndex]
//               testObject[currentKey] ? testObject[currentKey] += 1 : testObject[currentKey] = 1
//               if (testObject[currentKey] > k) {
//                   bust = true
//               } else {
//                   arrayLength += 1
//               }
//               testIndex++
//           }
//       }

//       return arrayLength
//   }

//   let maxArrayLength = k > 0 ? 1 : 0

//   if (k >= nums.length) {
//       return nums.length
//   }

//   for (let i = 0; i < nums.length - k; i++) {

//       let arrayLength = findMaxArray(i)

//       if (maxArrayLength < arrayLength) {
//           maxArrayLength = arrayLength
//       }
//   }
//   return maxArrayLength
// };
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  if (k >= nums.length) {
    return nums.length;
  }

  let maxArrayLength = k > 0 ? 1 : 0;

  const frequencyMap = new Map([[nums[0], 1]]);
  let endIndex = 1;
  let startIndex = 0;
  let currentArrayLength = 1;

  while (endIndex < nums.length) {
    const currentKey = nums[endIndex];
    let currentCount = (frequencyMap.get(currentKey) || 0) + 1;

    if (currentCount <= k) {
      currentArrayLength++;
    } else {
      const startKey = nums[startIndex];
      const startValue = frequencyMap.get(startKey);
      if (startValue === 1) {
        frequencyMap.delete(startKey);
      } else {
        frequencyMap.set(startKey, startValue - 1);
      }
      startIndex++;
      if (startKey === currentKey) {
        currentCount--;
      }
      while (currentCount > k) {
        const startKey = nums[startIndex];
        const startValue = frequencyMap.get(startKey);
        if (startValue === 1) {
          frequencyMap.delete(startKey);
        } else {
          frequencyMap.set(startKey, startValue - 1);
        }
        startIndex++;
        currentArrayLength--;
        if (startKey === currentKey) {
          currentCount--;
        }
      }
      frequencyMap.set(currentKey, currentCount - 1);
    }

    frequencyMap.set(currentKey, currentCount);
    endIndex++;
    maxArrayLength = Math.max(maxArrayLength, currentArrayLength);
  }

  return maxArrayLength;
};
