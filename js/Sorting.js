/**
 * Sample code for a number of sorting algorithms
 * @author Dan McCarthy
 */

// Sample data set to be tested by different algos
let sampleData = [0, 99, -12, 143, 400, 12, 11, 83, 24, 29, 9, 1, 103, -140, -34, 71, 83, 42, 8, 15]

/**
 * Implementation of Bubble Sort
 * @param {Array} arr Array of data to sort
 * @returns {void} bubble sort is inplace lol.
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    // Pass over the array multiple time to move elements
    for (let j = 0; j < arr.length-i-1; j++) {
      // Compare values and swap if arr[j] is greater
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
}

bubbleSort(sampleData)

console.log(sampleData)