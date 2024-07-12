/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  let sorted = [...score].sort((a,b) => b - a)
  let obj = {}
  sorted.map((item, index) => {
    obj[item] = index == 0 ? 'Gold Medal' :
    index == 1 ? 'Silver Medal' :
    index == 2 ? 'Bronze Medal' : index + 1 +''
  })
  score = score.map(item => {
    return obj[item]
  })
  return score
};
// @lc code=end

