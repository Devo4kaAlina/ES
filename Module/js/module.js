function ConstructorUser (users) {
	var userArray = this.users = users;
	this.getLengthArray = function() {
		return Object.keys(userArray).length
	}
	this.getElementForIndex = function(index) {
		return userArray[index - 1]
	}
	this.sortBy = function(sort) {
		return userArray.sort(function(a, b){
			if (a[sort] < b[sort]) return -1
			if (a[sort] > b[sort]) return 1
		})
	}
	function filterArray(newArr, arg1, arg2) {
		return newArr = userArray.filter(function(elem){
			return elem[arg1] == arg2
		})
	}
	function checkArguments(arg, filterBy) {
		return arg.every(function(el) { return typeof el === filterBy})
	}
	this.filterBy = function() {
		var args = [];
		for (var i = 0; i < arguments.length; i++) {
		  args[i] = arguments[i];
		}
		if (args.length === 2 && checkArguments(args, 'string')) {
			var arg1 = args[0],
			 	arg2 = args[1],
			 	newArr = [];
		 	// filterArray(arg1, arg2)
			newArr = userArray.filter(function(elem){
				return elem[arg1] == arg2
			})
			return newArr
		}
		if (args.length === 3 && checkArguments(args, 'string')) {
			var arg1 = args[0],
			 	arg2 = args[1],
			 	arg3 = args[2],
			 	newArr = [];
		 	// filterArray(arg1, arg2)
			newArr = userArray.filter(function(elem){
				return elem[arg1] == arg2
			})
			newArr.sort(function(a, b){
				return (a[arg3] < b[arg3]) ? -1 : 1
			})
			return newArr
		}
		if (args.length === 1 && checkArguments(args[0], 'object')) {
			var newArr = userArray,
				newArr2 = [];
			args[0].forEach(function(item) {
				for (var k in item) {
					newArr2 = newArr.filter(function(elem){
						return elem[k] == item[k]
					})
				}
				newArr = newArr2
			})
			return newArr2
		}
		if (args.length && checkArguments(args[0], 'object') && typeof args[1] === 'string') {
			var newArr = userArray,
				newArr2 = [],
				arg3 = args[1];
			args[0].forEach(function(item) {
				for (var k in item) {
					newArr2 = newArr.filter(function(elem){
						return elem[k] == item[k]
					})
				}
				newArr = newArr2
			})
			newArr2.sort(function(a, b){
				return (a[arg3] < b[arg3]) ? -1 : 1
			})
			return newArr2
		}
	}
	this.findByValue = function () {
		if (arguments && arguments.length === 2) {
			if (arguments[1].length <= 1) {
				throw new Error('The search string should have at least two characters')
			} else {
				var arg1 = arguments[0],
			 	arg2 = arguments[1],
			 	newArr = [];
			 	// filterArray(arg1, arg2)
				newArr = userArray.filter(function(elem){
					return elem[arg1] && elem[arg1].search(arg2) > -1 ? elem[arg1] : ''
				})
				return newArr
			}
		}
	}
	this.cloneArray = function() {
		var clone = Object.assign([], userArray);
		return clone
	}
}
ConstructorUser.checkFieldInCollection = function (arr, str) {
	var isTrue;
	arr.forEach(function(item){
		isTrue = Object.keys(item).some(function(el) { return el == str })
	})
	return isTrue
}