/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const arr = Array.from({length: nums.length}, (_, index) => index+1)
  const ans = arr.filter(item => {
    const index = nums.indexOf(item)
    if(index == -1 || (nums.indexOf(item) != nums.lastIndexOf(item))) {
      return true
    }
    return false
  })
  return ans
};
// @lc code=end

