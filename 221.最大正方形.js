/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  function getRow(row, col, length) {
    let ans = true
    for(let i = 0; i < length; i++) {
      ans = ans && +matrix[row + length - 1]?.[col + i]
    }
    for(let j = 0; j < length - 1; j++) {
      ans = ans && +matrix[row + j]?.[col + length - 1]
    }
    return ans
  }
  let max = 0
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] == 1) {
        max = Math.max(max, 1)
      }
      let length = 2
      while(!!getRow(i, j, length) && matrix[i][j] == 1) {
        max = Math.max(length * length, max)
        length++
      }
    }
  }
  return max
};
// @lc code=end

