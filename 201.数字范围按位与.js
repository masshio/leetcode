/*
 * @lc app=leetcode.cn id=201 lang=javascript
 *
 * [201] 数字范围按位与
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
  if(left == right) return left
  if(left <= 1) return 0
  let nLeft = parseInt(Math.log2(left))
  let nRight = parseInt(Math.log2(right))
  if(nRight > nLeft) return 0
  let temp = left - Math.pow(2, nLeft)
  let nTemp = parseInt(Math.log2(temp))
  if(temp == 0 || (left % 2 == 0 && right - left <= nTemp)) return left
  let yushu = temp - Math.pow(2, nTemp)
  if(right >= left + Math.pow(2, nTemp) - yushu) return Math.pow(2, nLeft)
  else return Math.pow(2, nLeft) + Math.pow(2, nTemp)
};
// @lc code=end

