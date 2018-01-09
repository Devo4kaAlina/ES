///////////////////----------- PART1 --------------//////////
// double array
function doubleArr(arr) {
	let newArray = []
	for (let i = 0; i < arr.length; i++) {
		newArray.push(arr[i])
	};
	return arr.concat(newArray)
}
console.log('double array', doubleArr([1,2,3]))
// double array
// get last elem
function getLast(arr) {
	return arr[arr.length - 1]
}
console.log('get last elem', getLast([1,2,3,4,5]))
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
console.log('create Array', createArr(15))
// create Array
// change array
function changeArrays() {
	var args = Array.prototype.slice.call(arguments)
	args.forEach(function(item, i, arr) {
		args[i].shift()
	})
	return args
}
console.log('change array', changeArrays(['a','b','c','d'], ['1','2','3','4','5','6'], [9,8,7,6,5]))
// change array
///////////////////----------- PART1 --------------//////////