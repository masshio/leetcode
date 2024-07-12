/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const n = cost.length
  for(let i = 2; i < cost.length; i++) {
    cost[i] = Math.min(cost[i - 1], cost[i - 2]) + cost[i]
  }
  return Math.min(cost[n - 1], cost[n - 2])
};
// @lc code=end

