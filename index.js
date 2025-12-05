//Linear search

let array = [4, 9, 2, 0, 10];

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(array, 0));
