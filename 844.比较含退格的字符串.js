/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let sarr = []
  let tarr = []
  for(let i = 0; i < s.length; i++) {
    if(s[i] == '#') {
      sarr.pop()
    } else {
      sarr.push(s[i])
    }
  }
  for(let i = 0; i < t.length; i++) {
    if(t[i] == '#') {
      tarr.pop()
    } else {
      tarr.push(t[i])
    }
  }
  return tarr.join('') == sarr.join('')
};
// @lc code=end

