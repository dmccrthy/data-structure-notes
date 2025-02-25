/**
 * Increasing Order Search Tree
 * Challenge sourced from Leetcode
 * Difficulty: Easy
 * @author Dan McCarthy
 */

// Time Complexity: O(n)
// Space Complexity: O(n)

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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let output;

  function reverseInOrder(node) {
      if (node === null) return

      reverseInOrder(node.right)
      output = output ? new TreeNode(node.val, null, output) : new TreeNode(node.val, null, null)
      reverseInOrder(node.left)
  }

  reverseInOrder(root)

  return output
};