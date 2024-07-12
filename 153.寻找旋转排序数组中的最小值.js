/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0
  let right = nums.length - 1
  if(nums[0] <= nums[right]) return nums[0]
  while(left < right) {
    let mid = ((right - left) >> 1) + left
    if(nums[mid] > nums[left]) {
      left = mid
    }
    if(nums[mid] < nums[right]) {
      right = mid
    }
    if(nums[mid] == nums[right]) {
      return nums[mid]
    }
  }
};
findMin([2,1])
// @lc code=end

