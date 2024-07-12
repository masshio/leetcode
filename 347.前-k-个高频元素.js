/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const numMap = new Map()
      for(let i = 0; i < nums.length; i++) {
        let num = numMap.get(nums[i])
        if(num) {
          numMap.set(nums[i], num+1)
        } else {
          numMap.set(nums[i], 1)
        }
      }
      return [...numMap.entries()].sort((a,b) => b[1] - a[1]).slice(0, k).map(item => item[0])
};
// @lc code=end

