/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length == 1) return nums[0]
  function helper(index, start) {
    if(index >= nums.length) return 0
    if(start == 0 && index == nums.length - 1) return nums[start] < nums[index] ? nums[index] - nums[start] : 0
    return Math.max(nums[index] + helper(index+2, start), nums[index] + helper(index+3, start))
  }
  return Math.max(helper(0, 0), helper(1, 1))
};
// @lc code=end

