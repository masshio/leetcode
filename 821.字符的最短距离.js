/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  let arr = []
  for(let i = 0; i < s.length; i++) {
    if(s[i] == c) {
      arr.push(i)
    }
  }
  let res = []
  for(let i = 0; i < s.length; i++) {
    let min = s.length
    arr.forEach(item => {
      min = Math.min(min, Math.abs(item - i))
    })
    res.push(min)
  }
  return res
};
// @lc code=end

