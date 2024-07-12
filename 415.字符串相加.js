/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let p1 = num1.length - 1
  let p2 = num2.length - 1
  let bit = 0
  let ans = ''
  while(p1 >=0 || p2 >= 0) {
    let n1 = p1 >= 0 ? + num1[p1] : 0
    let n2 = p2 >= 0 ? + num2[p2] : 0
    let temp = n1 + n2 + bit
    bit = parseInt(temp / 10)
    ans = (temp % 10) + ans
    p1--
    p2--
  }
  return bit == 0 ? ans : bit+ans
};
// @lc code=end

