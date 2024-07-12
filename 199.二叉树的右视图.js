/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(!root) return []
  const ans = []
  let preStack = [root]
  let nextStack = []
  function helper() {
    if(!preStack.length && !nextStack.length) return;
    ans.push(preStack[preStack.length - 1].val)
    preStack.forEach(item => {
      item.left && nextStack.push(item.left)
      item.right && nextStack.push(item.right)
    })
    preStack = [...nextStack]
    nextStack = []
    helper()
  }
  helper()
  return ans
};
// @lc code=end

