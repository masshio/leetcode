/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let leftNode = head
  let pre = null
  for(let i = 1; i < left; i++) {
    pre = leftNode
    leftNode = leftNode.next
  }
  let before = leftNode
  let next = leftNode
  let next2 = leftNode.next
  for(let j = left; j < right; j++) {
    before = next
    next = next2
    next2 = next2?.next
    next.next = before
  }
  pre && (pre.next = next)
  leftNode.next = next2
  return left == 1 ? next : head
};
// @lc code=end

