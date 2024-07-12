/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0
  let right = 0
  let ans = nums.length + 1
  let total = 0
  while(right <= nums.length) {
    if(total >= target) {
      ans = Math.min(ans, right - left)
      total -= nums[left]
      left++
    } else if(total < target) {
      total += nums[right]
      right++
    }
  }
  return ans == nums.length + 1 ? 0 : ans
};
// @lc code=end

