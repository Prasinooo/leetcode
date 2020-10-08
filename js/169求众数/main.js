/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const count = {};
    for (let n of nums) {
        if (typeof(count[n]) === 'undefined') {
            count[n] = 1;
        } else {
            count[n]++;
        }
        if (count[n] > nums.length / 2) {
            return n;
        }
    }
};