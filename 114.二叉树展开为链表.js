/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if(!root) return root;
  let ans = []
  function helper(node) {
    if(!node) return
    ans.push(node)
    helper(node.left)
    helper(node.right)
  }
  helper(root)
  for(let i = 1; i < ans.length; i++) {
    ans[i-1].left = null
    ans[i-1].right = ans[i]
  }
  return root
};
// @lc code=end

