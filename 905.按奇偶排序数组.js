/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  let res = []
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 == 0) {
      res.unshift(nums[i])
    } else {
      res.push(nums[i])
    }
  }
  return res
};
// @lc code=end

