/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1 比特与 2 比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let res = false
  for(let i = 0; i < bits.length; i++) {
    if(bits[i] == 1) {
      i++
      continue
    }
    if(i == bits.length - 1) {
      res = true
    }
  }
  return res
};
// @lc code=end

