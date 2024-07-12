/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const n = nums.length
  let ans = new Array(n).fill(0)
  nums.map(item => {
    ans[item-1] = -1
  })
  return ans.map((item, index) => {
    return item != -1 ? index+1 : -1
  }).filter(item => item!=-1)
};
// @lc code=end

