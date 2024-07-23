/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let map = new Map()
  let temp = head
  while(temp) {
    if(map.get(temp)) return temp
    map.set(temp, 1)
    temp = temp.next
  }
  return null
};
// @lc code=end

