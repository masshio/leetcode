/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  for(let i = 1; i <= s.length >> 1; i++) {
    let clip = s.slice(0, i)
    if(s.split(clip).filter(Boolean).length == 0) return true
  }
  return false
};
// @lc code=end

