/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  temp =  arr2.filter(function myFilter(val) {
			return arr1.every(function fil(x) {
				return val != x; 
			});
		});
  
  newArr = newArr.concat(temp);
  
  temp = arr1.filter(function myFilter(val) {
			return arr2.every(function fil(x) {
				return val != x; 
			});
		});
  
  newArr = newArr.concat(temp);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);