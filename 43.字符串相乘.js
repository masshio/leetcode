/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let arr = []
  let str = ''
  for(let i = 0; i < num1.length; i++) {
    let zero = ''
    for(let j = 0; j < i; j++) {
      zero += '0'
    }
    arr.push(num1[num1.length-i-1] * num2 + zero)
  }
  let bit = 0;
  for(let i = 0; i < arr[arr.length - 1].length || bit > 0; i++) {
    let total = bit;
    arr.map(item => total += parseInt(item[item.length - 1 - i] || 0))
    str = `${total%10}` + str;
    bit = parseInt(total / 10);
  }
  if(str == 0) return '0'
  return str
};
multiply("23108814760092", "55183904456427981")
// @lc code=end

