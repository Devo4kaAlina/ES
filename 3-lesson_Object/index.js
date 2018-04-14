//1. Write function which check does object has property
var obj = {
  name: "Sam",
  age: 18
};

function checkProperty(obj, string) {
  if (string in obj) {
    return true;
  }
}

console.log(checkProperty(obj, "name"));
//------------------------------------------------------------------------------
//2. Write function which return all property's keys in object
var obj = {
  name: "Jhon",
  age: 20,
  boolean: true
};

function checkKeys(obj) {
  for (var prop in obj) {
    console.log(prop);
  }
}

checkKeys(obj);
//------------------------------------------------------------------------------
//3. Write function which return numbers of keys in Object
var obj = {
  name: 'Bob',
  age: 49,
  boolean: false,
  lastname: 'Jhoel'
};

function keysNumbers(obj) {
  var counter = 0;
  for (var prop in obj) {
    counter++;
  }
  return counter;
}

console.log(keysNumbers(obj));
//------------------------------------------------------------------------------
//4. Write function which return deep clone array
let array = [1, 2, 'three', {
    price: 28
  }, {
    display: 'block',
    color: 'red'
  }],
  clonearr = {};

function arrayClone(array) {
  for (var key in array) {
    clonearr[key] = array[key];

  }
  return clonearr;
}

console.log(arrayClone(array));
//------------------------------------------------------------------------------

function processSrting(){

}











//
