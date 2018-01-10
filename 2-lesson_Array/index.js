///////////////////----------- PART1 --------------//////////
console.log('///////////////////----------- PART1 --------------//////////')
// double array
function doubleArr(arr) {
	let newArray = []
	for (let i = 0; i < arr.length; i++) {
		newArray.push(arr[i])
	};
	return arr.concat(newArray)
}
console.log('double array =', doubleArr([1,2,3]))
// double array
// get last elem
function getLast(arr) {
	return arr[arr.length - 1]
}
console.log('get last elem =', getLast([1,2,3,4,5]))
// get last elem
// create Array
function createArr(n) {
	let arr = []
	let i = 0
	while (i < n) {
		arr[i] = i + 1
		i++
	}
	return arr
}
console.log('create Array =', createArr(15))
// create Array
// change array
function changeArrays() {
	var args = Array.prototype.slice.call(arguments)
	args.forEach(function(item, i, arr) {
		args[i].shift()
	})
	return args
}
console.log('change array =', changeArrays(['a','b','c','d'], ['1','2','3','4','5','6'], [9,8,7,6,5]))
// change array
///////////////////----------- PART1 --------------//////////
///////////////////----------- PART2 --------------//////////
console.log('///////////////////----------- PART2 --------------//////////')
// sort and reverse string
function sortReverseStr(str) {
	console.log('string init = ', str)
	let arrStr = []
	for (let i = 0; i < str.length ; i++) {
		arrStr.push(str.charAt(i))
	};
	arrStr.sort(function(a,b) {
		if (a < b) return -1;
		if (a > b) return 1
	})
	arrStr.reverse()
	return arrStr.join('')
}
console.log('1.sort and reverse string =', sortReverseStr('qwertyuiopasdfghjklzxcvbnm'))
// sort and reverse string
// sort array
function sortArray(arr) {
	arr.sort(function(a,b) {
		return a - b;
	})	
	return arr
}
console.log('2.sort array =', sortArray([2,56,-4,-105,7,9531,5,-100,-1]))
// sort array
// get new array
function getNewArray(arr, start, end) {
	let newArr = []
	newArr = arr.slice(start, end)
	return newArr
}
console.log('3.get new array =', getNewArray(['a','b','c','d','e','f'], 1, 3))
// get new array
// double array
function doubleArray(arr) {
	return arr.concat(arr)
}
console.log('4.double array =', doubleArray(['a','b']))
// double array
//remove element
function remEl(arr, start, col) {
	arr.splice(2,2)
	return arr
}
console.log('5.remove 2,3 element =', remEl([1,2,3,4,5], 2,2))
//remove element
//remove element and replace
function remElRep(arr, start, col) {
	arr.splice(2,2,'three','four')
	return arr
}
console.log('6.remove element and replace =', remElRep([1,2,3,4,5], 2,2))
//remove element and replace
//add in array
function addInArray(arr, whrehe, what) {
	arr.splice(whrehe,0,what)
	return arr
}
console.log('7.add in array =', addInArray([1,2,3,4,5], 2, 'test'))
//add in array
//sort arrays
function sortArrays(arrays) {
	arrays.sort(function(arr,arr2){
		return arr.length - arr2.length
	})
	return arrays
}
console.log('8.sort arrays for length=', sortArrays([[1,2,3,4,5],[2],['s','b','s']]))
//sort arrays
//copy array
function copyArray(array) {
	return array.concat(array)
}
console.log('9.copy array=', copyArray([1,2,3,4,5]))
//copy array
//sort array obj
function sortArrayObj(obj) {
	obj.sort(objSort)
	function objSort (a,b) {
		if (a.info.cores < b.info.cores) return -1;
		if (a.info.cores > b.info.cores) return 1;
	}
	return obj
}
const arrObj = [
	{
		cpu: 'intel',
		info: {
			cores: 2,
			cashe: 3
		}
	},
	{
		cpu: 'AMD',
		info: {
			cores: 4,
			cashe: 4
		}
	},
	{
		cpu: 'intel',
		info: {
			cores: 1,
			cashe: 4
		}
	},
	{
		cpu: 'amd',
		info: {
			cores: 8,
			cashe: 4
		}
	},
	{
		cpu: 'intel',
		info: {
			cores: 6,
			cashe: 4
		}
	}
]
console.log('10.sort array obj=', sortArrayObj(arrObj))
//sort array obj
// filter product
const products = [
	{title: 'prod1', price: 15},
	{title: 'prod2', price: 105},
	{title: 'prod3', price: 1215},
	{title: 'prod4', price: 18},
	{title: 'prod5', price: 165},
	{title: 'prod6', price: 615},
	{title: 'prod7', price: 215},
	{title: 'prod8', price: 515},
	{title: 'prod9', price: 315},
	{title: 'prod10', price: 855},
]
function filterProducts(products, from, to) {
	newProdList = []
	products.sort(prodSort)
	function prodSort (a,b) {
		return a.price - b.price
	}
	products.forEach(function(item, i){
		if (products[i].price > from && products[i].price < to) {
			newProdList.push(products[i])
		} 
	})
	return newProdList
}
console.log('11.filter product=', filterProducts(products, 400, 1000))
// filter product
///////////////////----------- PART3 --------------//////////
console.log('///////////////////----------- PART3 --------------//////////')
// filter product
function filterProd(products, from, to) {
	products.sort(prodSort)
	function prodSort (a,b) {
		return a.price - b.price
	}
	function filter(element) {
		console.log(element.price > from && element.price < to)
	    return (element.price > from && element.price < to)
	}
	let newProd = products.filter(filter)
	return newProd
}
console.log('1.filter product=', filterProd(products, 400, 1000))
// filter product