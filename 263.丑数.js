/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
  if(n <= 0) return false

  while (n != 1) {
      if (n % 2 === 0) {
          n /= 2
      } else if (n % 3 === 0) {
          n /= 3
      } else if (n % 5 === 0) {
          n /= 5
      } else {
          return false
      }
  }

  return true
};
// @lc code=end

