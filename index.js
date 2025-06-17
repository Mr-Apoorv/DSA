// This code prints a square pattern of asterisks (*) in JavaScript.
// 1
// 10
// 101
// 1010
// 10101
// 101010

let n = 6;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    if (j % 2 === 1) {
      row = row + 0;
    } else {
      row = row + 1;
    }
  }
  console.log(row);
}

// This code prints a square pattern of asterisks (*) with n rows and n columns.
// You can change the value of n to print a larger or smaller square.
