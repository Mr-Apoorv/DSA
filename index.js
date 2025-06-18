// Write a code that will return count of digits in a number.

let n = 4324;

function countDigits(n) {
    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}

let result = countDigits(n);
console.log(result)