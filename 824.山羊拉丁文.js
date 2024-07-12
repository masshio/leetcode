/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
  let res = ''
  const oia = ['a', 'e', 'i', 'o', 'u']
  sentence.split(' ').forEach((item, index) => {
    const head = item[0]
    const astr = 'ma' + 'a'.repeat(index+1) + ' '
    if(oia.includes(head.toLowerCase())) {
      res += item + astr
    } else {
      res += item.slice(1) + item.slice(0, 1) + astr
    }
  })
  return res.slice(0, -1)
};
// @lc code=end

