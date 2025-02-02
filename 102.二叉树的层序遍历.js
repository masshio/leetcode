/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
  let q = [root], ans = []
  while (q[0]) {
    let qlen = q.length, row = []
    for (let i = 0; i < qlen; i++) {
      let curr = q.shift()
      row.push(curr.val)
      if (curr.left) q.push(curr.left)
      if (curr.right) q.push(curr.right)
    }
    ans.push(row)            
  }
  return ans
};
// @lc code=end

