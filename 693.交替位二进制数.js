/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let remain = n
  let mod = -1
  while(remain > 0) {
    if(mod == remain % 2) {
      return false
    }
    mod = remain % 2
    remain = parseInt(remain / 2)
  }
  return true
};
// @lc code=end

