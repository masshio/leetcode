/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function(head) {
  if(!head) return null
  const arr = []
  let temp = head
  while(temp) {
    arr.push(temp)
    temp = temp.next
  }
  function swap(left, right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
  }
  for(let i = 1; i < arr.length; i++) {
    for(let j = i - 1; j >= 0; j--) {
      if(arr[j].val > arr[j+1].val) {
        swap(j, j+1)
      } else break
    }
  }
  for(let i = 0; i < arr.length; i++) {
    arr[i].next = arr[i+1] || null
  }
  return arr[0]
};
// @lc code=end

