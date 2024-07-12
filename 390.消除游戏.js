/*
 * @lc app=leetcode.cn id=390 lang=javascript
 *
 * [390] 消除游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  if(n == 1) return 1
      let arr = Array.from({length: parseInt(n / 2)}, (_, index) => 2 * (index + 1))
      let flag = true
      while(arr.length > 1) {
        if(flag) {
          if(arr.length % 2) {
            arr = arr.filter((item, index) => index % 2 == 1)
          } else {
            arr = arr.filter((item, index) => index % 2 == 0)
          }
        } else {
          arr = arr.filter((item, index) => index % 2 == 1)
        }
        flag = !flag
      }
      return arr[0]
};
// @lc code=end

