/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map();
  strs.map((item, index) => {
    item = item.split('').sort().join('')
    let list = map.get(item) ? map.get(item) : []
    list.push(strs[index])
    map.set(item, list)
  })
  return [...map.values()]
};
// @lc code=end

