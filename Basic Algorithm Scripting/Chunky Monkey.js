/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr1 = [];
  var start=0;
  //var end = size = start+size;
  while (start+size < arr.length) {
    arr1.push(arr.slice(start, start+size));
    start += size;
  }
  arr1.push(arr.slice(start,arr.length));
  return arr1;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);