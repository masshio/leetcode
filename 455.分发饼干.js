/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let p1 = 0
  let p2 = 0
  let ans = 0
  g.sort((a,b) => a-b)
  s.sort((a,b) => a-b)
  while(p1 < g.length && p2 < s.length) {
    if(g[p1] <= s[p2]) {
      ans++
      p1++
      p2++
    } else p2++
  }
  return ans
};
// @lc code=end

