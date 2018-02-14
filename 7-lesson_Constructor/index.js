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
* №2  В задаче было сказано, что строка не должна быть доступна из вне
* т.е. constStr.str не должна быть видна
* Не забывай о проверках!
*/


function transformStr (str) {
	var originStr = str;

	this.getStr = function() {
		return originStr
	}
	this.reverseStr = function() {
		return originStr ? originStr.split('').reverse().join('') : ' !!! Your string is not defined !!! '
	}
	this.toUpperStr = function() {
		return originStr ? originStr.toUpperCase() : ' !!! Your string is not defined !!! '
	}
	this.removeStr = function() {
		originStr = undefined;
	}
}
let constStr = new transformStr('Торгуй криптовалютой')

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>    №2  <<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('строка недоступна из вне -- ', constStr.originStr)
console.log('=================================')
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
	
	this.getLength = function() {
		return this.str.length
	}
	/** 
	* для чего вообще мы объявляем, а точнее подменяем эти методы объекта? см. console.log с 101 строки
	*/
	this.toString = function() {
		return this.str
	}
	this.valueOf = function() {
		return this.str.length
	}
}
let str = new createStr('Предлагаемые к заключению договоры')

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>    №3  <<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log(str.toString())
console.log(str.getLength())
str.setStr('Храни свои средства')
console.log(str.toString())
console.log(+str)
console.log(str.getLength())

/**
* обрати внимание на (почитай про) toString у обекта и приведение обекта к числу
*/
let ordinaryObject = {}

// try to get method toString() & bring object to number
console.log('native methods -- ', ordinaryObject.toString(), +ordinaryObject)

// replace native methods
ordinaryObject.toString = function() { return 'some information about this object' }
ordinaryObject.valueOf = function() { return 1111 }

// try to get method toString() & bring object to number AGAIN
console.log('redefined methods -- ', ordinaryObject.toString(), +ordinaryObject)
