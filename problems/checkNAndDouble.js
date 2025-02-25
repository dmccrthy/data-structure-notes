/**
 * Check If N and Its Double Exist
 * Challenge sourced from Leetcode
 * Difficulty: Easy
 * @author Dan McCarthy
 */

// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let values = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (values.has(arr[i] * 2)) return true;
    if (arr[i] % 2 === 0 && values.has(Math.floor(arr[i] / 2))) return true;

    values.add(arr[i]);
  }

  return false;
};
