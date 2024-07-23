/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  const arr = []
  let temp = head
  while(temp) {
    arr.push(temp)
    temp = temp.next
  }
  const right = arr.splice(Math.ceil(arr.length / 2), arr.length - Math.ceil(arr.length / 2))
  for(let i = 0; i < arr.length; i++) {
    arr[i].next = right[right.length - i - 1] || null
    right[right.length - i - 1] && (right[right.length - i - 1].next = arr[i+1] || null)
  }

};
// @lc code=end

