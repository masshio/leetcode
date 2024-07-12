/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length == 1) return intervals
  intervals.sort((a,b) => a[0] - b[0])
  let i = 0;
  while(i < intervals.length - 1) {
    if(intervals[i][1] >= intervals[i+1][0] && intervals[i+1][1] >= intervals[i][0]) {
      intervals.splice(i, 2, [Math.min(intervals[i][0], intervals[i+1][0]), Math.max(intervals[i+1][1], intervals[i][1])])
    } else i++
  }
  return intervals
};
// @lc code=end

