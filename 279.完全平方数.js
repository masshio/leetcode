/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = Array.from({length: n+1}, () => n)
      dp[0] = 0
      let count = 1
      while(count * count <= n) {
        let sqrt = count * count
        for(let i = sqrt; i <= n; i++) {
          dp[i] = Math.min(dp[i - sqrt]+1, dp[i])
        }
        count++
      }
      return dp[n]
};
// @lc code=end

