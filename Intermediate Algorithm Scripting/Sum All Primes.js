/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.
*/

function sumPrimes(num) {
  if (num < 2) { return 0; }
  if (num == 2) { return 2; }
  
  var sum = 2;
  
  for (var i=3; i<=num; i++) {
    var isprime = true;
    if (i%2 === 0) { isprime = false; continue; }
    for (var j=3; j*j<=i; j+=2) {
      if (i%j === 0) { isprime = false; break; }
    }
    if (isprime) { sum += i; }
  }
  return sum;
}

sumPrimes(10);