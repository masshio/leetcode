/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head === null || head.next === null) return head;

  const getLength = function (head) {
    let length = 0;
    let curr = head;
    while (curr) {
      length++;
      curr = curr.next;
    }
    return length;
  };

  const split = function (head, step) {
    if (head === null) return null;

    for (let i = 1; i < step && head.next; i++) {
      head = head.next;
    }

    const right = head.next;
    head.next = null;
    return right;
  };

  const merge = function (left, right, tail) {
    let curr = tail;
    while (left && right) {
      if (left.val < right.val) {
        curr.next = left;
        left = left.next;
      } else {
        curr.next = right;
        right = right.next;
      }
      curr = curr.next;
    }

    curr.next = left ? left : right;
    while (curr.next) curr = curr.next;

    return curr;
  };

  const length = getLength(head);
  const dummy = new ListNode(0);
  dummy.next = head;

  let step = 1;
  while (step < length) {
    let curr = dummy.next;
    let tail = dummy;

    while (curr) {
      const left = curr;
      const right = split(left, step);
      curr = split(right, step);

      tail = merge(left, right, tail);
    }

    step *= 2;
  }

  return dummy.next;
};
// @lc code=end
