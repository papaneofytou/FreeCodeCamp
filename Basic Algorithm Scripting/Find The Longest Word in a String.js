/*
Return the length of the longest word in the provided sentence.
*/

function findLongestWord(str) {
  var longest = 0;
  var ar = str.split(' ');
  for (var i=0; i<ar.length; i++) {
    if (ar[i].length > longest) {
      longest = ar[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");