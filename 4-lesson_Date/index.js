
//не знаю почему в (year || 2018, 0, 1) без || 2018, 0, 1 не работает
//Добавил проверку
function firstDayOfTheYear(year) {
  if (typeof year != 'number') {
    return false;
  }
  var date = new Date(year || 2018, 0, 1);
  var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  return days[date.getDay()];
}
console.log(firstDayOfTheYear());

//------------------------------------------------------------------------------
//Write function which take date in string format and return day of week
var stringDate = '01.02.2018';
function dateFromString(stringDate) {
  var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  var formatData = stringDate
    .split('.')
    .reverse()
    .join('.');
  return days[new Date(formatData).getDate()];
}
console.log(dateFromString(stringDate));
//------------------------------------------------------------------------------
//Write function which return how many weeks passed from established date
//for today
function weeksAfter() {
var week = Math.floor(
    (new Date() - new Date(2010, 0, 1)) / (24 * 60 * 60 * 1000 * 7)
  );
  return week;
}
console.log(weeksAfter());
