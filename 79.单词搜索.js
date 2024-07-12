/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let start = word[0]
  let n = word.length
  let dp = Array.from({length: board.length}, _ => new Array(board[0].length).fill(1))
  let flag = false
  board.map((item,index) => {
    item.map((char, y) => {
      if(char == start && !flag) {
        findWay(1, index, y)
      }
    })
  })

  function findWay(i, x, y) {
    if(i == n) return flag = true
    dp[x][y] = 0
    let char = word[i]
    if(board[x-1]?.[y] == char) {
      dp[x-1][y] && findWay(i+1, x-1, y)
    }
    if(board[x+1]?.[y] == char) {
      dp[x+1][y] && findWay(i+1, x+1, y)
    }
    if(board[x][y-1] == char) {
      dp[x][y-1] && findWay(i+1, x, y-1)
    }
    if(board[x][y+1] == char) {
      dp[x][y+1] && findWay(i+1, x, y+1)
    }
    dp[x][y] = 1
  }
  return flag
};
// @lc code=end

