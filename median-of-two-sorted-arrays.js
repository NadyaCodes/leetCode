/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let newArray = [];
  let num2i = 0;

  nums1.forEach((num) => {
    while (nums2[num2i] < num) {
      newArray.push(nums2[num2i]);
      num2i++;
    }
    newArray.push(num);
  });

  while (num2i < nums2.length) {
    newArray.push(nums2[num2i]);
    num2i++;
  }
  let middleIndex = newArray.length / 2;

  if (!Number.isInteger(middleIndex)) {
    return newArray[middleIndex - 0.5];
  }
  return (newArray[middleIndex] + newArray[middleIndex - 1]) / 2;
};
