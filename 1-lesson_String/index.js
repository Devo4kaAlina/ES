var string = 'i love javascript'

// 1. вывести в консоль каждую букву
// 2. вывести в консоль строку, в которой каждое слово будет начинаться с заглавной буквы
// 3. вывести в консоль строку 'tpircsavaj evol i'
// 4. заменить слово javascript на слово ECMAScript
// 5. вывести в консоль второе слово
for (var i = 0; i < string.length ; i++) {
	console.log('1 -----------:' + string.charAt(i))
};
/////////////
function toUpper(str) {
	var newStr = '';
	newStr = str.replace(str[0],str[0].toUpperCase());
	for (var i = 0; i < newStr.length; i++) {
		if(newStr[i] === ' ') {
			newStr = newStr.replace(newStr.charAt(i + 1),newStr.charAt(i + 1).toUpperCase());
		}
	};
	
	console.log('2 ----------' + newStr)
}
toUpper(string)
////////////
function reverse(string) {
    var newStr = '';
    for (var i = string.length - 1; i >= 0; i--) {
        newStr += string.charAt(i);
    }
    console.log('3 ----------' + newStr)
}
reverse(string)
/////

console.log('4 -----------' + string.replace('javascript','ECMAScript'))
///////
console.log('5----------' + string.split(' ')[1])
