/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
  let res = []
  for(let i = 0; i < expression.length; i++) {
    if(isNaN(expression[i])) {
      const left = diffWaysToCompute(expression.slice(0, i))
      const right = diffWaysToCompute(expression.slice(i+1))
      for(let ln of left) {
        for(let rn of right) {
          const l = Number(ln)
          const r = Number(rn)
          switch(expression[i]) {
            case '+':
              res.push(l+r)
              break;
            case '-': 
              res.push(l-r)
              break;
            case '*': 
              res.push(l*r)
              break;
          }
        }
      }
    }
  }
  if(res.length) return res
  return [expression]
};
// @lc code=end

