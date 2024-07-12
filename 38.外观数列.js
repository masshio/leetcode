/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  function count(pre, times) {
    if(times == n) return pre
    let str = '';
    let left = 0;
    let right = 0;
    while(right < pre.length) {
      if(pre[left] != pre[right]){
        str += `${right - left}${pre[left]}`
        left = right
      }
      if(right == pre.length - 1) {
        if(left != right) {
          str += `${right - left + 1}${pre[left]}`;
        } else {
          str +=`1${pre[right]}`
        }
        break;
      }
      right++
    }
    return count(str, times+1)
  }
  return count('1', 1)
};
// @lc code=end

