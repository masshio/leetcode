/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if(arr.length < 3) return false
  let flag = false
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] == arr[i-1]) return false
    if(!flag) {
      if(arr[i] < arr[i-1]) {
        if(i == 1) return false
        flag = true
      }
    } else {
      if(arr[i] >= arr[i-1]) return false
    }
  }
  return flag
};
// @lc code=end

