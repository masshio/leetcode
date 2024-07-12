/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
  let mod, yushu
  if(x > y) {
    mod = x % y
    yushu = y % mod
  } else {
    mod = y % x
    yushu = x % mod
  }
  if(yushu == 0) yushu = mod
  if(yushu > target || x + y < target || (x == y && target != x)) return false
  if(target % x == 0 && (target <= y || target == x)) return true
  if(target % y == 0 && (target <= x || target == y)) return true
  if((x+y) % target == 0 || target % mod == 0 || target % yushu == 0) return true
  return false
};
// @lc code=end

