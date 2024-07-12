/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 多数元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const n = parseInt(nums.length / 3)
  const numMap = new Map()
  const res = []
  nums.forEach(item => {
    const val = numMap.get(item)
    numMap.set(item, val ? val+1 : 1)
  })
  for(const [key, val] of numMap.entries()) {
    if(val > n) {
      res.push(key)
    }
  }
  return res
};
// @lc code=end

