/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
  let str = n.toString(2)
  let max = 0
  let left = 0
  let right = 0
  while(right <= str.length && left <= str.length) {
    if(str[left] != '1') {
      left++
      right++
      continue
    }
    if(str[right] == '1' && left != right) {
      max = Math.max(right - left, max)
      left = right
    }
    right++
  }
  return max
};
// @lc code=end

