/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let row = 0
  for(let i = 0; i < matrix.length; i++) {
    if(matrix[i][0] < target) {
      row = i
    } else if(matrix[i][0] > target) {
      break;
    } else return true
  }
  for(let j = 0; j < matrix[0].length; j++) {
    if(matrix[row][j] == target) {
      return true
    } else if(matrix[row][j] > target) return false
  }
  return false
};
// @lc code=end

