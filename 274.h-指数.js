/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations = citations.filter(Boolean)
  const length = citations.length
  if(length <= 1) return length
  citations.sort((a,b) => a-b)
  if(citations[0] >= length) return length
  let i = 0
  while(i < length) {
    if(citations[i] > length - i) break;
    i++
  }
  return citations[i-1] == 0 ? length - i + 1 : Math.min(length - i + 1, citations[i-1])
};
// @lc code=end

