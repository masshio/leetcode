/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if(nums.length == 1) return 1
  let left = 0
  let right = 1
  let max = 0
  while(right < nums.length) {
    if(nums[right] <= nums[right-1]) {
      max = Math.max(max, right-left)
      left = right
    }
    right++
  }
  max = Math.max(max, right-left)
  return max
};
// @lc code=end

