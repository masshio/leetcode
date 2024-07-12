/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0
  let ten = 0
  for(let i = 0; i < bills.length; i++) {
    if(bills[i] == 5) {
      five++
    }
    if(bills[i] == 10) {
      if(five == 0) {
        return false
      } else {
        five--
        ten++
      }
    }
    if(bills[i] == 20) {
      if(ten > 0 && five > 0) {
        ten--
        five--
      } else if(five > 2) {
        five -= 3
      } else return false
    }
  }
  return true
};
// @lc code=end

