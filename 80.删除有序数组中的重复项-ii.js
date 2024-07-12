/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let start = nums[0]
  let count = 1
  let i = 1
  while(i < nums.length) {
    if(nums[i] == start) {
      if(count == 2) {
        nums.splice(i, 1)
        continue
      } else {
        i++
        count++
      }
    } else {
      start = nums[i]
      count = 1
      i++
    }
  }
  return nums.length
};
// @lc code=end

