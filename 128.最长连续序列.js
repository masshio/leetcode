/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if(!nums.length) return 0;
  const map = new Map()
  nums.forEach(item => {
    map.set(item, 1)
  })
  nums.forEach(item => {
    if(map.has(item - 1)) {
      map.set(item, 0)
    }
  })
  let maxLength = 1
  nums.forEach(item => {
    if(map.get(item) == 1) {
      let add = 1
      while(map.has(item + add)) {
        add += 1
      }
      maxLength = Math.max(maxLength, add)
    }
  })
  return maxLength
};
// @lc code=end

