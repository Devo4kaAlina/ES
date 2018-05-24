function firstDayOfTheYear(date) {
var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

return days[date.getDate()];
}

var date = new Date(2018, 0, 1);

console.log(firstDayOfTheYear(date));
