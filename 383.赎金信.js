/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  magazine = magazine.split('')
  for(let s of ransomNote) {
    let index = magazine.indexOf(s)
    if(index == -1) return false
    magazine[index] = ''
  }
  return true
};
// @lc code=end

