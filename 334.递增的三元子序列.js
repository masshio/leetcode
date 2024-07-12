/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let firstNumber = Infinity;
      let secondNumber = Infinity;
      for (let currentNumber of nums) {
        if (currentNumber > secondNumber && currentNumber > firstNumber) {
          return true;
        }
        if (currentNumber > firstNumber) {
          secondNumber = currentNumber;
        } else {
          firstNumber = currentNumber;
        }
      }
      return false;
};
// @lc code=end

