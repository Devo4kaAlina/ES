//Write function which create double array.
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
//Write function wich get last element of array
var arr = [1, 4, 6, 7, 8, 4];

  function getLastElememt(arr) {
    return arr[arr.length - 1];
  }
  console.log(getLastElememt(arr));
  //------------------------------------------------------------------------------
  //Write function which fill array from 0 to num
  function createArr(num) {
    var arr = [];
    for (var i = 0; i < num + 1; i++) {
      arr.push(i)
    }
    return arr;
  }
  console.log(createArr(10));
  //------------------------------------------------------------------------------
  //Write function which delete first element from quanty arrays
  function deleteFirstIndex(arr,arr1) {
    arr.shift();
    return arr;
  }
  console.log(deleteFirstIndex([1, 'b', 6], [1,5,7]));
  //------------------------------------------------------------------------------
  //Write function which sort string in descending order
  var str = 'bcdaeflmjgkhi';

  function sortAlphabet(str) {
    var strArr = str.split('');
    strArr = strArr.sort();
    trArr = strArr.reverse();
    return strArr.join('');
  }

  console.log(sortAlphabet(str));
  //------------------------------------------------------------------------------
  //Write function which sort array in descending order
  var arr = [2, 4, 7, 1, -2, 10, -9];

  function descendingOrderSort(arr) {
    return arr.sort(function(a, b) {
      return b - a;
    })
  }
  console.log(descendingOrderSort(arr));
  //------------------------------------------------------------------------------
  //Write function which delete certein elements
  var arr = ['a', 'b', 'd', 'e', 'f'];

  function getNewArray(arr, start, end) {
    return arr.slice(start, end);
  }

  console.log(getNewArray(arr, 1, 4));
  //------------------------------------------------------------------------------
  //Write function which create double array.
  var arr1 = ['one', 2, 'three', 4];

// можно использовать один массив для помещения в него его же ;)
// или создать новый (если исходный менять нельзя)
// function plusArray(arr1) {
//   return arr1.concat(arr1);
// }
function plusArray(arr1) {
  return [].concat(arr1, arr1);
}
// function plusArray(arr1) {
//   var arr2 = arr1;
//   return arr2.concat(arr1);
// }


  console.log(plusArray(arr1));
  //------------------------------------------------------------------------------
  // Exercise 5,6 together
  var arr = [1, 2, 3, 4, 5];

  function deleteIndex(arr) {
    arr.splice(2, 2, 'three', 'four');
    return arr;
  }

  console.log(deleteIndex(arr));
  //------------------------------------------------------------------------------
  var arr = ['i', 'am', 'an', 'array'];

  function addElement(arr) {
    arr.splice(3, 0, "awsome");
    return arr;
  }

  console.log(addElement(arr));
  //------------------------------------------------------------------------------
  var arr = [
    [14, 45],
    [2, 'a', 'sort'],
    ['something']
  ];

  function sortArraysLenght(array) {
    array.sort(function(a, b) {
      return a.length - b.length;
    })
    return arr;
  }

  console.log(sortArraysLenght(arr));
  //------------------------------------------------------------------------------

  var const = [1, 'two', 17, -1, 'js'];

  function makeCopyArray(arr) {
    return arr.slice(0, arr.length);
  }

<<<<<<< HEAD
function makeCopyArraySlice(arr) {
   return arr.slice(0, arr.length);
>>>>>>> e949f9b265cad45c94a2f12845781d3d256d8866
}
console.log(makeCopyArraySlice(arr));

function makeCopyArrayConcat(arr) {
  return arr.concat()
}

//------------------------------------------------------------------------------
var arr = [
  {title: 'intel', info:{cores:2, cache:3}},
	{title: 'intel', info:{cores:1, cache:1}},
	{title: 'amd', info:{cores:4, cache:2}},
	{title: 'amd', info:{cores:6, cache:8}},
];

function sortByCores(arr) {
  arr.sort(function(a, b) {
    return a.info.cores - b.info.cores;
});
return arr;
}

console.log(sortByCores(arr));
//
