/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
  re = new RegExp(before, "gi");
  str = str.replace(re, function fix(match) {
    //if (match.charAt(0) == match.charAt(0).toUpperCase()) {
	if (/[A-Z]/.test(match.charAt(0))) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    }
	return after;
  });
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
