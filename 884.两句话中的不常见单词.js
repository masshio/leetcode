/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  let arr = [...s1.split(' '), ...s2.split(' ')]
  let res = []
  for(let i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) {
      continue
    } else {
      res.push(arr[i])
    }
  }
  return res
};
// @lc code=end

