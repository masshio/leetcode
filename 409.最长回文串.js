/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let obj = {}
  for(let char of s) {
    if(obj[char]) {
      obj[char] += 1
    } else {
      obj[char] = 1
    }
  }
  let nums = Object.values(obj).filter(item => item%2 == 0).reduce((a, b) => a+b, 0)
  let nums1 = Object.values(obj).filter(item => item%2 == 1)?.sort((a,b) => b-a)[0] || 0
  return nums + nums1
};
// @lc code=end

