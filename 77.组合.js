/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if(n == 1) return [[1]]
  let arr = Array.from({length: n}, (_, index) => index+1)
  let res = []
  function helper(j, temp) {
    if(temp.length == k) return res.push(temp)
    for(let i = j; i < n; i++) {
      helper(i+1, [...temp, arr[i]])
    }
  }
  helper(0, [])
  return res
};
// @lc code=end

