/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const sArr = s.split(' ')
  const pArr = pattern.split('')
  if(sArr.length != pArr.length) return false
  let map = new Map()
  for(let i = 0; i < sArr.length; i++) {
    if(map.has(sArr[i])) {
      if(pArr[i] != map.get(sArr[i])) return false
    } else {
      if([...map.values()].indexOf(pArr[i]) != -1) return false
      map.set(sArr[i], pArr[i])
    }
  }
  return true
};
// @lc code=end

