/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if(n == 1) return [[1]]
  let res = Array.from({length: n}, (_ => new Array(n).fill(0)))
  let mode = 1
  let x = y = 0;
  for(let i = 1; i <= n * n; i++) {
    res[x][y] = i
    switch(mode) {
      case 1:
        if(y == n-1 || res[x][y+1]) {
          if(res[x+1][y]) return res
          mode = 2
          x++
        } else {
          y++
        }
        break
      case 2: 
        if(x == n-1 || res[x+1][y]) {
          if(res[x][y-1]) return res
          mode = 3
          y--
        } else {
          x++
        }
        break
      case 3: 
        if(y == 0 || res[x][y-1]) {
          if(res[x-1][y]) return res
          mode = 4
          x--
        } else {
          y--
        }
        break
      case 4: 
        if(x == 0 || res[x-1][y]) {
          if(res[x][y+1]) return res
          mode = 1
          y++
        } else {
          x--
        }
        break
      default: break
    }
  }
};

generateMatrix(3)
// @lc code=end