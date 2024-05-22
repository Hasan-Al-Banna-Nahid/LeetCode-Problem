/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[k] + nums[i] === target) {
        return [i, k];
      }
    }
  }
  console.log(result);
};
console.log(twoSum([2, 7, 11, 15], 9));
