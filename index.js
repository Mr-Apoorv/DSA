// Write a function that returns the largest number in an array.

function findLargest(arr) {
  let largest;

  for (let i = 0; i < arr.length; i++) {
    if (largest === undefined || arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest);
  return largest;
}

let arr = [5, 0, 7, 10, 8, 17, 1];

findLargest(arr); // should return 17
