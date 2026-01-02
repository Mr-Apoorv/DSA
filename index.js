//bubble sort

let array = [4, 9, 2, 0, 10];

function bubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwaped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwaped = true;
      }
    }
    if (!isSwaped) break;
  }
  return array;
}

console.log(bubbleSort(array));
