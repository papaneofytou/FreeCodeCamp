/*
Convert the given number into a roman numeral.
*/

function convertToRoman(num) {
  //up to 3999
  var numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var letters = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  var res='';
  
  for (var i=letters.length-1; i>=0; i-=1) {
    while (num >= numbers[i]) {
		res += letters[i];
		num -= numbers[i];
	}
  }
  return res;
}

convertToRoman(36);