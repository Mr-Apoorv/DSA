// This code prints a square pattern of asterisks (*) in JavaScript.
//     *
//    **
//   ***
//  ****
// *****

let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    if (j < n - (i + 1)) {
      row = row + " ";
    } else {
      row = row + "*";
    }
  }
  console.log(row);
}

// This code prints a square pattern of asterisks (*) with n rows and n columns.
// You can change the value of n to print a larger or smaller square.
