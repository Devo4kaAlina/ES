/**
 * №1
 */
const week = {
	0: 'Вс',
	1: 'Пн',
	2: 'Вт',
	3: 'Ср',
	4: 'Чт',
	5: 'Пт',
	6: 'Сб'
}
console.log('returnFirstDay = ', returnFirstDay(2016))

function returnFirstDay(year) {
  return week[new Date(year, 0).getDay()]
}


/**
 * №2
 */
console.log('returnNameDay = ', returnNameDay('29.03.1985'))

function returnNameDay(date) {
	// let dateArr = date.split('.')
  	// return week[new Date(dateArr[2], dateArr[1] - 1, dateArr[0]).getDay().toString()]
  	// or
  	return week[new Date(+date.substr(6, date.length - 1), +date.substr(3,2) - 1, +date.substr(0,2)).getDay()]
}



/**
 * №3
 */
console.log('getTotalWeek = ', getTotalWeek(2017, 0))

function getTotalWeek(year, month) {
  	return Math.floor((new Date() - new Date(year, month)) / (1000*60*60*24*7))
}