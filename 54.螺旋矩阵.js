/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let width = matrix[0].length
  let height = matrix.length
  if(width == 1 || height == 1) return matrix.flat()
  let dp = Array.from({length: height}, () => new Array(width).fill(0))
  let x = y = 0;
  let mode = 1
  let res = []
  for(let i = 0; i < width * height; i++) {
    res.push(matrix[x][y])
    dp[x][y] = 1
    switch(mode) {
      case 1: 
        if(y == width - 1 || dp[x][y+1]) {
          if(dp[x+1][y]) return res
          mode = 2
          x++
        } else {
          y++
        }
        break;
      case 2: 
        if(x == height - 1 || dp[x+1][y]) {
          if(dp[x][y-1]) return res
          mode = 3
          y--
        } else {
          x++
        }
        break;
      case 3:
        if(y == 0 || dp[x][y-1]) {
          if(dp[x-1][y]) return res
          mode = 4
          x--
        } else {
          y--
        }
        break;
      case 4: 
        if(dp[x-1][y]) {
          if(dp[x][y+1]) return res
          mode = 1
          y++
        } else {
          x--
        }
        break;
      default: 
    }
  }
};
// @lc code=end

