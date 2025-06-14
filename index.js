// Write a function that returns the smallest number in an array.

function findSmallest(arr) {
  let smallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  console.log(smallest);
  return smallest;
}

let arr = [5, 0, 7, 10, 8, 17, 1, -4, -8];

findSmallest(arr); // should return -8
