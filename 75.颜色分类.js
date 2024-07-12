/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  function swap(arr, left, right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
  }
  let left = 0;
  let right = nums.length - 1
  for(let i = 0; i < nums.length;) {
    if(nums[i] == 0) {
      if(left < i) {
        swap(nums, left, i)
        left++
      } else i++
    } else if(nums[i] == 2) {
      if(right > i) {
        swap(nums, right, i)
        right--
      } else break
    } else i++
    
  }
};
// @lc code=end

