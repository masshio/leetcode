/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if(!root) return []
  let ans = []
  function helper(node, deep) {
    if(!node) return
    if(!ans[deep]) ans[deep] = []
    if(deep % 2 == 0) {
      ans[deep].push(node.val)
    } else {
      ans[deep].unshift(node.val)
    }
    helper(node.left, deep+1)
    helper(node.right, deep+1)
  }
  helper(root, 0)
  return ans
};
// @lc code=end

