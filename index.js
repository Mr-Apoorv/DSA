// Write a function that returns the second largest number in an array.

function secondLargest(arr) {
  // If array is empty
  // if array has less than two elements
  if (arr.length < 2) {
    console.log("Array must have at least two elements.");
    return "Array must have at least two elements.";
  }

  let largest = -Infinity;
  let secondLarge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLarge = largest;
      largest = arr[i];
    }
    // if array has duplicate numbers
    else if (arr[i] > secondLarge && arr[i] !== largest) {
      // Update second largest only if it's not equal to the largest
      secondLarge = arr[i];
    }
  }
  console.log(secondLarge);
  return secondLarge;
}

let arr = [15, 0, 19, 10, 8, 17, 1, -4, -8];

secondLargest(arr); // should return 17

/**
 * Corner cases:
 * If array is empty
 * if array has less than two elements
 * if array has negative numbers - working fine with existing code
 * if array has duplicate numbers
 * */
