/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let n = nums.length
  for(let i = 2; i < n; i++) {
    nums[i] += Math.max(nums[i - 2], nums[i - 3] || 0)
  }
  return Math.max(nums[n-1], nums[n-2] || 0)
};
// @lc code=end

