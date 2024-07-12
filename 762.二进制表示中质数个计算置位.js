/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
  let set = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
  let countPrime = 0;
  
  for (let i = left; i <= right; i++) {
    if (set.has(i.toString(2).replace(/0/g, '').length)) countPrime++;
  }

  return countPrime;
};
// @lc code=end

