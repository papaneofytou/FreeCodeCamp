/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  /* If charCodeAt(0) + the number of the rest of the letters is the same as the code of the last letter, then all the letters are present and there's no need to loop.
  */
  if (str.charCodeAt(0)+str.length-1 == str.charCodeAt(str.length-1)) {
    return undefined;
  }
  
  /* Checking from the 2nd letter to the last (to include the case of the missing letter being the penultimate)
  */
  var shouldBe = str.charCodeAt(0) + 1;
  for (var i=1; i<str.length; i++) {
    if (str.charCodeAt(i) != shouldBe) {
      return String.fromCharCode(shouldBe);
    }
    else { shouldBe++; }
  }
  return str;
}

fearNotLetter("abce");
