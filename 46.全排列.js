/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ans = []
  function helper(arr, cur) {
    if(!arr.length) return ans.push(cur)
    for(let i = 0; i < arr.length; i++) {
      helper(arr.filter(item => item != arr[i]), [...cur, arr[i]])
    }
  }
  helper(nums, [])
  return ans
};
// @lc code=end

