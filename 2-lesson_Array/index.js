var arr1 = [1, 2, 3];

function doubleArray(arr1) {
  var arr2 = arr1;
  var n = arr1.length;
  for (var i = 0; i < n; i++) {
    arr2.push(arr1[i]);
  }
  return arr2;
}
console.log(doubleArray(arr1));
//------------------------------------------------------------------------------
var arr = [1, 4, 6, 7, 8, 4];

function getLastElememt(arr) {
  return arr[arr.length - 1]
}
console.log(getLastElememt(arr));
//------------------------------------------------------------------------------
function createArr(num) {
  var arr = [];
  for (var i = 0; i < num + 1; i++) {
    arr.push(i)
  }
  return arr;
}
console.log(createArr(10));
//------------------------------------------------------------------------------
// function deleteFirstIndex(arr,arr1) {
//   arr.shift();
//   return arr;
// }
// console.log(deleteFirstIndex([1, 'b', 6], [1,5,7]));
//------------------------------------------------------------------------------
var str = 'bcdaeflmjgkhi';

function sortAlphabet(str) {
  var strArr = str.split('');
  strArr = strArr.sort();
  strArr = strArr.reverse();
  return strArr.join('');
}

console.log(sortAlphabet(str));
//------------------------------------------------------------------------------
var arr = [2, 4, 7, 1, -2, 10, -9];

function descendingOrderSort(arr) {
  return arr.sort(function(a, b) {
    return b - a;
  })
}
console.log(descendingOrderSort(arr));
//------------------------------------------------------------------------------
var arr = ['a', 'b', 'd', 'e', 'f'];

function getNewArray(arr, start, end) {

}











//
