/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function(root) {
  if(!root) return []
  let queue = [root]
  let ans = []
  while(queue[0]) {
    const length = queue.length
    const arr = []
    for(let i = 0; i < length; i++) {
      const temp = queue.shift()
      arr.push(temp.val)
      temp.left && queue.push(temp.left)
      temp.right && queue.push(temp.right)
    }
    ans.push(arr)
  }
  return ans.reverse()
};
// @lc code=end

