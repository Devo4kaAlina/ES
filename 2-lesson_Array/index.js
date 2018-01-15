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
	products.sort(function(a,b){
		return a.price - b.price
	})
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
console.log('1.filter product=', filterProd(products, 400, 1000))
function filterProd(products, from, to) {
	products.sort(function(a,b){
		return a.price - b.price
	})
	function filter(element) {
	    return (element.price > from && element.price < to)
	}
	let newProd = products.filter(filter)
	return newProd
}
// transform array
console.log('2.transform array=', transformArr([1,2,3,5,8,9,10,24,56]))
function transformArr(arr) {
	let newArr = []
	arr.map(function(el){
		return newArr.push({digit: el, odd: el % 2 === 0 ? "true" : "false"})
	})
	return newArr
}
// check array on 0
console.log('3.check array on 0=', [1,2,3,0,5,8,9,10,24,56].every(checkArr))
function checkArr(el) {
  return el !== 0;
}
// check array on wordLength
console.log('4.check array on wordLength=', ['yes', 'no', 'hello', 'javascript'].some(wordLength))
function wordLength(el) {
  return el.length > 4
}
// string from array
var strObj = [
	{char: 'a', index: 12},
	{char: 'w', index: 8},
	{char: 'Y', index: 10},
	{char: 'p', index: 3},
	{char: 'p', index: 2},
	{char: 'N', index: 6},
	{char: '', index: 5},
	{char: 'y', index: 4},
	{char: 'r', index: 13},
	{char: 'H', index: 0},
	{char: 'e', index: 11},
	{char: 'a', index: 1},
	{char: '', index: 9},
	{char: '!', index: 14},
	{char: 'e', index: 7}
];
console.log('5.string from array=', stringToArray(strObj))
function stringToArray(arr) {
	arr.sort(function(a,b){
		return (a.index < b.index) ? -1 : 1
	});
	var res = arr.reduce(function(res,curr){
		return res + curr.char
	},'')
	return res
}
var people = [
  {
    _id: "5a577211db0e4a6e89c71dff",
    index: 0,
    guid: "87f51385-399d-4e14-9384-c38696071fec",
    isActive: false,
    age: 27,
    status: "05. orange",
    name: {
      first: "Moreno",
      last: "Molina"
    },
    company: "ATGEN",
    email: "moreno.molina@atgen.us",
    phone: "+1 (903) 510-3262"
  },
  {
    _id: "5a577211425e084650093355",
    index: 1,
    guid: "17d4c663-8349-4af6-9a65-ba3cef1af788",
    isActive: true,
    age: 33,
    status: "apple",
    name: {
      first: "Brock",
      last: "Merritt"
    },
    company: "HYPLEX",
    email: "brock.merritt@hyplex.biz",
    phone: "+1 (965) 491-2341"
  },
  {
    _id: "5a577211f9529131055d4e59",
    index: 2,
    guid: "b7e7cb7e-d3fd-4365-a001-a48bf89c9e74",
    isActive: true,
    age: 35,
    status: "02. brown",
    name: {
      first: "Beulah",
      last: "Walker"
    },
    company: "ZERBINA",
    email: "beulah.walker@zerbina.org",
    phone: "+1 (864) 543-2785"
  },
  {
    _id: "5a5772118725013095ac7c15",
    index: 3,
    guid: "2d9c19a8-b6c0-44e0-a4f8-384e39018489",
    isActive: true,
    age: 28,
    status: " 01. red",
    name: {
      first: "Julia",
      last: "Miller"
    },
    company: "MAGNINA",
    email: "julia.miller@magnina.co.uk",
    phone: "+1 (855) 473-2718"
  },
  {
    _id: "5a577211046dc80c16874a8e",
    index: 4,
    guid: "080869e1-e953-41cd-8b64-255861f5c79f",
    isActive: true,
    age: 26,
    status: "06. white",
    name: {
      first: "Sylvia",
      last: "Jennings"
    },
    company: "NIXELT",
    email: "sylvia.jennings@nixelt.name",
    phone: "+1 (864) 540-2701"
  },
  {
    _id: "5a57721147dd8c4b39b5bfbf",
    index: 5,
    guid: "4d6c8347-c090-49a5-8477-e60a7868e3b8",
    isActive: true,
    age: 27,
    status: "02. grey",
    name: {
      first: "Flores",
      last: "Pickett"
    },
    company: "SUPPORTAL",
    email: "flores.pickett@supportal.io",
    phone: "+1 (889) 503-3746"
  },
  {
    _id: "5a577211d0c7117850e11126",
    index: 6,
    guid: "12838f59-058f-496e-81cd-83c85d3aac7e",
    isActive: true,
    age: 24,
    status: "apple",
    name: {
      first: "Lois",
      last: "David"
    },
    company: "FRANSCENE",
    email: "lois.david@franscene.me",
    phone: "+1 (823) 434-3947"
  },
  {
    _id: "5a577211b0e51a96c253c194",
    index: 7,
    guid: "5f232ffe-260e-41ec-b157-9a796c4a9d67",
    isActive: false,
    age: 29,
    status: "03. green",
    name: {
      first: "Dillard",
      last: "Estes"
    },
    company: "MEDICROIX",
    email: "dillard.estes@medicroix.info",
    phone: "+1 (899) 452-3309"
  },
  {
    _id: "5a577211c02d13e41734833c",
    index: 8,
    guid: "1f577f86-a8d4-4e55-9b4f-2d9456a0a982",
    isActive: false,
    age: 26,
    status: "05. orange",
    name: {
      first: "Lee",
      last: "Bowers"
    },
    company: "BULLJUICE",
    email: "lee.bowers@bulljuice.biz",
    phone: "+1 (986) 558-3125"
  },
  {
    _id: "5a5772111b708b264080b5d2",
    index: 9,
    guid: "0632b6d6-5b57-490d-be54-75bf0e58c362",
    isActive: false,
    age: 36,
    status: "01. blue",
    name: {
      first: "Amie",
      last: "Bean"
    },
    company: "CEPRENE",
    email: "amie.bean@ceprene.net",
    phone: "+1 (823) 555-2803"
  },
  {
    _id: "5a57721153f5f7ee3b015a5b",
    index: 10,
    guid: "16529fc0-052c-41e1-b27d-bb62d81eee90",
    isActive: false,
    age: 33,
    status: "03. some",
    name: {
      first: "Mai",
      last: "Jenkins"
    },
    company: "AQUAZURE",
    email: "mai.jenkins@aquazure.com",
    phone: "+1 (986) 585-2366"
  },
  {
    _id: "5a577211c58d4fdaee2e838f",
    index: 11,
    guid: "4eeb3b04-c01f-4904-b626-9ed21ffcad97",
    isActive: true,
    age: 40,
    status: "05. yellow",
    name: {
      first: "Dee",
      last: "Ballard"
    },
    company: "FLEXIGEN",
    email: "dee.ballard@flexigen.ca",
    phone: "+1 (984) 600-3660"
  },
  {
    _id: "5a577211db0e4a6e89c71dff",
    index: 0,
    guid: "87f51385-399d-4e14-9384-c38696071fec",
    isActive: false,
    age: 27,
    status: "05. orange",
    name: {
      first: "Moreno",
      last: "Molina"
    },
    company: "ATGEN",
    email: "moreno.molina@atgen.us",
    phone: "+1 (903) 510-3262"
  },
  {
    _id: "5a577211425e084650093355",
    index: 1,
    guid: "17d4c663-8349-4af6-9a65-ba3cef1af788",
    isActive: true,
    age: 33,
    status: "apple",
    name: {
      first: "Brock",
      last: "Merritt"
    },
    company: "HYPLEX",
    email: "brock.merritt@hyplex.biz",
    phone: "+1 (965) 491-2341"
  },
  {
    _id: "5a577211f9529131055d4e59",
    index: 2,
    guid: "b7e7cb7e-d3fd-4365-a001-a48bf89c9e74",
    isActive: true,
    age: 35,
    status: "02. brown",
    name: {
      first: "Beulah",
      last: "Walker"
    },
    company: "ZERBINA",
    email: "beulah.walker@zerbina.org",
    phone: "+1 (864) 543-2785"
  },
  {
    _id: "5a5772118725013095ac7c15",
    index: 3,
    guid: "2d9c19a8-b6c0-44e0-a4f8-384e39018489",
    isActive: true,
    age: 28,
    status: " 01. red",
    name: {
      first: "Julia",
      last: "Miller"
    },
    company: "MAGNINA",
    email: "julia.miller@magnina.co.uk",
    phone: "+1 (855) 473-2718"
  },
  {
    _id: "5a577211046dc80c16874a8e",
    index: 4,
    guid: "080869e1-e953-41cd-8b64-255861f5c79f",
    isActive: true,
    age: 26,
    status: "06. green",
    name: {
      first: "Sylvia",
      last: "Jennings"
    },
    company: "NIXELT",
    email: "sylvia.jennings@nixelt.name",
    phone: "+1 (864) 540-2701"
  },
  {
    _id: "5a57721147dd8c4b39b5bfbf",
    index: 5,
    guid: "4d6c8347-c090-49a5-8477-e60a7868e3b8",
    isActive: true,
    age: 27,
    status: "02. brown",
    name: {
      first: "Flores",
      last: "Pickett"
    },
    company: "SUPPORTAL",
    email: "flores.pickett@supportal.io",
    phone: "+1 (889) 503-3746"
  },
  {
    _id: "5a577211d0c7117850e11126",
    index: 6,
    guid: "12838f59-058f-496e-81cd-83c85d3aac7e",
    isActive: true,
    age: 24,
    status: "apple",
    name: {
      first: "Lois",
      last: "David"
    },
    company: "FRANSCENE",
    email: "lois.david@franscene.me",
    phone: "+1 (823) 434-3947"
  },
  {
    _id: "5a577211b0e51a96c253c194",
    index: 7,
    guid: "5f232ffe-260e-41ec-b157-9a796c4a9d67",
    isActive: false,
    age: 29,
    status: "03. green",
    name: {
      first: "Dillard",
      last: "Estes"
    },
    company: "MEDICROIX",
    email: "dillard.estes@medicroix.info",
    phone: "+1 (899) 452-3309"
  },
  {
    _id: "5a577211c02d13e41734833c",
    index: 8,
    guid: "1f577f86-a8d4-4e55-9b4f-2d9456a0a982",
    isActive: false,
    age: 26,
    status: "05. orange",
    name: {
      first: "Lee",
      last: "Bowers"
    },
    company: "BULLJUICE",
    email: "lee.bowers@bulljuice.biz",
    phone: "+1 (986) 558-3125"
  },
  {
    _id: "5a5772111b708b264080b5d2",
    index: 9,
    guid: "0632b6d6-5b57-490d-be54-75bf0e58c362",
    isActive: false,
    age: 36,
    status: "01. blue",
    name: {
      first: "Amie",
      last: "Bean"
    },
    company: "CEPRENE",
    email: "amie.bean@ceprene.net",
    phone: "+1 (823) 555-2803"
  },
  {
    _id: "5a57721153f5f7ee3b015a5b",
    index: 10,
    guid: "16529fc0-052c-41e1-b27d-bb62d81eee90",
    isActive: false,
    age: 33,
    status: "03. green",
    name: {
      first: "Mai",
      last: "Jenkins"
    },
    company: "AQUAZURE",
    email: "mai.jenkins@aquazure.com",
    phone: "+1 (986) 585-2366"
  },
  {
    _id: "5a577211c58d4fdaee2e838f",
    index: 11,
    guid: "4eeb3b04-c01f-4904-b626-9ed21ffcad97",
    isActive: true,
    age: 40,
    status: "05. apple",
    name: {
      first: "Dee",
      last: "Ballard"
    },
    company: "FLEXIGEN",
    email: "dee.ballard@flexigen.ca",
    phone: "+1 (984) 600-3660"
  }
];
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
function sortPeople(peop) {
	let peopCheckList = peop.filter(function(el){
		return el.status.indexOf('some') > -1 || el.status.indexOf('apple') > -1 || el.status.indexOf('green') > -1 || el.status.indexOf('white') > -1   
	})
	let peopYoung = peopCheckList.filter(function(year) {
		return year.age < 35
	})
	let peopOld = peopCheckList.filter(function(year) {
		return year.age > 35
	})
	let peopOther = peop.diff(peopYoung.concat(peopOld))
	return [{'people check yong': peopYoung},{'people check old': peopOld},{'other people': peopOther}]
}
console.log(sortPeople(people))