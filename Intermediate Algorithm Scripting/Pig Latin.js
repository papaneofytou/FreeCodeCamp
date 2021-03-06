/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
*/

function translatePigLatin(str) {
  var re = /[aeiou]/i;
  if (str[0].match(re)) {
    str += 'way';
  }
  else {
    var firstVowelPos = str.indexOf(str.match(re)[0]);
    str = str.slice(firstVowelPos) + str.substr(0, firstVowelPos) + 'ay';
  }
  return str;
}

translatePigLatin("consonant");