/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果交换
 */

// @lc code=start
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
  const atotal = aliceSizes.reduce((a, b) => a+b, 0)
  const btotal = bobSizes.reduce((a, b) => a+b, 0)
  const flag = atotal > btotal
  const diff = (flag ? atotal - btotal : btotal - atotal) >> 1
  for(let i = 0; i < aliceSizes.length; i++) {
    const temp = aliceSizes[i]
    for(let j = 0; j < bobSizes.length; j++) {
      const cdiff = flag ? temp - bobSizes[j] : bobSizes[j] - temp
      if(cdiff == diff) {
        return [temp, bobSizes[j]]
      }
    }
  }
};
// @lc code=end

