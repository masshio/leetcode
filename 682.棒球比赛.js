/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  const arr = []
      operations.forEach(item => {
        switch(item) {
          case "C": 
            arr.pop()
            break
          case "D": 
            arr.push(arr[arr.length - 1] * 2)
            break
          case "+": 
            arr.push(arr[arr.length - 1] + arr[arr.length - 2])
            break
          default:
            arr.push(+item)
        }
      })
      return arr.reduce((a,b) => Number(a) + Number(b), 0)
};
// @lc code=end

