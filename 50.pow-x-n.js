/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let res = x
  let pow = 1
  let obj = {1: x}
  let flag = n < 0 ? true : false
  n = Math.abs(n)
  while(true) {
    if(pow < n) {
      res *= res
      pow += pow
      obj[pow] = res
    } else if(pow > n) {
      let num = pow - n
      if(num == 1) {
        pow--
        res /= x
      } else {
        let list = [...Object.keys(obj), num].sort((a,b) => parseInt(a) - parseInt(b))
        let key = list[list.indexOf(num) - 1]
        pow -= key
        res /= obj[key]
      }
    } else break
  }
  return flag ? 1 / res : res
};
// @lc code=end

