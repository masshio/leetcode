/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  if(nums.length <= 1) return true
  let flag = 0
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] == nums[i-1]) continue
    const cflag = nums[i] > nums[i-1] ? 1 : 2
    if(!flag) {
      flag = cflag
    } else {
      if(cflag != flag) return false
    }
  }
  return true
};
// @lc code=end

