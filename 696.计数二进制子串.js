/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let curr = 1, prev = 0, ans = 0
    for (let i = 1; i < s.length; i++)
        if (s[i] === s[i-1]) curr++
        else ans += Math.min(curr, prev), prev = curr, curr = 1
    return ans + Math.min(curr, prev)
};
// @lc code=end

