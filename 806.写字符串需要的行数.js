/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
  let length = 0
      let hang = 1
      for(let i = 0; i < s.length; i++) {
        const width =  widths[s[i].charCodeAt() - 'a'.charCodeAt()]
        if(width + length > 100) {
          hang++
          length = width
        } else length += width
      }
      return [hang, length]
};
// @lc code=end

