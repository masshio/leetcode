/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean} 
 */
var hasGroupsSizeX = function(deck) {
  const rec = new Map()
  deck.forEach(val => {
      rec.set(val, (rec.get(val) ?? 0) + 1)
  })
  const vals = [...rec.values()]
  const largestCommonDivider = (a, b) => {
      let num1 = a, num2 = b
      while (num2 !== 0) {
        const div = num1 % num2
        num1 = num2
        num2 = div
      }
      return num1
  }
  return vals.reduce((cd, val) => largestCommonDivider(cd, val), vals[0]) >= 2
};
// @lc code=end

