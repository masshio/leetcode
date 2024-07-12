/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = [0, 0]
      let index = -1
      for(let i = 0; i < nums.length; i++) {
        if(nums[i] > max[0]) {
          max.unshift(nums[i])
          index = i
          continue
        }
        if(nums[i] > max[1]) {
          max[1] = nums[i]
        }
      }
      return max[0] >= max[1] * 2 ? index : -1
};
// @lc code=end

