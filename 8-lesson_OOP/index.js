/**
* №1
*/
function planet(name) {
	this.name = name;
	this.getName = function() {
		return 'Planet name is' + this.name
	}
}

function PlanetWithSatellite (satellite, name) {
	planet.call(this, name);
	this.satellite = satellite;
	this.getName = function() {
		return 'Planet name is ' + this.name + '.The satellite is ' + this.satellite 
	}
}
let earth = new PlanetWithSatellite('earth', 'moon');
console.log('PlanetWithSatellite = ', earth.getName())


/**
* №2
*/
function building(name, floor) {
	this.name = name;
	this.floor = floor;
	this.getFloor = function() {
		return 'Floor(s) - ' + this.floor
	};
	this.setFloor = function(fl) {
		this.floor = fl
	};
}

function home(name,floor,room) {
	building.apply(this,[name, floor]);
	this.allRooms = room;
	var res = this.getFloor;
	this.getFloor = function() {
		console.log(res.call(this))
		return {floor: this.floor, rooms: this.floor*this.allRooms}
	}
}
let newBuid = new building('home name', 5);
console.log('newBuid.getFloor = ', newBuid.getFloor())
newBuid.setFloor(9);
console.log('newBuid.getFloor = ', newBuid.getFloor())

var home1 = new home("home name", 5, 5);
console.log('home1.getFloor() = ', home1.getFloor())

/**
* №3
*/
function mebel(name, price) {
	this.name = name ? name : '';
	this.price = price ? price : 0;
}
mebel.prototype.getInfo = function() {
	return {name:this.name, price: this.price}
}
function mebelCus(name, price, cus)  {
	mebel.apply(this, [name, price, cus])
	this.cus = cus
	this.getInfo = function() {
		return {name:this.name, price: this.price, custom: this.cus}
	}
}
var officeMebel = new mebelCus('mebel1', 500, 'something')

console.log('mebel', officeMebel.getInfo())



/**
* №4
*/

function User(name, date) {
	this.name = name ? name : '';
	this.date = date ? date : '--/--/----';
}
User.prototype.getInfo = function() {
	return {name:this.name, date: this.date}
}
function Admin(name, date, superAdmin) {
	this.superAdmin = superAdmin;
	User.apply(this, [name, date, superAdmin])
}
Admin.prototype.getInfo = function() {
	return {name:this.name, date: this.date, superAdmin: this.superAdmin}
}
function Guest(name, date, validDate) {
	this.validDate = validDate;
	User.apply(this, [name, date, validDate])
}
Guest.prototype.getInfo = function() {
	return {name:this.name, date: this.date, validDate: this.validDate}
}
var object = new Admin('Sergey', '22.12.17', false);
console.log('Admin getInfo', object.getInfo())
var object2 = new Guest('Sergey', '22.12.17', '29.12.17');
console.log('Guest getInfo', object2.getInfo())

/**
* №5
*/

function General() {
  this.test = true;
  this.parent = true;
  this.getInfo = function () {
    return {test: this.test, parent: this.parent};
  }
}
function Child() {
	General.apply(this, [this.parent, this.child])
	this.parent = false;
	this.child = true;
	this.getInfo = function () {
    	return {test: this.test, parent: this.parent, child: this.child};
  }
}
var obj = new Child();
console.log('Child', obj.getInfo())


/**
* №6
*/

function goodBoy(name) {
	this.name = name ? name : '';
	this.goodBoy = true;
	this.getName = function() {
		return 'Мальчика зовут ' + this.name + '. Он ' + (this.goodBoy === true ? 'хороший.' : 'плохой.')
	}
}
function bagBoy(name) {
	goodBoy.apply(this, [name, this.goodBoy])
	this.goodBoy = false;
	let parent = this.getName.bind(this);
	this.getName = function() {
		parent.call(this)
		alert(parent() + '\n' + 'Не дружите с ним')
	}
}
var objBoy1 = new goodBoy('Sergey')
console.log(objBoy1.getName())

var objBoy2 = new bagBoy('Alexandr')
objBoy2.getName()

/**
* №7
*/
function Fruit() {
	this.init = function(name, color) {
		this.name = name ? name : '';
		this.color = color ? color : '';
	}
	this.getInfo = function () {
    	return 'Fruit - ' + this.name + ',' + 'color - ' + this.color
  	}
}
function SweetFruit() {
	Fruit.call(this, this.sweetnes)
	this.sweetnes = true;
	let fruitParent = this.getInfo.bind(this);
	this.setSweetnes = function(sweet) {
		this.sweetnes = sweet ? sweet : 'true'
	}
	this.getInfo = function() {
		fruitParent.call(this)
		return fruitParent() + ',' + 'sweetnes - ' + this.sweetnes
	}
}
let fruitObj = new SweetFruit();
fruitObj.init('apple', 'green')
console.log(fruitObj.getInfo())
fruitObj.setSweetnes('false')
console.log(fruitObj.getInfo())

/**
* №8
*/

function User2(name, age) {
  this.name = name || 'Unknown';
  this.age = age || 0;
}

User2.prototype.setNewName = function (name) {
  this.name = name;
};
function NewUser(name, age) {
	User2.apply(this, arguments);
}

NewUser.prototype = Object.create(User2.prototype);
NewUser.prototype.constructor = NewUser;

NewUser.prototype.setNewName = function () {
	this.changed = 'The field ' + this.name + ' was changed!' 
}
NewUser.prototype.getNewName = function () {
	return this.changed
}


let newuser = new NewUser('text');
newuser.setNewName()
console.log(newuser.getNewName())

/**
* №9
*/


function Module(name) {
  if (typeof name !== 'string') {
    throw 'Enter a name!';
  }
  
  this.getName = function () {
    return name;
  };
}

Module.prototype.getPrettyName = function () {
  let name = this.getName();  
  name = name.replace(/\s+/, '_');  
  return 'The module name is ' + name[0].toUpperCase() + name.substr(1);
};

Module.prototype.setGlobalName = function (prefix) {
  let name = this.getName();
  this.name = prefix ? prefix + '_' + name : name; 
};

function NewModule(name) {
	Module.apply(this, arguments);
}
NewModule.prototype = Object.create(Module.prototype);
NewModule.prototype.constructor = NewModule;

NewModule.prototype.setGlobalName = function (prefix) {
  Module.prototype.setGlobalName.call(this);
  this.length = this.name.length 
  console.log('this.length.name:', this.length, 'this.name:', this.name)
};


var mod = new NewModule('tratata');
console.log(mod.getPrettyName())
mod.setGlobalName('prefix')
