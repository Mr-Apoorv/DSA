//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let xCopy = x;
  x = Math.abs(x);

  let rev = 0;

  while (x > 0) {
    last = x % 10;
    rev = 10 * rev + last;

    x = Math.floor(x / 10);
  }

  let limit = 2 ** 31;
  if (rev < -limit || rev > limit - 1) {
    return 0;
  }

  return xCopy < 0 ? -rev : rev;
};
