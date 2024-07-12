/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let dp = new Array(nums2.length).fill(0)
  let ans = new Array(nums1.length).fill(0)
  for(let i = 0; i < nums1.length; i++) {
    let j = nums2.indexOf(nums1[i])
    for(; j < nums2.length; j++) {
      if(dp[j] > nums1[i]) {
        ans[i] = dp[j]
        break
      }
      if(nums2[j] > nums1[i]) {
        ans[i] = nums2[j]
        break
      }
    }
    ans[i] = ans[i] == 0 ? -1 : ans[i]
    dp[j] = ans[i]
  }
  return ans
};
// @lc code=end

