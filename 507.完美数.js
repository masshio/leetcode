/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if(num < 3) return false
      let ans = 0
      for(let i = Math.ceil(Math.sqrt(num)); i < num; i++) {
        if(num / i == parseInt(num / i)) ans += i + num / i
      }
      return ans+1 == num
};
// @lc code=end

