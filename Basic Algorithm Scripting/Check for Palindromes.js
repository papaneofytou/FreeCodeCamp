/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
*/

function palindrome(str) {
  // Good luck!
  var str1 = str.replace(/[\W_]/g, '').toLowerCase();
  var str2 = str1.split('').reverse().join('');
  
  if (str1 === str2) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("0_0 (: /-\ :) 0-0");