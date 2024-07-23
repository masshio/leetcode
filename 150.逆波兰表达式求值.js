/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  if(tokens.length == 1) return tokens[0]
  let res
  let nums = []
  for(let i = 0; i < tokens.length; i++) {
    if(isNaN(+tokens[i])) {
      let right = nums.pop()
      let left = nums.pop()
      switch(tokens[i]) {
        case '+':
          res = left + right
          break
        case '-':
          res = left - right
          break
        case '*':
          res = left * right
          break
        case '/':
          res = parseInt(left / right)
          break
        default: break
      }
      nums.push(res)
    } else {
      nums.push(+tokens[i])
    }
  }
  return res
};
// @lc code=end

