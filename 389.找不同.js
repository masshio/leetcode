/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  t = t.split('')
  for(let char of s) {
    let index = t.indexOf(char)
    t[index] = ''
  }
  return t.filter(Boolean)[0]
};
// @lc code=end

