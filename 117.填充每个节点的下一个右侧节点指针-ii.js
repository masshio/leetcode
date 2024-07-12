/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root) return null
  let stack = [root]
  while(stack[0]) {
    const length = stack.length
    for(let i = 0; i < length; i++) {
      if(i == length - 1) {
        stack[i].next = null
      } else {
        stack[i].next = stack[i+1]
      }
      stack[i].left && stack.push(stack[i].left)
      stack[i].right && stack.push(stack[i].right)
    }
    stack = stack.slice(length)
  }
  return root
};
// @lc code=end

