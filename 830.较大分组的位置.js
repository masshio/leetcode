/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  let left = 0
  let right = 1
  let res = []
  while(right < s.length) {
    if(s[left] == s[right] && right == s.length - 1 && right - left > 1) {
      res.push([left, right])
    }
    if(s[left] != s[right]) {
      if(right - left > 2) {
        res.push([left, right - 1])
      }
      left = right
    }
    right++
  }
  return res
};
// @lc code=end

