/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { // LBH QVQ VG!
  //65-90: A - Z
  var newStr = "";
  for (var i=0; i<str.length; i++) {
    var x = str.charAt(i);
    if (String.charCodeAt(x) >= 65 && String.charCodeAt(x) <= 90) {
      if (String.charCodeAt(x) <= 77) {
        //A-M
        newStr += String.fromCharCode(String.charCodeAt(x) + 13);
      }
      else {
        //N-Z
        newStr += String.fromCharCode(String.charCodeAt(x) - 13);
      }
    }
    else {
      newStr += x;
    }
  }
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");