var string = 'i love javascript'

// 1. вывести в консоль каждую букву
// 2. вывести в консоль строку, в которой каждое слово будет начинаться с заглавной буквы
// 3. вывести в консоль строку 'tpircsavaj evol i'
// 4. заменить слово javascript на слово ECMAScript
// 5. вывести в консоль второе слово
//------------------------------------------------------------------------------
function letters(string) {
  var n = string.length;
  for (var i = 0; i < n; i++) {
    console.log(string[i]);
  }
}

letters(string);
//------------------------------------------------------------------------------
function replace(string) {
  return string.replace('javascript', 'ECMAScript');
}

console.log(replace(string));
//------------------------------------------------------------------------------
function firstLetterUp(string) {
}

firstLetterUp(string);
