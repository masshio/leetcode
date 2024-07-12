/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if(nums.length <= 1) return nums.map(item => item+'')
  const res = []
  let prev = 0
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] > nums[i-1] + 1) {
      if(i > prev + 1) {
        res.push(`${nums[prev]}->${nums[i-1]}`)
        prev = i
      } else {
        res.push(`${nums[prev]}`)
        prev = i
      }
      if(i == nums.length - 1) {
        res.push(`${nums[i]}`)
      }
    } else if(i == nums.length - 1) {
      res.push(`${nums[prev]}->${nums[i]}`)
    }
  }
  return res
};
// @lc code=end

