/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let left = 0
  let right = 1
  let res = 0
  while(left < right && right < prices.length) {
    if(prices[right] < prices[left]) {
      left = right
    }
    res = Math.max(res, prices[right] - prices[left])
    right++
  }
  return res
};
// @lc code=end

