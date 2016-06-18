/*
Return the factorial of the provided integer.
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

function factorialize(num) {
  var result = 1;
  for (var i=2; i<=num; i++) {
    result *= i;
  }
  return result;
}

factorialize(5);