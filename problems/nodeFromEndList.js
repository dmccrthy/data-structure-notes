/**
 * Remove Nth Node From End of List
 * Challenge sourced from Leetcode
 * Difficulty: Medium
 * @author Dan McCarthy
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // Check for list with < 2 nodes
  if (head.next === null) return null

  if (head.next.next === null) {
      n === 1 ? head.next = null : head = head.next
      return head
  }

  //
  let start = head 
  let slow = head
  let fast = head
  let count = 0

  while (fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
      count++
  }

  let hops = count * 2

  if (fast === null) {
      hops--
  }

  if (n > hops) {
      return head.next
  }

  let front = hops - n

  while (front !== 0) {
      start = start.next
      front--
  }

  start.next = start.next.next

  return head
}