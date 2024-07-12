/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let numSet = new Set()
      for(let i = 0; i < nums.length; i++) {
        const beforeSize = numSet.size
        numSet.add(nums[i])
        if(numSet.size == beforeSize) return nums[i]
      }
};
// @lc code=end

