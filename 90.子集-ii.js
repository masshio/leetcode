/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort()
  let res = []
  function helper(i, temp) {
    res.push(temp)
    for(let j = i; j < nums.length; j++) {
      if(nums[j-1] && nums[j] == nums[j-1] && j > i) continue
      helper(j+1, [...temp, nums[j]])
    }
  }
  helper(0, [])
  return res
};
// @lc code=end

