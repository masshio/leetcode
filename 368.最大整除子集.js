/*
 * @lc app=leetcode.cn id=368 lang=javascript
 *
 * [368] 最大整除子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  const numMap = new Map()
      let flag = false
      nums.forEach(item => {
        if(item == 1) {
          flag = true
          return
        }
        numMap.set(item, numMap.get(item) ? numMap.get(item).push(item) : [item])
        for(let i = 2; i <= Math.sqrt(item); i++) {
          if(item % i == 0) {
            numMap.set(i, numMap.get(i) ? [...numMap.get(i), item] : [item])
          }
        }
      })
      let res = []
      for(let [key, value] of numMap.entries()) {
        if(value.length > res.length) {
          res = value
        }
      }
      return flag ? [1, ...res] : res
};
// @lc code=end

