/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if(!intervals.length) return [newInterval]
  let temp = [...newInterval]
  let num = 1
  for(let i = 0; i < intervals.length; i++) {
    if(intervals[i][0] > temp[0]) {
      let j = i-1
      if(j < 0) {
        if(newInterval[1] >= intervals[i][0]){
          intervals[i] = [newInterval[0], Math.max(newInterval[1], intervals[i][1])]
          continue
        } else {
          intervals.unshift(newInterval)
          break
        }
      }
      while(j < intervals.length - 1) {
        if(intervals[j][1] >= temp[0]) {
          intervals.splice(j, num, [intervals[j][0], Math.max(temp[1], intervals[j][1])])
          temp = intervals[i]
          num = 2
        } else if(intervals[i][0] <= temp[1]) {
          intervals.splice(i, num, [temp[0], Math.max(temp[1], intervals[i][1])])
          temp = intervals[i]
          num = 2
          break
        } else return intervals
      }
    }
    if(i == intervals.length - 1 && num == 1) {
      if(intervals[i][1] >= newInterval[0]) {
        intervals[i] = [intervals[i][0], Math.max(newInterval[1], intervals[i][1])]
      } else {
        intervals.push(newInterval)
      }
    }
  }
  return intervals
};
insert([[0,5],[9,12], [16,18]],[7,16])
// @lc code=end

