/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let n = nums.length
  let res = []
  function helper(i, temp) {
    res.push(temp)
    for(let j = i; j < n; j++) {
      helper(j+1, [...temp, nums[j]])
    }
  }
  helper(0, [])
  return res
};
// @lc code=end

