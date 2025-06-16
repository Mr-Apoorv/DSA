// This code prints a square pattern of asterisks (*) in JavaScript.
// Example output for n = 4:
// 12345
// 1234
// 123
// 12
// 1

let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}
// This code prints a square pattern of asterisks (*) with n rows and n columns.
// You can change the value of n to print a larger or smaller square.
