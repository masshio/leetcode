/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let Anum = 0
      let Lnum = 0
      for(let char of s) {
        if(char == 'A') {
          Anum++
          if(Lnum < 3) Lnum = 0
        }
        else if(char == 'L') {
          Lnum++
        } else {
          if(Lnum < 3) Lnum = 0
        }
      }
      return !(Anum >= 2 || Lnum >= 3)
};
// @lc code=end

