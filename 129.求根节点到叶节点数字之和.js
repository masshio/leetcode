/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function(root) {
  if(!root) return 0
  let ans = 0
  function helper(node, val) {
    if(!node.left && !node.right) {
      ans += val * 10 + node.val
    }
    node.left && helper(node.left, val * 10 + node.val)
    node.right && helper(node.right, val * 10 + node.val)
  }
  helper(root, 0)
  return ans
};
// @lc code=end

