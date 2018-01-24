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
