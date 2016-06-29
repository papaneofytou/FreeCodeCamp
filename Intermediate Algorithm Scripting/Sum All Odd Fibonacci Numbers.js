/*
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
*/

function sumFibs(num) {
  if (num === 0 || num === 1) {
    return num;
  }
  
  var sum = 1;
  var one = 0;
  var two = 1;
  var nextFib = 1;
  
  while (nextFib <= num)
  {
    if (nextFib % 2 !== 0) {
      sum += nextFib;
    }
	one = two;
    two = nextFib;
    nextFib = one + two;
  }
  return sum;
}

sumFibs(4);
