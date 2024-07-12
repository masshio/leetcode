/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let positive = false
  if((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
    positive = true
  }
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  if(divisor > dividend) return 0
  let left = 0
  let right = dividend
  if(divisor == right) return positive ? 1 : -1;
  while(left <= right) {
    let middle = ((right - left) >>> 1) + left
    if(middle * divisor < dividend) {
      left = middle + 1
    } else if(middle * divisor > dividend) {
      right = middle - 1
    } else {
      left = middle + 1;
      break;
    }
  }
  const res = positive ? left - 1 : 1 - left
  if(res > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  } else if(res < 0-Math.pow(2, 31)) {
    return 0-Math.pow(2, 31)
  } else return res
};
// console.log(divide(1026117192, -874002063));
// @lc code=end

