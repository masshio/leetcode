/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let a = 0, b = 0;
  nums.map(num => {
    b = ~a & (b ^ num);
    a = ~b & (a ^ num);
  })
  return b;
};
// @lc code=end

