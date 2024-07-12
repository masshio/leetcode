/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  function zero(m, n) {
    for(let i = 0; i < matrix.length; i++) {
      matrix[i][n] = 0
    }
    for(let j = 0; j < matrix[0].length; j++) {
      matrix[m][j] = 0
    }
  }
  const stash = []
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] == 0) {
        stash.push([i,j])
      }
    }
  }
  stash.forEach(item => {
    zero(...item)
  })
};
// @lc code=end

