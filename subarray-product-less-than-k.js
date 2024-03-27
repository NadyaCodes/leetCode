var numSubarrayProductLessThanK = function (nums, k) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    let product = nums[i];

    if (product < k) {
      counter++;
      let j = i + 1;
      while (j < nums.length && product * nums[j] < k) {
        product *= nums[j];
        counter++;
        j++;
      }
    }
  }
  return counter;
};
