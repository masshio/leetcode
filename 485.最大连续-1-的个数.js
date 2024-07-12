/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0
  let p1 = 0
  let p2 = 0
  while(p2 < nums.length && p1 < nums.length) {
    while(nums[p1] == 0) p1++
    p2 = p1
    while(nums[p2] == 1) p2++
    max = Math.max(p2 - p1, max)
    p1 = p2
  }
  return max
};
// @lc code=end

