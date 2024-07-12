/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  if(s.length != goal.length) return false
  let left = []
  let right = []
  for(let i = 0; i < s.length; i++) {
    if(s[i] != goal[i]) {
      if(!left.length) {
        left = [s[i], goal[i]]
      } else if(!right.length) {
        right = [goal[i], s[i]]
      } else {
        return false
      }
      
    }
  }
  if(!left.length && !right.length) {
    return s.length != new Set(s.split('')).size
  }
  return left[0] == right[0] && left[1] == right[1]
};
// @lc code=end

