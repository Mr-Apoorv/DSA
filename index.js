// This code prints a square pattern of asterisks (*) in JavaScript.
// Example output for n = 4:
// ****
// ****
// ****
// ****

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }
  console.log(row);
}
// This code prints a square pattern of asterisks (*) with n rows and n columns.
// You can change the value of n to print a larger or smaller square.
