/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let ans = 1
  while(true) {
    if(ans * (ans + 1) > 2 * n) break
    ans++
  }
  return ans-1
};
// @lc code=end

