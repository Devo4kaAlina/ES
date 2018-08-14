'use strict';
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
console.log('------> array', Object.keys(obj)); // return array of keys
console.log('------> length', Object.keys(obj).length); // length of object keys
//------------------------------------------------------------------------------
//4. Write function which return deep clone array
let originArray = [1, 2, 'three', {
    price: 28
  }, {
    display: 'block',
    color: 'red'
  }],
  clonearr = {}; // Why is it object?

function arrayClone(array) {       // It is not deep clone :(
  for (var key in array) {
    clonearr[key] = array[key];

  }
  return clonearr;
}

let cloneOfArray = arrayClone(originArray);

/**
 * What if I change originArray?
 * */

originArray[3].price = 100500;
console.log('------> Show me cloneOfArray 4 element ', cloneOfArray[3]);


//------------------------------------------------------------------------------
// Write function precessString which take string and hendler and return result respectivly hendler.

var obj = {
    firtsLetter: function(str) {
      return str.charAt(0)
    },
    lastLetter: function(str) {
      return str.charAt(str.length - 1)
    },
    info: function(str) {
      return {
        length: str.length,
        spacesLessSize: str.indexOf(' ')
      }
    },
    reverseString: function(str) {
      return str.split('').reverse().join('')
    },
    nonMethod: function(str) {
      return str.toUpperCase()
    }
};

function processString(string, handler) {
  // It every ease broke :(
  // if handler is 'blablabla' string, obj[handler] will be undefined and obj[handler](string) throw Error
  return handler && obj[handler] ? obj[handler](string) : obj.nonMethod(string);
  //return handler ? obj[handler](string) : obj.nonMethod(string);
}

console.log('firtsLetter = ', processString('Hello', 'firtsLetter'))
console.log('lastLetter = ', processString('Hello', 'lastLetter'))
console.log('info = ', processString('Hello world', 'info'))
console.log('reverseString = ', processString('Hello world', 'reverseString'))
console.log('nonMethod = ', processString('Hello world'))
//------------------------------------------------------------------------------
//write object with fields name, age, lastname. Where name and lastname doesn't writeble but could be deleted.
var info = {};

Object.defineProperties(info,{
  'name': {
    value: 'Jhon',
    writable: true,
    configurable: false
},
  'lastName': {
    value: 'Doe',
    writable: true,
    configurable: false
    },
   'age': {
    value: 45,
    writable: false,
    configurable: false
  }
});

console.log(info);
//----------------------------------------u--------------------------------------
//Write object which includ price and amount of staff. Object must return price * amount. 
//For..in doesn't count
var staff = {
  price:5, 
  amount: 14, 
  toString: function () {
    return this.price * this.amount
  }
};

Object.defineProperty( staff, 'toString', {
  enumerable: false
});


console.log('price * amount = ' + staff.toString());
//-----------------------------------------------------------------------------------
// Write function which take object and array with properties and chenge properties of the objects elements 
//which specefied in array 
var price = {a: 1, b: 2};  

function propertiesObject(obj, propArr) {
  var props = {};
  for (var i = 0; i < propArr.length; i++) {
  props[propArr[i]] = true;
}

for (var key in obj) {
  Object.defineProperty(obj, key, props);
}
  return obj;
}
  
console.log(propertiesObject(price, ['writable', 'configurable']));







//
