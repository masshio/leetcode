/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length < 2) return 0
    let hi = 0, lo = 2e9, ans = 0
    for (let n of nums){
      // 最大值
      hi = Math.max(hi, n)
      // 最小值
      lo = Math.min(lo, n)
    }
    // 平均gap
    let bsize = ~~((hi - lo) / (nums.length - 1)) || 1
    // 桶
    let buckets = Array.from({length: ~~((hi - lo) / bsize) + 1}, () => [])
    for (let n of nums) {
      buckets[~~((n - lo) / bsize)].push(n)
    }
    let currhi = 0
    for (let b of buckets) {
      if (!b.length) continue
      let prevhi = currhi || b[0]
      let currlo = b[0]
      for (let n of b) {
        currhi = Math.max(currhi, n)
        currlo = Math.min(currlo, n)
      }
      ans = Math.max(ans, currlo - prevhi)
    }
    return ans
};
// @lc code=end

