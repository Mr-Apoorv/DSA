// Write a function that returns the second largest number in an array.

function secondLargest(arr) {
  let largest = -Infinity;
  let secondLarge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLarge = largest;
      largest = arr[i];
    } else if (arr[i] > secondLarge) {
      secondLarge = arr[i];
    }
  }
  console.log(secondLarge);
  return secondLarge;
}

let arr = [15, 0, 19, 10, 8, 17, 1, -4, -8];

secondLargest(arr); // should return 17
