/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if(prerequisites.length == 0) return true
  const temp = Array.from({length: numCourses}, () => [])
  for(const item of prerequisites) {
    const prev = item[0]
    const next = item[1]
    if(prev == next) return false
    if(temp[next].includes(prev)) {
      return false
    }
    temp[prev].push(next)
    temp[prev].push(...temp[next])
  }
  const prev = prerequisites[prerequisites.length - 1][0]
  for(const item of temp[prev]) {
    if(temp[item].includes(prev)) return false
  }
  return true
};
// @lc code=end
