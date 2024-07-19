/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const m = board.length
  const n = board[0].length
  const border = []
  function helper(i, j) {
    if(board[i-1]?.[j] == 'Z') {
      board[i-1][j] = 'O'
      helper(i-1, j)
    }
    if(board[i+1]?.[j] == 'Z') {
      board[i+1][j] = 'O'
      helper(i+1, j)
    }
    if(board[i]?.[j-1] == 'Z') {
      board[i][j-1] = 'O'
      helper(i, j-1)
    }
    if(board[i]?.[j+1] == 'Z') {
      board[i][j+1] = 'O'
      helper(i, j+1)
    }
  }
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if((i == 0 || j == 0 || i == m-1 || j == n-1) && board[i][j] == 'O') {
        border.push([i, j])
        continue
      }
      if((i != 0 || j != 0 || i != m-1 || j != n-1) && board[i][j] == 'O') {
        board[i][j] = 'Z'
      }
    }
  }
  border.forEach(([i, j]) => {
    helper(i, j)
  })
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(board[i][j] == 'Z') {
        board[i][j] = 'X'
      }
    }
  }
};
// @lc code=end

