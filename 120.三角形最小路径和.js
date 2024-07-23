/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const dp = Array.from({length: triangle.length}, (item, index) => new Array(index+1).fill(0))
  dp[0][0] = triangle[0][0]
  for(let i = 1; i < dp.length; i++) {
    for(let j = 0; j < dp[i].length; j++) {
      dp[i][j] = (j == 0 ? dp[i-1][j] : j == dp[i].length - 1 ? dp[i-1][j-1] : Math.min(dp[i-1][j-1], dp[i-1][j])) + triangle[i][j]
    }
  }
  return Math.min(...dp[dp.length - 1])
};
// @lc code=end

