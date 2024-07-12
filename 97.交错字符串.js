/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if(s1.length + s2.length != s3.length) return false
  let dp = {}
  function helper(p1, p2, p3) {
    if(p3 == s3.length) return true
    if(dp[p1]?.includes(p2)) return false
    if(s1[p1] == s3[p3] && s2[p2] == s3[p3]) {
      return helper(p1+1, p2, p3+1) || helper(p1, p2+1, p3+1)
    } else if(s1[p1] == s3[p3]) {
      return helper(p1+1, p2, p3+1)
    } else if(s2[p2] == s3[p3]) {
      return helper(p1, p2+1, p3+1)
    } else {
      dp[p1] = dp[p1] ? [...dp[p1], p2] : [p2]
      return false
    }
  }
  return helper(0, 0, 0)
};
// @lc code=end

