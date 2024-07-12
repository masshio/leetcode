/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let np = 0
  let tp = 0
  while(np < name.length) {
    if(name[np] == typed[tp]) {
      np++
      tp++
      continue
    } else if(typed[tp - 1] && typed[tp] == typed[tp - 1]) {
      tp++
      continue
    } else {
      return false
    }
  }
  while(tp < typed.length) {
    if(typed[tp] != typed[tp - 1]) return false
    tp++
  }
  return true
};
// @lc code=end

