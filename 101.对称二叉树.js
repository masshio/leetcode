/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(!root) return false
  if(!root.left && !root.right) return true
  function helper(left, right) {
    if((!left && right) || (left && !right)) return false
    if(!left && !right) return true
    if(left.val !== right.val) return false
    return helper(left.left, right.right) && helper(left.right, right.left)
  }
  return helper(root.left, root.right)
};
// @lc code=end

