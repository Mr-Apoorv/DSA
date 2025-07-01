// Print 1 to n using recursion

function print(num) {
  if (num > n) return;

  console.log(num);
  print(++num);
}
let n = 10;
print(1);
