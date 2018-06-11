//Write function which return day of week for predetermined date
function firstDayOfTheYear(date) {
  var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

  return days[date.getDate()];
}

var date = new Date(2018, 0, 1); // getDay, а не getDate возвращает день. Так у тебя все время будет 1

console.log(firstDayOfTheYear(date));
// -----------------------------------------------------------------------------
// так что-то я не поняла... я хочу ввести год цифрами, например, 2018, а мне ошибку выдает :(
// console.log(firstDayOfTheYear(2018));
// и вообще я хочу хотябы элементарные проверки
// -----------------------------------------------------------------------------
function firstDayOfTheYear_v2(year) {
  var date = new Date(year || 2018, 0, 1);
  var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  return days[date.getDay()];
}

console.log("first day of 2016 year ---", firstDayOfTheYear_v2(2016));
console.log("first day of default year ---", firstDayOfTheYear_v2());
//------------------------------------------------------------------------------
//Write function which take date in string format and return day of week
var stringDate = "01.02.2018";

function dateFromString(stringDate) {
  var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  var year = stringDate.substr(length - 4, 4),
    month = stringDate.substr(3, 2),
    day = stringDate.substr(0, 2);

  var formatData = +year + "." + month + "." + day; // не понимаю, звчем ты год приводишь к числу

  return days[new Date(formatData).getDate()]; // getDay
}

console.log(dateFromString(stringDate));
//------------------------------------------------------------------------------
// ок, но измываться над строкой 3 раза, делая stringDate.substr, как миниму - неразумно
// ты знаешь уже достаточно методов работы со строками, чтобы избежать такого кода...
//------------------------------------------------------------------------------
var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
function dateFromString_v2(stringDate) {
  var formatData = stringDate
    .split(".") // разбили строку на массив
    .reverse() // перевернули, чтобы год был первый
    .join("."); // преобразовали в строку

  return days[new Date(formatData).getDay()];
}

console.log(dateFromString_v2(stringDate));

//------------------------------------------------------------------------------
//Write function which return how many weeks passed from established date
//for today

function weeksAfter() {
  // var week = Math.floor((new Date() - new Date(2010, 0, 1)) / 604800000);
  // что за магическое число 604800000?
  // ты через время забудешь что это. нужно либо коммент писать, либо явно его высчитывать
  var oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 24h * 60min * 60sec * 1000ms
  var week = Math.floor(
    (new Date() - new Date(2010, 0, 1)) / (oneDayInMilliseconds * 7)
  );

  return week;
}
console.log(weeksAfter());
//
