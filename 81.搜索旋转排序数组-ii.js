/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  if(target > nums[0]) {
    for(let i = 1; i < nums.length; i++) {
      if(target == nums[i]) return true
    }
    return false
  } else if(target < nums[0]) {
    for(let i = nums.length - 1; i >= 0; i--) {
      if(target == nums[i]) return true
    }
    return false
  }
  return true
};
// @lc code=end

