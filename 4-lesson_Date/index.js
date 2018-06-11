//Write function which return day of week for predetermined date
function firstDayOfTheYear(date) {
var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

return days[date.getDate()];
}

var date = new Date(2018, 0, 1);



console.log(firstDayOfTheYear(date));
//------------------------------------------------------------------------------
//Write function which take date in string format and return day of week
var stringDate = '01.02.2018';

function dateFromString(stringDate) {
  var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  var year = stringDate.substr(length - 4, 4),
      month = stringDate.substr(3, 2),
      day = stringDate.substr(0, 2);

  var formatData = (+year + '.' + month + '.' + day);

  return days[new Date(formatData).getDate()];
}

console.log(dateFromString(stringDate));
//------------------------------------------------------------------------------
//Write function which return how many weeks passed from established date
//for today


function weeksAfter() {
  var week = Math.floor((new Date() - new Date(2010, 0, 1))/604800000);

  return week;

}
console.log(weeksAfter());
//
