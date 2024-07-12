/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  if(moves.length % 2 != 0) return false
  const moveMap = {
    L: 0,
    R: 0,
    U: 0,
    D: 0
  }
  moves.split('').forEach(item => {
    moveMap[item]++
  })
  return moveMap.L == moveMap.R && moveMap.U == moveMap.D
};
// @lc code=end

