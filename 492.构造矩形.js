/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  for(let i = Math.ceil(Math.sqrt(area)); i <= area; i++) {
    if(area / i == parseInt(area / i)) return [i, area / i]
  }
};
// @lc code=end

