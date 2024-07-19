/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  const x = matrix[0].length + 1
  const y = matrix.length + 1
  this.dp = Array.from({ length: y }, () => new Array(x).fill(0))
  for(let i = y - 2; i >= 0; i--) {
    for(let j = x - 2; j >= 0; j--) {
      this.dp[i][j] = matrix[i][j] + this.dp[i+1][j] + this.dp[i][j+1] - this.dp[i+1][j+1]
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.dp[row1][col1] - this.dp[row1][col2+1] - this.dp[row2+1][col1] + this.dp[row2+1][col2+1]
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

