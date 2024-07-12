/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let max = -Infinity
  for(let i = 0; i <= nums.length - k; i++) {
    if(i == 0 || nums[i-1] < nums[i+k-1]) {
      max = Math.max(max, nums.slice(i, i+k).reduce((a,b) => a+b, 0))
    }
  }
  return max / k
};
// @lc code=end

