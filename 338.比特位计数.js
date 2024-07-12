/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  function getOneNum(i) {
    let res = 0
    while(i > 0) {
      res += i % 2
      i = i >> 1
    }
    return res
  }
  let result = []
    for(let i = 0; i <= n; i++) {
      result.push(getOneNum(i))
    }
    return result
};
// @lc code=end

