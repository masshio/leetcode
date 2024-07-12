/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const numMap = {}
  let max = 0
  nums.forEach((item, index) => {
    const val = numMap[item]
    if(val) {
      numMap[item].value = val.value + 1
      numMap[item].endIndex = index
    } else {
      numMap[item] = {}
      numMap[item].value = 1
      numMap[item].startIndex = index
      numMap[item].endIndex = index
    }
    max = Math.max(max, numMap[item].value)
  })
  let res = Infinity
  Object.keys(numMap).forEach(key => {
    if(numMap[key].value == max) {
      res = Math.min(res, numMap[key].endIndex - numMap[key].startIndex + 1)
    }
  })
  return res
};
// @lc code=end

