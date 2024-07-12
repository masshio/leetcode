/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 在长度 2N 的数组中找出重复 N 次的元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  let nMap = new Map()
  for(let i = 0; i < nums.length; i++) {
    const val = nMap.get(nums[i])
    if(val) {
      return nums[i]
    } else {
      nMap.set(nums[i], 1)
    }
  }
  return false
};
// @lc code=end

