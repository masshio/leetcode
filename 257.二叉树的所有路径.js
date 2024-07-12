/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(!root) return []
  if(!root.left && !root.right) return [root.val+'']
  const ans = []
  function helper(node, path) {
    if(!node.left && !node.right) {
      ans.push(`${path}->${node.val}`)
    }
    node.left && helper(node.left, `${path}->${node.val}`)
    node.right && helper(node.right, `${path}->${node.val}`)
  }
  root.left && helper(root.left, `${root.val}`)
  root.right && helper(root.right, `${root.val}`)
  return ans
};
// @lc code=end

