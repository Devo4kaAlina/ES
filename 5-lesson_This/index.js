/**
 * №1
 */
let rectangle = {
	width: 30,
	height: 30,
	getSquare: function() {
		return this.width*this.height
	}
}
console.log('getSquare = ', rectangle.getSquare())


/**
 * №2
 */
const price = {
	price: 10,
	discount: '15.5%',
	getPrice: function() {
		return this.price
	},
	getPriceWithDiscount: function() {
		return this.price - this.price/100*parseFloat(this.discount)
	},
}
console.log('getPrice = ', price.getPrice(),'getPriceWithDiscount = ', price.getPriceWithDiscount())


/**
 * №3
 */
const user = {
	name: 'Amraham',
	getUserName: getUserName
};
function getUserName () {
	return this.name
}
console.log('getUserName = ', user.getUserName())



/**
 * №4
 */
const height = {
	height: 10,
	heightPlus: function () {
		this.height+=1
	}
};
height.height = 11;
height.heightPlus()
console.log('heightPlus = ', height.height)




/**
 * №5
 */
const numerator = {
	value: 1,
	double: function () {
		this.value*=2
		return this
	},
	plusOne: function() {
		this.value+=1
		return this
	},
	minusOne: function() {
		this.value-=1
		return this
	}
};
numerator.double().plusOne().plusOne().minusOne()
console.log('numerator = ', numerator.value)



/**
 * №6
 */
const user2 = {name: 'Amraham'},
	  otherUser = {
	  	name: 'Julia',
	  	getName: function() {
	  		return this.name
	  	}
	  };
user2.getName; // undefined - мы просто создали ключ, по умолчанию он undefined
user2.getName = otherUser.getName // мы одолжили метод для обхяекта user2
user2.getName(); // 'Amraham'
otherUser.getName(); // 'Julia'




/**
	*  ЧАСТЬ 222
*/

/**
 * №1
 */
function getList () {return this.list}

let users = {
	length: 4,
	list: ['Julia', 'Launch', 'Johy', 'Amraham']
}
users.getList = getList;
console.log(getList()) // в объекте виндов нет  list, поэтому undefined
console.log(users.getList()) // мы создали метод объекта
console.log(getList.call(users)) // передали в функцию this объект users



/**
 * №2
 */
let detail = {
	price: 55,
	count: 5,
	getTotalPrice: function() {
		return this.price*this.count
	}
}
console.log('getTotalPrice=', detail.getTotalPrice())



/**
 * №3
 */
let detail2 = {
	price: 5,
	count: 10,
}

console.log('getTotalPrice2=', detail.getTotalPrice.call(detail2))

// or
detail2.getTotalPrice = detail.getTotalPrice;
console.log('getTotalPrice2=', detail2.getTotalPrice())




/**
 * №4
 */
let sizes = {
	width: 5,
	height: 10
},
getSquare =  function () {return this.width*this.height}

console.log('getSquare=', getSquare.call(sizes))



/**
 * №5
 */

 let numb = [4,12,0,1,-2,4]
 console.log('min element from array = ', Math.min.apply(null, numb))



 /**
 * №6
 */

 const element = {
 	height: '15px',
 	marginTop: '5px',
 	marginBottom: '5px',
 	getFullHeight: function() {
 		return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom)
 	}
 },
 block = {
 	height: '5px',
 	marginTop: '3px',
 	marginBottom: '3px',
 }
 console.log('getFullHeight = ', element.getFullHeight())
 console.log('getFullHeight = ', element.getFullHeight.call(block))




  /**
 * №7
 */

 let elem = {
 	height: 25,
 	getHeight: function() {
 		return this.height
 	}
 }

 let getElementHeight = elem.getHeight.bind(elem);


 console.log('getElementHeight=', getElementHeight())
