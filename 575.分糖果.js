/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  let size = new Set(candyType).size
  return size < candyType.length / 2 ? size : candyType.length / 2
};
// @lc code=end

