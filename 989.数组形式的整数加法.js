/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  const knum = (k+'').split('').map(item => +item)
  num = num.map(item => +item)
  const res = []
  let i = num.length - 1
  let j = knum.length - 1
  let carry = 0
  while(i >= 0 && j >= 0) {
    const temp = +num[i] + +knum[j]
    if(temp + carry >= 10) {
      res.unshift(temp + carry - 10)
      carry = 1
    } else {
      res.unshift(temp + carry)
      carry = 0
    }
    i--
    j--
  }
  while(i >= 0) {
    if(num[i] + carry >= 10) {
      res.unshift(num[i] + carry - 10)
      carry = 1
    } else {
      res.unshift(num[i] + carry)
      carry = 0
    }
    i--
  }
  while(j >= 0) {
    if(knum[j] + carry >= 10) {
      res.unshift(knum[j] + carry - 10)
      carry = 1
    } else {
      res.unshift(knum[j] + carry)
      carry = 0
    }
    j--
  }
  if(carry == 1) {
    res.unshift(1)
  }
  return res.map(item => item+'')
};
// @lc code=end

