/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  for(let i = 0; i < letters.length; i++) {
    if(letters[i] > target) {
      return letters[i]
    }
  }
  return letters[0]
};
// @lc code=end

