/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0, right = nums.length-1, mid;
    
    while(left < right) {
      mid = Math.floor((right+left)/2);
      if(nums[mid] > nums[mid+1]) right = mid;
      else left = mid+1;
    }
    return left;

};
// @lc code=end

