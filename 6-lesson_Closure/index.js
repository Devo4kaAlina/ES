/**
 * №1
 */
 console.log(getBidName(username), username) // undefined  - Потому что username еще не определено

function getBidName(name) {
 	name = name + ''
 	return name.toUpperCase()
}

var username = 'Ivan';



/**
 * №2
 */
function test() {
 	var name = "Vasiliy";
 	return getBigName(userName)
}
function getBigName(name) {
	name = name + '';
	return name.toUpperCase();
}
var userName = 'Ivan';

console.log(test()) // IVAN - функция getBigName принимает переменную userName


/**
 * №3
 */

 var food = 'cucumber';
 (function(){
 	var food = 'bread';
 	getFood();  // cucumber - переменная food определена глобально
 })();

function getFood() {
	console.log(food)
}

/**
 * ЧАТЬ 2
 */

/**
 * №1
 */
var dollar, getDollar;

(function(){
	var dollar = 0;
	getDollar = function() {
		return dollar
	}
})();

dollar = 30;

console.log(getDollar()) 
// 0 - у нас замкнутая функция со своими переменными, т.е. при объявлении функции мы в том же месте передали переменную dollar


/**
 * №2
 */
 var greet = 'Hello';
 (function(){
 	var text = "World";
 	console.log(greet + text) // HelloWorld
 })()
 // console.log(greet + text)  ошибка, text не найдено. Т.к переменная объявлена в замкнутом контуре


 /**
 * №3
 */

 var minus = function  (a,b) {
 	return a - b
 }
 console.log(minus(10,6))
 console.log(minus(10,5))



/**
 * №4
 */

function multiplyMarker(numb) {
	var numb;
	return function (b) {
		numb = numb*b
		return numb
	} 
}
const multiply = multiplyMarker(2);

 console.log('multiplyMarker= ', multiply(2))
 console.log('multiplyMarker= ', multiply(1))
 console.log('multiplyMarker= ', multiply(3))
 console.log('multiplyMarker= ', multiply(10))

 /**
 * №5
 */

 const module = (function(){
 	var str = 0;
 	function setStr(value) {
 		str = value
 	}
 	function getStr() {
 		return str
 	}
 	function getLengthStr() {
 		return str.length
 	}
 	function revertStr () {
 		return str.split('').reverse().join('')
 	}
 	return {
 		setStr: setStr,
 		getStr: getStr,
 		getLengthStr: getLengthStr,
 		revertStr: revertStr
 	}
 })();

module.setStr('abcde')
console.log('getStr', module.getStr())
console.log('getLengthStr', module.getLengthStr())
console.log('revertStr', module.revertStr())


 /**
 * №6
 */

 const calculator = (function(){
 	var def = 0;
 	function setCalc(a) {
 		def = a
 		return this
 	}
 	function getCalc() {
 		return def.toFixed(2)
 	}
 	function plusCalc(b) {
 		def = def+b
 		return def
 	}
 	function ymncalc (c) {
 		def = def*c
 		return def
 	}
 	function powCalc (d) {
 		def = Math.pow(def,d)
 		return this
 	}
 	return {
 		setCalc: setCalc,
 		getCalc: getCalc,
 		plusCalc: plusCalc,
 		ymncalc: ymncalc,
 		powCalc: powCalc
 	}
 })();

calculator.setCalc(10)
console.log('plusCalc', calculator.plusCalc(5))
console.log('ymncalcc', calculator.ymncalc(2))
console.log('getCalc', calculator.getCalc())
console.log('last func',calculator.setCalc(10).powCalc(2).getCalc())
