/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const arr = [1]
      let count = 1
      let i2 = i3 = i5 = 0
      let minNum = 1
      while(count < n) {
        let c2 = arr[i2] * 2
        let c3 = arr[i3] * 3
        let c5 = arr[i5] * 5
        minNum = Math.min(Math.min(c2, c3), c5)
        arr.push(minNum)
        if(minNum == c2) {
          i2++
        } else if(minNum == c3) {
          i3++
        } else if(minNum == c5) {
          i5++
        }
        count++
      }
      return minNum
};
// @lc code=end

