/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let n = nums.length
  let dp = new Array(n).fill(false)
  dp[0] = true
  for(let i = 1; i < n; i++) {
    for(let j = i-1; j >= 0; j--) {
      if(j + nums[j] >= i && dp[j]) {
        dp[i] = true
        break;
      }
    }
  }
  return dp[n-1]
};
// @lc code=end

