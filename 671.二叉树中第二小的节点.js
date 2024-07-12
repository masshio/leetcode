/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  const minStack = []
      function getValue(curRoot) {
        if(!curRoot) return
        if(minStack.length == 0) {
          minStack.push(curRoot.val)
        } else if(curRoot.val < minStack[0]) {
          minStack.unshift(curRoot.val)
        } else if(!minStack[1] && curRoot.val != minStack[0]) {
          minStack.push(curRoot.val)
        } else if(minStack[1] && curRoot.val < minStack[1] && curRoot.val > minStack[0]) {
          minStack[1] = curRoot.val
        }
        getValue(curRoot.left)
        getValue(curRoot.right)
      }
      getValue(root)
      return minStack.length >= 2 ? minStack[1] : -1
};
// @lc code=end

