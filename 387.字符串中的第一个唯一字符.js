/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for(let char of s) {
    if(s.indexOf(char) == s.lastIndexOf(char)) return s.indexOf(char)
  }
  return -1
};
// @lc code=end

