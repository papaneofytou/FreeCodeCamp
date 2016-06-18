/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
*/

function titleCase(str) {
  str = str.split(' ');
  for (var i=0; i<str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
  }
  return str.join(' ');
}

titleCase("I'm a little tea pot");