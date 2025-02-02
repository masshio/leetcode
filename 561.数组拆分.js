/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  let ans = 0
  nums.sort((a,b) => a-b)
  for(let i = 0; i < nums.length; i+=2) {
    ans += nums[i]
  }
  return ans
};
// @lc code=end

