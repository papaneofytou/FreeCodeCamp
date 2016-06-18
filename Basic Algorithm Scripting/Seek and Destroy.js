/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  // Remove all the values
  var restArgs = [];
  for (var i=1; i<arguments.length; i++) {
    restArgs.push(arguments[i]);
  }
  
  return arr.filter(function myFilter(val) {
    return restArgs.every(function fil(x) {
      return val != x;
    });
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);