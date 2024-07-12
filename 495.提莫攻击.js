/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let ans = 0
  for(let i = 1; i < timeSeries.length; i++) {
    if(timeSeries[i] - timeSeries[i-1] < duration) {
      ans += timeSeries[i] - timeSeries[i-1]
    } else {
      ans += duration
    }
  }
  return ans+duration
};
// @lc code=end

