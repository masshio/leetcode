/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的 K 对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  let basket = []
      for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums2.length; j++) {
          const temp = nums1[i] + nums2[j]
          basket[temp] = basket[temp] ? [[nums1[i], nums2[j]], ...basket[temp]] : [[nums1[i], nums2[j]]]
        }
      }
      basket = basket.filter(Boolean)
      const res = []
      let j = 0
      while(res.length < k) {
        basket[j] && res.push(...basket[j])
        j++
      }
      return res.slice(0, k)
};
// @lc code=end

