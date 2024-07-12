/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  paragraph = paragraph.replace(/[^\s|^a-zA-Z|^,]/g, '')
  const words = paragraph.split(' ').map(item => item.split(',').filter(Boolean)).flat()
  const wordMap = new Map()
  words.forEach(item => {
    const key = item.toLowerCase()
    const val = wordMap.get(key)
    if(val) {
      wordMap.set(key, val + 1)
    } else {
      wordMap.set(key, 1)
    }
  })
  let max = 0
  let res = ''
  for(let [key, value] of wordMap) {
    if(value > max && !banned.includes(key)) {
      res = key
      max = value
    }
  }
  return res
};
// @lc code=end

