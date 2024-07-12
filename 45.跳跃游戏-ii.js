/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const n = nums.length;
  let dp = new Array(n).fill(n)
  dp[0] = 0;
  for(let i = 1; i < n; i++) {
    for(let j = 0; j < i; j++) {
      if(j + nums[j] >= i) {
        dp[i] = Math.min(dp[i], dp[j]+1)
      }
    }
  }
  return dp[n-1]
};
// jump([2,1,1,1,4])
// @lc code=end
