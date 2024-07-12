/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
  if(nums.length <= 1) return 0
  let min = nums[0]
  let max = nums[0]
  nums.forEach((item) => {
    if(item > max) {
      max = item
    }
    if(item < min) {
      min = item
    }
  })
  return (max - min > 2 * k) ? (max - min - 2 * k) : 0
};
// @lc code=end

