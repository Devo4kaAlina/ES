/**
* №1
*/


function Car (car, age) {
	this.mark = car;
	this.yearQty = age;
	this.getMark = function() {
		return this.mark.charAt(0).toUpperCase() + this.mark.substr(1)
	}
	this.getYear = function() {
		return new Date().getFullYear() - parseInt(this.yearQty)
	}
}
let constructor = new Car('lexus', 2)
let constructor2 = new Car('renault', 10)

console.log(constructor)
console.log(constructor.getMark())
console.log(constructor.getYear())
console.log(constructor2.getMark())
console.log(constructor2.getYear())




/**
* №2 
*/


function transformStr (str) {
	this.str = str;
	this.getStr = function() {
		return this.str
	}
	this.reverseStr = function() {
		return str.split('').reverse().join('')
	}
	this.toUpperStr = function() {
		return str.toUpperCase()
	}
	this.removeStr = function() {
		delete this.str
	}
}
let constStr = new transformStr('Торгуй криптовалютой')

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>    №2  <<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log(constStr.getStr())
console.log(constStr.reverseStr())
console.log(constStr.toUpperStr())
constStr.removeStr()
console.log(constStr.getStr())



/**
* №3
*/


function createStr (str) {
	this.str = str
	this.setStr = function(newStr) {
		this.str = newStr
	}
	this.toString = function() {
		return this.str
	}
	this.getLength = function() {
		return str.length
	}
}
let str = new createStr('Предлагаемые к заключению договоры')

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>    №3  <<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log(str.toString())
console.log(str.getLength())
str.setStr('Храни свои средства')
console.log(str.toString())
console.log(str)
console.log(str.getLength())
