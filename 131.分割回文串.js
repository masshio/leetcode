/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const res = []
  function isReverse(s) {
    let l = 0
    let r = s.length - 1
    while(l < r) {
      if(s[l] != s[r]) return false
      l++
      r--
    }
    return true
  }
  function helper(str, arr) {
    const length = str.length
    for(let i = 0; i < length; i++) {
      if(isReverse(str.slice(0, i+1))) {
        if(i == length - 1) {
          res.push([...arr, str.slice(0, i+1)])
          return;
        }
        helper(str.slice(i+1), [...arr, str.slice(0, i+1)])
      }
    }
  }
  helper(s, [])
  return res
};
// @lc code=end

