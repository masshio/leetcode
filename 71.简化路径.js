/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = path.split('/').filter(Boolean)
  const ans = []
  stack.forEach(item => {
    if(item == '..') {
      ans.pop()
    } else if(item == '.') {
    } else {
      ans.push(item)
    }
  })
  if(!ans.length) return '/'
  return `/${ans.join('/')}`
};
// @lc code=end

