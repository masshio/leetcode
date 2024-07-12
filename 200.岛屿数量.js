/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  grid = grid.map(item => item.map(num => Number(num)))
  let dp = Array.from({length: grid.length}, _ => new Array(grid[0].length).fill(0))
  let res = 0;
  function helper(i, j) {
    dp[i][j] = -1
    if(grid[i-1]?.[j] && dp[i-1]?.[j] != -1) {
      dp[i-1][j] = -1
      helper(i-1, j)
    }
    if(grid[i+1]?.[j] && dp[i+1]?.[j] != -1) {
      dp[i+1][j] = -1
      helper(i+1, j)
    }
    if(grid[i][j+1] && dp[i][j+1] != -1) {
      dp[i][j+1] = -1
      helper(i, j+1)
    }
    if(grid[i][j-1] && dp[i][j-1] != -1) {
      dp[i][j-1] = -1
      helper(i, j-1)
    }
  }
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] == 1 && dp[i][j] != -1) {
        res += 1
        helper(i, j)
      }
    }
  }
  return res
};
// @lc code=end

