/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let middle = ((right - left) >>> 1) + left;
    if(nums[middle] == target) {
      let currentLeft = middle
      let currentRight = middle
      while(nums[currentLeft]==target) currentLeft--
      while(nums[currentRight]==target) currentRight++
      return [currentLeft+1, currentRight-1]
    }
    nums[middle] < target ? left = middle + 1 : right = middle - 1;
  }
  return [-1, -1];
};
// @lc code=end

