/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const result = [];
    
  for(let i = left; i <= right; i++){
    String(i).split('').every(number => +number && !(i % number)) && result.push(i);
  }
  
  return result;
};
// @lc code=end

