/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  return Array.from({length: n}, (_, index) => {
    const curIndex = index+1
    if(curIndex % 5 == 0 && curIndex % 3 == 0) return 'FizzBuzz'
    else if(curIndex % 5 == 0) return 'Buzz'
    else if(curIndex % 3 == 0) return 'Fizz'
    else return curIndex+''
  })
};
// @lc code=end

