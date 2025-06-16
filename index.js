// This code prints a square pattern of asterisks (*) in JavaScript.
// Example output for n = 4:
// 1
// 12
// 123
// 1234
// 12345

let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1) + "";
  }
  console.log(row);
}
// This code prints a square pattern of asterisks (*) with n rows and n columns.
// You can change the value of n to print a larger or smaller square.
