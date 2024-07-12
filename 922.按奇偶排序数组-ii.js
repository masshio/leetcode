/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  let res = Array.from({length: nums.length})
  let even = 0
  let odd = 1
  nums.forEach(item => {
    if(item % 2 == 0) {
      res[even] = item
      even += 2
    } else {
      res[odd] = item
      odd += 2
    }
  })
  return res
};
// @lc code=end

