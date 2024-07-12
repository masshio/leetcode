/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const length = nums.length
  let arr = Array.from({length: length+1}, (_, index) => index)
  let numberSet = new Set([...nums, ...arr])
  return [...numberSet][0]
};
// @lc code=end

