/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = ['a','e','i','o','u','A','E','I','O','U']
      let left = 0, right = s.length - 1
      s = s.split('')
      while(left < right) {
        while(!vowels.includes(s[left])) {
          if(left >= right) break
          left++
        }
        while(!vowels.includes(s[right])) {
          if(left >= right) break
          right--
        }
        if(left >= right) break
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
      }
      return s.join('')
};
// @lc code=end

