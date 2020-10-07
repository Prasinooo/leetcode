/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 异或运算
 * a 异或 0 = a
 * a 异或 a = 0
 */

const nums = [2,2,1];
var singleNumber = function(nums) {
  let sum = 0;
  for (let n of nums) {
    sum ^= n;
  }
  return sum;
};
console.log(singleNumber(nums));