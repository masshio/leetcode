/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const result = []
      let prefix = 1
      for (let i=0; i<nums.length; i++) {
          result[i] = prefix
          prefix *= nums[i]
      }
      
      let suffix = 1
      
      for (let i=nums.length - 1; i>=0; i--) {
          result[i] *= suffix
          suffix *= nums[i]
      }

      return result
};
// @lc code=end

