/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  function helper(word, chars) {
    for(let i = 0; i < chars.length; i++) {
      const index = word.indexOf(chars[i])
      if(index == -1) {
        return false
      }
      word = word.slice(0, index) + word.slice(index+1)
    }
    return true
  }
  const charArr = []
  for(let i = 0; i < licensePlate.length; i++) {
    if(/[a-zA-Z]/.test(licensePlate[i])) {
      charArr.push(licensePlate[i].toLowerCase())
    }
  }
  let minLength = Infinity
  let res = ''
  for(let i = 0; i < words.length; i++) {
    if(words[i].length >= minLength) {
      continue
    }
    if(helper(words[i], charArr)) {
      minLength = words[i].length
      res = words[i]
    }
  }
  return res
};
// @lc code=end

