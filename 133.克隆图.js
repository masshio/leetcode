/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
 // Definition for a _Node.
 function _Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
 }
 

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
  if(!node) return null
  const map = new Map()
  map.set(node.val, node)
  function helper(curNode) {
    const cloneNode = new _Node(curNode.val)
    map.set(curNode.val, cloneNode)
    cloneNode.neighbors = curNode.neighbors?.map(item => {
      if(map.get(item.val)) {
        return map.get(item.val)
      }
      return helper(item)
    })
    return cloneNode
  }
  helper(node)
  return map.get(node.val)
};
// @lc code=end

