/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  words.sort((a, b) => b.length - a.length)
      let best = 0
      let bitSets = new Uint32Array(words.length)
      for(let i = 0; i < words.length; i++) {
        const word = words[i]
        const wlen = word.length
        bitset = 0
        if(wlen * words[0].length < best) {
          return best
        }
        for(let j = 0; j < wlen; j++) {
          bitset |= 1 << (word[j].charCodeAt() - 97)
        }
        for(let k = 0; k < i; k++) {
          if((bitSets[k] & bitset) == 0) {
            best = Math.max(best, wlen * words[k].length)
          }
        }
        bitSets[i] = bitset
      }
      return best
};
// @lc code=end

