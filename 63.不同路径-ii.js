/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  if(obstacleGrid[0][0] == 1 || obstacleGrid[m-1][n-1] == 1) return 0
  let flag = 1
  for(let i = 0; i < m; i++) {
    if(obstacleGrid[i][0] == 1) {
      obstacleGrid[i][0] = 0
      flag = 0
      continue;
    } 
    obstacleGrid[i][0] = flag
  }
  flag = 1
  for(let i = 1; i < n; i++) {
    if(obstacleGrid[0][i] == 1) {
      obstacleGrid[0][i] = 0
      flag = 0
      continue;
    }
    obstacleGrid[0][i] = flag
  }

  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if(obstacleGrid[i][j] == 1) {
        obstacleGrid[i][j] = 0
        continue
      }
      obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1]
    }
  }
  return obstacleGrid[m-1][n-1]
};

// @lc code=end

