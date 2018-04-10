var constructor = new ConstructorUser(users)
console.log('constructor Length', constructor.getLengthArray())
console.log('get element for index', constructor.getElementForIndex(10))
console.log('sort array user', constructor.sortBy('age'))
console.log('sort array for string', constructor.filterBy('skill', 'javascript'))
console.log('sort array for string', constructor.filterBy('skill', 'javascript', 'id'))
console.log('sort array for object', constructor.filterBy([{skill: 'php'}, {gender: 'Male'}]))
console.log('sort array for object and string', constructor.filterBy([{skill: 'php'}, {gender: 'Male'}], 'id'))
console.log('sort array by value', constructor.findByValue('skill', 'ja'))
console.log('clone array', constructor.cloneArray())
// static method
console.log('check arr', ConstructorUser.checkFieldInCollection(users, 'id'))
var uCollection = new ConstructorUser(users);
var uList = [{}, {}, {}];
console.log('getCreator', ConstructorUser.getCreator(uCollection))
console.log('getCreator', ConstructorUser.getCreator(uList))
