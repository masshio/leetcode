/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  if(!root) return []
  let ans = []
  function helper(node, sum, arr) {
    if(node.val == sum && node.left == null && node.right == null) {
      ans.push([...arr, node.val])
    }
    node.left && helper(node.left, sum - node.val, [...arr, node.val])
    node.right && helper(node.right, sum - node.val, [...arr, node.val])
  }
  helper(root, targetSum, [])
  return ans
};
// @lc code=end

