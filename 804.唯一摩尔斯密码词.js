/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const mos = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const wordSet = new Set()
  words.forEach((item, index) => {
    let str = ''
    for(let i = 0; i < item.length; i++) {
      str += mos[item[i].charCodeAt() - 'a'.charCodeAt()]
    }
    wordSet.add(str)
  })
  return wordSet.size
};
// @lc code=end

