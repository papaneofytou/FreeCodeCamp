/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  var res = str;
  if (num <= 0) {
    return '';
  }
  
  for (var i=1; i<num; i++) {
    res += str; 
  }
  return res;
}

repeatStringNumTimes("abc", 3);