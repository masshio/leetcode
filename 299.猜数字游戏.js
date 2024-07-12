/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const arrA = new Array(10).fill(0)
  const arrB = new Array(10).fill(0)
  let numA = 0
  let numB = 0
  for(let i = 0; i < secret.length; i++) {
    if(secret[i] == guess[i]) {
      numA++
    } else {
      arrA[secret[i]]++
      arrB[guess[i]]++
    }
  }
  for(let i = 0; i < arrA.length; i++) {
    numB += Math.min(arrA[i], arrB[i])
  }
  return `${numA}A${numB}B`
};
// @lc code=end

