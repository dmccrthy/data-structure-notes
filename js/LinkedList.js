/**
 * Sample code covering Linked Lists
 * @author Dan McCarthy
 */

/** Class representing singly linked node */
class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

/** Class representing a singly linked list */
class LinkedList {
  /**
   * Creates an empty singly linked list
   */
  constructor() {
    this.head = null;
    this.length = 0
  }

  /**
   * Insert a node at index in list
   * @param {*} value Value of new node
   * @param {number} index Index to insert at (defaults to head)
   */
  insert(value, index=0) {
    let node = new Node(value)

    if (index === 0) {
      this.head = this.head?.next
      
      return
    }

    let prev = this.head
    let curr = this.head?.next

    // Loop over
    for (let i = 0; i < index; i++) {
      
    }

    this.length++
  }

  /**
   * Remove node at given index
   * @param {number} index Index of list to remove
   */
  delete(index) {

  }

  /**
   * 
   * @param {number} index Index to search for in list
   * @returns {*} Value at index or null
   */
  searchByIndex(index) {

  }

  /**
   * 
   * @param {*} value Value to search for in list
   * @returns {number} First index of value or -1
   */
  searchByValue(value) {

  }
}