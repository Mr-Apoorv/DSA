// Print n to 1 using recursion

function print(num) {
  if (num < 1) return;

  console.log(num);
  print(--num);
}
let n = 10;
print(n);
