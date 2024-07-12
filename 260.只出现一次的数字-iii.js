/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const numMap = new Map()
  const res = []
  nums.forEach(item => {
    const value = numMap.get(item)
    if(!value) {
      numMap.set(item, 1)
    } else {
      numMap.set(item, value + 1)
    }
  })
  for(const [key, value] of numMap.entries()) {
    if(value <= 1) res.push(key)
  }
  return res
};
// @lc code=end

